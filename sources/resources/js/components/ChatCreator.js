import React from 'react';
import {wrapErrors} from "../help/functions";
import BuilderField from "./BuilderField/index";
import axios from 'axios';
import Modal from 'react-modal';


Modal.setAppElement('#app');

const STATUS_VALIDATION_FAILED = 422;
export default class ChatCreator extends React.Component {
    chat;
    timer;

    state = {
        id: this.props.id,
        name: this.props.name || 'New chatbot',
        data: this.props.data ? JSON.parse(this.props.data) : {},
        errors: {},
        saving: false
    };

    autoSave() {
        this.timer = setTimeout(() => {
            this.saveButton().then(() => this.autoSave());
        }, 10e3)
    }

    componentDidMount() {
        if(this.state.id) {
            this.autoSave();
        }
    }

    saveButton() {
        clearTimeout(this.timer);
        let data = {
            name: this.state.name
        };

        let [chat, relations] = this.chat.getData();


        data['chat'] = chat;
        data['relations'] = relations;
        return new Promise(resolve => {
            this.setState({saving: true}, resolve)
        }).then(() => {
            return axios({
                url: `/chats/${this.state.id || ''}`,
                method: this.state.id ? "PATCH" : "POST",
                data
            }).then((response) => {
                return new Promise(resolve => this.setState({
                    saving: false
                }, () => resolve(response)))
            })

        })

    }

    createButton() {

        this.saveButton().then((response) => {
            if (this.state.id) {
                if (response.data.url) {
                    window.location = response.data.url;
                }
            } else {
                history.replaceState({}, "", response.data.url);
                this.setState({
                    id: response.data.id
                }, () => this.autoSave())
            }
        })
            .catch((error) => {
                if (error.response.status === STATUS_VALIDATION_FAILED) {
                    this.setState({errors: wrapErrors(error.response.data.errors)});
                }
            });
    }

    renderEdit() {
        return (
            <div className="chat-config">

                <div className="form-group">
                    <label>{window.translates.name}</label>
                    <input

                        placeholder={window.translates.name_your_new_chatbot}
                        type="text"
                        name="name"
                        value={this.state.name}
                        onChange={(e) => this.setState({name: e.target.value})}
                        className="form-control"
                    />
                </div>
                <div className="row">
                    <div className="col-sm-12 bottom-btn">
                        {this.state.saving ? <span className={'text-white'}>{window.translates.saving}</span>: null}
                        <button onClick={() => this.createButton()}
                                className="btn btn-primary pull-right text-uppercase">{window.translates.save}</button>
                    </div>
                </div>
            </div>)
    }

    render() {

        return (<div>
                {this.state.id ? null :
                <Modal
                    isOpen={true}
                    onAfterOpen={() => {
                    }}
                    onRequestClose={() => {
                    }}
                    style={{
                        overlay: {
                            overflowX: 'hidden',
                            overflowY: 'auto',
                        },
                        content: {
                            position: 'relative',
                            top: 'unset',
                            left: 'unset',
                            right: 'unset',
                            bottom: 'unset'
                        }
                    }}
                >
                    <div className='react-modal-header'>
                        <i className={`icon fa fa-edit`}/>
                        {/*<div className='close' onClick={() => {this.props.onCancel()}}><i className='fa fa-times'/></div>*/}
                    </div>
                    {this.renderEdit()}
                </Modal>}
                <BuilderField logo={this.props.logo} chatConfig={this.renderEdit()} ref={(ref) => this.chat = ref} {...this.state.data} />

            </div>
        );
    }
}
