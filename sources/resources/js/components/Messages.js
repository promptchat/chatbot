import React from 'react'
import {Col, Row, TabPane} from "reactstrap";
import axios from 'axios';
import {clone} from 'lodash';
import classnames from 'classnames';
import moment from 'moment';
import nl2br from 'react-nl2br';

export default class Messages extends React.Component {

    state = {
        messages: [],
        message: "",
        typing: "",
        notification: "",
    };

    constructor() {
        super(...arguments);
        this.writeMessage = this.writeMessage.bind(this);
        this.messageChange = this.messageChange.bind(this);
    }


    messageChange(e) {


        let message = e.target.value;
        this.setState({
            message: message
        });
        if(message) {
            this.private.whisper('answering');
        } else {
            this.private.whisper('stop-answering')
        }
    }

    writeMessage(e) {
        e.preventDefault();
        let message = this.state.message;
        if(message !== '') {
            const data = {message};

            this.setState({message: ""});
            this.private.whisper('stop-answering');
            axios.post('api/write-message/' + this.props.tabId, data)
        }
    }


    componentDidMount() {
        axios.get('api/messages/' +  this.props.tabId)
            .then(({data}) => {
                this.initializeEchoListeners(data.session.api_token);

                this.setState({
                    messages: data.messages,
                    notification: data.session.is_finished ? window.translates.user_left_chat :'',
                    session: data.session
                }, () => this.scrollBottom())
            })
    }


    scrollBottom() {
        setTimeout(() => {
            this.list.scrollTop = this.list.scrollHeight;
        })
    }
    isScrolled() {

        return  this.list.scrollTop == this.list.scrollHeight - this.list.clientHeight;

    }

    initializeEchoListeners(token) {
        this.private = window.Echo.private('Session.' + token)
            .listen('ClientNewMessage', (e) => {
                let cb = this.isScrolled() ? () => this.scrollBottom() : () => {};
                this.setState(({messages}) => {
                    let newMessages = clone(messages);
                    newMessages.push(e.message);

                    return {
                        messages: newMessages
                    }
                },cb)
            })
            .listen('NewUserDisconnected', (e) => {
                this.setState({
                    notification: window.translates.user_left_chat
                })
            })
            .listen('NewUserConnected', (e) => {
                this.setState({
                    notification: ""
                })
            })
            .listen('OperatorLeaveChat', (e) => {

                this.props.close()
            })
            .listenForWhisper('typing', (e) => {
                this.setState({
                    typing: e.message
                })
            });
    }

    componentWillUnmount() {
        if(this.private) {
            window.Echo.leave('Session.' + this.state.session.api_token);
        }
    }

    isOwnMessage(message) {
        return message.user_id == this.props.operator;
    }

    getUserName(message) {
        return message.user ? message.user.name : 'User';
    }

    getUserImage(message) {
        return message.user && message.user.image ? `/storage/${message.user.image.path}` : '/img/default-user-image.png';
    }

    render() {
        return (
            <TabPane tabId={this.props.tabId}>
                <div className={'position-relative'}>
                    {this.state.notification && <div className="chat-alert alert alert-warning" role="alert">
                        {this.state.notification}
                    </div>}
                    <ul ref={(list) => this.list = list} className={'chat'}>
                        {
                            this.state.messages.map((message) => {
                                let ownMessage = this.isOwnMessage(message);

                                let createdAt = moment.utc(message.created_at);
                                return (
                                    <li key={message.id} className={classnames('chat-element', {'right': ownMessage, left: !ownMessage})}>
                                        {!ownMessage &&
                                            <div className={'user-img'}>
                                                <img src={this.getUserImage(message)}/>
                                            </div>
                                        }

                                        <div className={'time'}>
                                            {!ownMessage && `${this.getUserName(message)},`} {createdAt.fromNow()}
                                        </div>
                                        <div className={'message'}>
                                            {nl2br(message.message)}
                                        </div>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
                {
                    this.state.typing ? <span className={'user-typing'}>{window.translates.user_typing} ({
                        this.state.typing
                    })</span>: null
                }
                <div>
                    <form action="" onSubmit={this.writeMessage}>
                        <div className={'answer-block'}>
                            <textarea className={'answer-area'} placeholder={window.translates.enter_message_here} onKeyDown={(e) => {
                                if(e.keyCode === 13 && !e.shiftKey) {
                                    this.writeMessage(e);

                                }
                            }} value={this.state.message} onChange={this.messageChange} />
                            <button type={'submit'} className={'send-btn'}><img className={'icon'} src='icons/send-button.svg'/></button>
                        </div>
                    </form>
                </div>
            </TabPane>
        )

    }

}