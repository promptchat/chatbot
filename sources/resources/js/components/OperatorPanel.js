import React, { Component } from 'react';
import axios from 'axios';
import {clone, find, remove} from 'lodash';
import ChatSessions from "./ChatSessions";
import {Howl, Howler} from 'howler';
import classnames from 'classnames';


export default class OperatorPanel extends Component {
    state = {
        departments: JSON.parse(this.props.departments),
        chatConfigs: JSON.parse(this.props.configs),
        clients: [],
        sessions: [],
        open: null
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

    onNameChange(clientId, name) {
        this.setState(({sessions, clients}) => {
            let newState = {};
            let newSessions = clone(sessions);
            let session = find(newSessions, {id: clientId});
            if(session) {
                session.name = name;
                newState.sessions = newSessions
            }
            let newClients = clone(clients);
            let client = find(newClients, {id: clientId});

            if(client) {
                client.name = name;
                newState.sessions = newSessions
            }



            return newState
        })
    }

    takeAPart(clientId) {
        axios.post('/api/take-part/'+clientId)
            .then(({data}) => {
                this.setState(({sessions, open}) => {
                    let session = data.session;
                    let newState = {};
                    if(!find(sessions, {id: data.session.id})) {
                        let newSessions = clone(sessions);
                        newSessions.push(session);
                        newState = {
                            sessions: newSessions
                        }
                    }
                    newState.open = [session.id];

                    return newState
                })
            });

    }

    leave(clientId) {
        axios.post('/api/leave/'+clientId)
            .then(({}) => {
                this.setState(({sessions}) => {
                    let newState = {sessions: clone(sessions)};
                    remove(newState.sessions, {id: clientId});
                    return newState
                })
            });

    }

    checkSound() {
        if(this.state.chatConfigs.bring_notification_allowed) {
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
        if(this.state.chatConfigs.short_notification_allowed) {
            this.sound.play();
        }
    }

    componentDidMount() {

        axios.get('/api/panel')
            .then(({data}) => {

                this.setState({
                    clients: data.clients,
                    sessions: data.sessions
                });

            });

        this.state.departments.map((departmentId) => {
            window.Echo.private('Department.'+departmentId)
                .listen('NewUserConnected', ({client}) => {
                    this.setState((state) => {
                        // noinspection EqualityComparisonWithCoercionJS
                        if(!state.clients.find(({id}) => client.id == id)) {
                            let newState = clone(state);
                            client.name = client.names[this.props.operator];
                            newState.clients.splice(0,0,client);
                            return newState;
                        }
                    });
                })
                .listen('NewUserDisconnected', ({client}) => {
                    this.setState((state) => {
                        let newState = clone(state);
                        remove(newState.clients, {id:client.id});
                        return newState;
                    });
                })
                .listen('NewLiveChatMessage', ({client}) => {
                    this.setState((state) => {
                        let newState = clone(state);
                        let currentClient = find(newState.clients, {id:client.id});
                        if(currentClient) {
                            this.shortAlert();
                            currentClient.last_message_from_user = client.last_message_from_user;
                            return newState;
                        }
                    });
                })
                .listen('NewOperatorInChat', ({operator, client}) => {

                    this.setState((state) => {
                        let newState = clone(state);
                        let currentClient = find(newState.clients, {id:client.id});
                        if(currentClient) {
                            // noinspection EqualityComparisonWithCoercionJS
                            if(!currentClient.operators.find(({id}) => operator.id == id)) {
                                currentClient.operators.push(operator);
                                return newState;
                            }
                        }
                    });
                })
               .listen('OperatorLeaveChat', ({operator, client}) => {

                    this.setState((state) => {
                        let newState = clone(state);
                        let currentClient = find(newState.clients, {id:client.id});
                        if(currentClient) {
                            // noinspection EqualityComparisonWithCoercionJS
                            remove(currentClient.operators, (({id}) => operator.id == id));
                            currentClient.last_message_from_user = client.last_message_from_user;
                            return newState;
                        }
                    });
                })

        })
    }


    getClientName(client) {
        let name = [];

        if(client.geo && client.geo.iso) {
            let geo = client.geo;
            name.push(<img src={`/flags/${geo.iso.toLowerCase()}.gif`} className={'mr-1'} key="flag"/>);
            name.push(<span key={'country '} className={'font-italic mr-1'}>{geo.city}, {geo.country}</span>);
        }
        name.push(<span key={'ip'} className={'font-weight-bold'}>[{client.name || client.ip}]</span>);

        return name
    }

    render() {
        let clients = clone(this.state.clients);
        clients.sort((a,b) => {
            let aWeight = a.last_message_from_user && !a.operators.length ? 1 : 0;
            let bWeight = b.last_message_from_user && !b.operators.length ? 1 : 0;
            return bWeight - aWeight;
        });
        return (
            <div className={'row operator-page'}>
                <div className={'col-md-4 panel'}>
                    <div className={'card mb-3'}>
                        <div className={'card-body'}>
                            <h5>{window.translates.operator_panel}</h5>
                            <ul className={'chats-list'}>
                                {
                                        clients
                                        .map((client) => {
                                            return (
                                                <li
                                                    key={client.id}
                                                    onClick={() => {
                                                            this.takeAPart(client.id)
                                                    }}
                                                    className={classnames({blink: client.last_message_from_user && !client.operators.length})}
                                                >
                                                <div>
                                                    <div>
                                                        {this.getClientName(client)}
                                                    </div>
                                                    {client.url}
                                                </div>
                                                <ul className={'operator-list'}>
                                                    {client.operators.map(({name, id}) =>
                                                        <li key={id}>
                                                            {name}
                                                        </li>
                                                    )}
                                                </ul>
                                            </li>)
                                        })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
                <div className={'col-md-8 sessions'}>
                    <div className={'card'}>
                        <div className={'card-body'}>
                            <h5>{window.translates.sessions}</h5>
                            <ChatSessions
                                shortAlert={this.shortAlert}
                                leave={this.leave}
                                operator={this.props.operator}
                                open={this.state.open}
                                onNameChange={this.onNameChange}
                                sessions={this.state.sessions}
                            />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}