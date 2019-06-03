import React from 'react';
import { TabContent, TabPane, Nav, NavItem, NavLink, Card, Button, CardTitle, CardText, Row, Col } from 'reactstrap';
import classnames from 'classnames';
import Messages from "./Messages";
import {find, clone} from "lodash";
import axios from "axios";

export default class ChatSessions extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.close = this.close.bind(this);

        this.state = {
            activeTab: null,
            unreadTabs: {}
        };
    }

    componentDidMount() {
        window.Echo.private('Operator.'+this.props.operator)
            .listen('ClientNewMessage', ({client}) => {

                this.setState(({unreadTabs, activeTab}) => {
                    let newUnreadTabs =  clone(unreadTabs);

                    if(activeTab != client.id) {
                        newUnreadTabs[client.id] = true;
                    }

                    if(activeTab != client.id || !document.hasFocus()) {
                        this.props.shortAlert()
                    }

                    return {
                        unreadTabs: newUnreadTabs
                    }
                });
            })
    }

    componentDidUpdate(oldProps) {
        if(oldProps.open !== this.props.open ) {
            this.toggle(this.props.open[0]);
        }
    }

    close() {

        this.setState(({sessions}) => {
            let newActiveSession =  find(sessions,(session) => {
                session.id != this.state.activeTab
            });
            return {
                activeTab: newActiveSession ? newActiveSession.id : null
            }
        })
    }

    toggle(tab) {
        if (this.state.activeTab !== tab) {
            localStorage.setItem('activeDialogId', tab);

            this.setState(({unreadTabs}) => {
                let newUnreadTabs = clone(unreadTabs);
                newUnreadTabs[tab] = false;

                return {
                    activeTab: tab,
                    unreadTabs: newUnreadTabs
                }
            });
        }
    }


    hasUnread(session) {
        if(typeof this.state.unreadTabs[session.id] === 'undefined') {
            return  session.pivot ? session.pivot.has_unread_messages : false
        }
        return this.state.unreadTabs[session.id];
    }

    getName(session) {
        return session.name || session.ip
    }
    updateName(session, name) {
        axios.post('/api/raname-session/'+session.id, {
            name
        }).then(() => {
            this.props.onNameChange(session.id, name)
        })
    }

    render() {
        return (
            <div>
                <Nav tabs className={'nav-tabs-material'}>
                    {this.props.sessions.map((session) => {

                        return (
                            <NavItem key={session.id}>
                                <NavLink
                                    href='#'
                                    className={classnames('d-flex', { active: this.state.activeTab === session.id, blink: this.hasUnread(session) })}
                                    onClick={() => { this.toggle(session.id); }}
                                    onDoubleClick={() => {

                                        window.customPrompt('Name', this.getName(session)).then((value) => {
                                            this.updateName(session, value)
                                        })
                                    }}
                                >
                                    {this.getName(session)}
                                    <button className="close-chat-icon" onClick={(e) => {
                                        e.stopPropagation();
                                        this.props.leave(session.id)
                                    }}>
                                        <span className="mi mi-close"></span>
                                    </button>
                                </NavLink>
                            </NavItem>
                        )
                    })}
                </Nav>
                <TabContent activeTab={this.state.activeTab}>
                    {this.state.activeTab && <Messages
                        key={this.state.activeTab}
                        operator={this.props.operator}
                        tabId={this.state.activeTab}
                        close={this.close}
                    />}
                </TabContent>
            </div>
        );
    }
}
