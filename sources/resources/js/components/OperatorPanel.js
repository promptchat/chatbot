import React, {Component} from 'react';
import axios from 'axios';
import {clone, find, remove, filter, cloneDeep} from 'lodash';
import ChatSessions from "./ChatSessions";
import {Howl, Howler} from 'howler';
import classnames from 'classnames';
import Messages from "./Messages";

export default class OperatorPanel extends Component {
    state = {
        departments: JSON.parse(this.props.departments),
        chatConfigs: JSON.parse(this.props.configs),
        clients: [],
        sessions: new Set([]),
        open: null,
        sessionId: null,
        chatsType: 1,
        tags: [],
    };


    constructor() {
        super(...arguments);

        this.leave = this.leave.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.shortAlert = this.shortAlert.bind(this);


        this.sound = new Howl({
            src: [this.state.chatConfigs.short_notification_audio]
        });


        this.bring = new Howl({
            loop: true,
            src: [this.state.chatConfigs.bring_notification_audio]
        });


    }

    onNameChange(name) {
        this.setState(({clients}) => {
            let newClients = clone(clients);
            let client = find(newClients, {id: this.state.sessionId});

            if (client) {
                client.name = name;
            }

            return {
                clients: newClients
            }
        })
    }

    open(clientId) {
        this.setState(({clients}) => {
            let newClients = clone(clients);
            let currentClient = find(newClients, {id: clientId});
            currentClient.has_unread_messages = false;
            return {
                clients: newClients,
                sessionId: clientId
            }
        })

    }

    takeAPart(clientId) {
        axios.post('/api/take-part/' + clientId)
            .then(({data}) => {
                this.setState(({sessions}) => {
                    let session = data.session;
                    let newSessions = new Set([...sessions]);
                    newSessions.add(session.id);


                    return {
                        sessions: newSessions,
                    }
                }, () => {
                    this.open(clientId)
                })
            });

    }

    leave() {
        axios.post('/api/leave/' + this.state.sessionId)
            .then(({}) => {
                this.setState(({sessions, sessionId}) => {

                    let newSessions = new Set([...sessions]);
                    newSessions.delete(sessionId);

                    return {
                        sessionId: null,
                        sessions: newSessions
                    }
                })
            });

    }

    checkSound() {
        if (this.state.chatConfigs.bring_notification_allowed) {
            if (find(this.state.clients, (a) => a.last_message_from_user && !a.operators.length)) {
                if (!this.bringId) {
                    this.bringId = this.bring.play();
                }
            } else {
                this.bring.stop(this.bringId);
                this.bringId = null;
            }
        }
    }


    componentDidUpdate(prevProps, prevState, snapshot) {
        this.checkSound();
    }

    shortAlert() {
        if (this.state.chatConfigs.short_notification_allowed) {
            this.sound.play();
        }
    }

    componentDidMount() {

        axios.get('/api/panel')
            .then(({data}) => {

                this.setState({
                    clients: data.clients,
                    sessions: new Set(data.sessions),
                    tags: data.tags
                });

            });

        window.Echo.private('Operator.' + this.props.operator)

            .listen('ClientNewMessage', ({client}) => {

                this.setState(({sessionId, clients}) => {

                    if (sessionId !== client.id) {
                        let newClients = clone(clients);
                        let currentClient = find(newClients, {id: client.id});
                        if (currentClient) {
                            this.shortAlert();
                            currentClient.has_unread_messages = true;
                            return {
                                clients: newClients
                            };
                        }
                    }
                });
            })

        this.state.departments.map((departmentId) => {
            window.Echo.private('Department.' + departmentId)
                .listen('NewUserConnected', ({client}) => {
                    this.setState(({clients}) => {
                        if (!clients.find(({id}) => +client.id === +id)) {
                            let newClients = clone(clients);
                            client.name = client.names[this.props.operator];
                            newClients.splice(0, 0, client);
                            return {
                                clients: newClients
                            };
                        }
                    });
                })
                .listen('NewUserDisconnected', ({client}) => {
                    this.setState(({clients}) => {
                        let newClients = clone(clients);
                        remove(newClients, {id: client.id});
                        return {
                            clients: newClients
                        };
                    });
                })
                .listen('NewLiveChatMessage', ({client}) => {
                    this.setState(({clients}) => {
                        let newClients = clone(clients);
                        let currentClient = find(newClients, {id: client.id});
                        if (currentClient) {
                            this.shortAlert();
                            currentClient.last_message_from_user = client.last_message_from_user;
                            return {
                                clients: newClients
                            };
                        }
                    });
                })
                .listen('NewOperatorInChat', ({operator, client}) => {

                    this.setState(({clients}) => {
                        let newClients = cloneDeep(clients);
                        let currentClient = find(newClients, {id: client.id});
                        if (currentClient) {
                            if (!currentClient.operators.find(({id}) => +operator.id === +id)) {
                                currentClient.operators.push(operator);
                                return {
                                    clients: newClients
                                };
                            }
                        }
                    });
                })
                .listen('ChatSessionTagsChanged', ({client, tags }) => {

                    this.setState(({clients}) => {
                        let newClients = cloneDeep(clients);
                        let currentClient = find(newClients, {id: client.id});
                        if (currentClient) {
                            currentClient.tags  = tags;
                            return {
                                clients: newClients
                            };

                        }
                    });
                })
                .listen('OperatorLeaveChat', ({operator, client}) => {

                    this.setState(({clients}) => {
                        let newClients = cloneDeep(clients);
                        let currentClient = find(newClients, {id: client.id});
                        if (currentClient) {
                            remove(currentClient.operators, (({id}) => +operator.id === +id));
                            currentClient.last_message_from_user = client.last_message_from_user;
                            return {
                                clients: newClients
                            };

                        }
                    });
                })

        })
    }

    render() {
        let clients = clone(this.state.clients);
        clients.sort((a, b) => {
            let aWeight = a.last_message_from_user && !a.operators.length ? 1 : 0;
            let bWeight = b.last_message_from_user && !b.operators.length ? 1 : 0;
            return bWeight - aWeight;
        });

        let sessions = filter(clients, ({id}) => this.state.sessions.has(id));
        let activeSession = find(sessions, {id: this.state.sessionId});

        return (
            <div className={'row operator-page'}>
                <div className={'col-md-4 panel'}>
                    <div className="row">
                        <div className="col-md-12">
                            <div className="card mb-3 conversation">
                                <div className="card-header text-center conversation-type">
                                    <h5 className="text-white"><strong>{window.translates.my_chats}</strong></h5>
                                </div>
                                <div className="card-body message-info">
                                    <ul className="chats-list">
                                        {this.state.sessions.size ?
                                            sessions
                                                .map((session) => {
                                                    return (
                                                        <ClientCard
                                                            checkUnread
                                                            active={session.id === this.state.sessionId}
                                                            key={session.id}
                                                            onClick={() => {
                                                                this.open(session.id)
                                                            }}
                                                            client={session}
                                                            operator={this.props.operator}
                                                            shortAlert={this.shortAlert}
                                                            hasUnread={this.hasUnread}
                                                        />)
                                                })
                                            : <div className="no-messages text-center">
                                                {window.translates.no_active_chats}
                                            </div>
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-12">
                            <div className={'card mb-3 conversation'}>
                                <div className="card-header text-center conversation-type">
                                    <h5 className="text-white"><strong>{window.translates.all_chats}</strong></h5>
                                </div>
                                <div className={'card-body message-info'}>
                                    <ul className={'chats-list'}>
                                        {
                                            clients
                                                .map((client) => {
                                                    return (
                                                        <ClientCard
                                                            key={client.id}
                                                            onClick={() => {
                                                                this.takeAPart(client.id)
                                                            }}
                                                            client={client}
                                                        />
                                                    )
                                                })
                                        }
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className={'col-md-8 sessions'}>
                    <div className={'card'}>
                        <div className={'card-body'}>
                            {activeSession && <Messages
                                tags={this.state.tags}
                                onNameChange={this.onNameChange}
                                key={activeSession.id}
                                operator={this.props.operator}
                                leave={this.leave}
                                session={activeSession}
                            />}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

class ClientCard extends React.PureComponent {
    state = {

    };

    getClientName(client) {
        let name = [];

        if (client.geo && client.geo.iso) {
            let geo = client.geo;
            name.push(<img src={`/flags/${geo.iso.toLowerCase()}.gif`} className={'mr-1'} key="flag"/>);
            name.push(<span key={'country '} className={'font-italic mr-1'}>{geo.city}, {geo.country}</span>);
        }
        name.push(<span key={'ip'} className={'font-weight-bold'}>[{client.name || client.ip}]</span>);

        return name
    }


    render() {
        let {client} = this.props;

        return (
            <li
                onClick={this.props.onClick}
                className={classnames({
                    blink: client.last_message_from_user && !client.operators.length,
                    unread: this.props.checkUnread && client.has_unread_messages,
                    active: this.props.active
                })}
            >
                <div className="">
                    <div>
                        <div>
                            {this.getClientName(client)}
                        </div>
                        <strong>
                            {client.url}
                        </strong>
                    </div>
                    <ul className={'operator-list'}>
                        {client.operators.map(({name, id, image}) =>
                            <li key={id}>
                                <img src={location.origin + '/storage/' + image.path} title={name}/>
                            </li>
                        )}
                    </ul>
                    <ul className={'tag-list'}>
                        {client.tags.map(({name, id}) =>
                            <li className="tag" key={id}>
                                {name}
                            </li>
                        )}
                    </ul>
                </div>
            </li>
        )
    }
}