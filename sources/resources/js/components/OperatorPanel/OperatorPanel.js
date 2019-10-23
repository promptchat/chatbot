import React, {Component} from 'react';
import axios from 'axios';
import { Map } from 'immutable'
import {  UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem  } from 'reactstrap';
import {clone, find, findIndex, remove, filter, cloneDeep} from 'lodash';
import ChatSessions from "./ChatSessions";
import {Howl, Howler} from 'howler';
import classnames from 'classnames';
import Messages from "./Messages";

const mapClient = (client) => {
    let {operators, tags, ...props} = client;
    return Map({
        operators: Map(Object.fromEntries(operators.map((operator) => {
            return [
                operator.id,
                operator
            ]
        }))),
        tags,

        ...props
    })
}

export default class OperatorPanel extends Component {
    state = {
        departments: JSON.parse(this.props.departments),
        chatConfigs: JSON.parse(this.props.configs),
        clients: Map(),
        sessions: new Set([]),
        open: null,
        sessionId: null,
        chatsType: 1,
        tags: [],
    };


    constructor() {
        super(...arguments);

        this.leave = this.leave.bind(this);
        this.shortAlert = this.shortAlert.bind(this);


        this.sound = new Howl({
            src: [this.state.chatConfigs.short_notification_audio]
        });


        this.bring = new Howl({
            loop: true,
            src: [this.state.chatConfigs.bring_notification_audio]
        });


    }



    open(clientId) {
        this.setState(({clients}) => {
            return {
                clients: clients.setIn([`${clientId}`, 'has_unread_messages'], false),
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
            if (this.state.clients.find((a) => a.get('last_message_from_user') && !a.get('operators').size)) {
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
                    clients: Map(Object.fromEntries(data.clients.map((client) => {

                        return [
                            client.id,
                            mapClient(client)
                        ]
                    }))),
                    sessions: new Set(data.sessions),
                    tags: data.tags
                });

            });

        window.Echo.private('Operator.' + this.props.operator)

            .listen('ClientNewMessage', ({client}) => {

                this.setState(({sessionId, clients}) => {

                    if (sessionId !== client.id) {
                            this.shortAlert();
                            return {
                                clients: clients.setIn([`${client.id}`, 'has_unread_messages'], true)
                            };

                    }
                });
            });

        this.state.departments.map((departmentId) => {
            window.Echo.private('Department.' + departmentId)
                .listen('NewUserConnected', ({client}) => {
                    this.setState(({clients}) => {
                        return {
                            clients: clients.setIn([`${client.id}`], mapClient(client))
                        };
                    });
                })
                .listen('UserSeancesModified', ({client, seances}) => {
                    this.setState(({clients}) => {
                        return {
                            clients: clients.setIn([`${client.id}`, 'active_seances'], seances)
                        };

                    });
                })
                .listen('NewUserDisconnected', ({client}) => {
                    this.setState(({clients}) => {
                        return {
                            clients: clients.deleteIn([`${client.id}`])
                        };
                    });
                })
                .listen('NewLiveChatMessage', ({client}) => {
                    this.setState(({clients}) => {
                        return {
                            clients: clients.setIn([`${client.id}`, 'last_message_from_user'], client.last_message_from_user)
                        };
                    });
                })
                .listen('NewOperatorInChat', ({operator, client}) => {

                    this.setState(({clients}) => {
                        return {
                            clients: clients.setIn([`${client.id}`, 'operators', `${operator.id}`], operator)
                        }
                    });
                })
                .listen('NameChanged', ({name, client}) => {

                    this.setState(({clients}) => {
                        return {
                            clients: clients.setIn([`${client.id}`, 'name'], name)
                        };

                    });
                })
                .listen('ChatSessionTagsChanged', ({client, tags }) => {

                    this.setState(({clients}) => {

                            return {
                                clients: clients.setIn([`${client.id}`, 'tags'], tags)
                            };


                    });
                })
                .listen('OperatorLeaveChat', ({operator, client}) => {

                    this.setState(({clients}) => {
                        return {
                            clients: clients.deleteIn([`${client.id}`, 'operators', `${operator.id}`])
                                .setIn([`${client.id}`, 'last_message_from_user'], client.last_message_from_user)
                        };

                    });
                })

        })
    }

    render() {


        let clients = this.state.clients.sort((a, b) => {
            let aWeight = a.last_message_from_user && !a.operators.size ? 1 : 0;
            let bWeight = b.last_message_from_user && !b.operators.size ? 1 : 0;
            return bWeight - aWeight;
        });



        let sessions = clients.filter((el) => {
            return el.hasIn(['operators', this.props.operator])
        });

        let activeSession = sessions.get(`${this.state.sessionId}`);

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
                                        {sessions.size ?
                                            sessions
                                                .map((session) => {
                                                    return (
                                                        <ClientCard
                                                            checkUnread
                                                            active={session.get('id') === this.state.sessionId}
                                                            key={session.get('id')}
                                                            onClick={() => {
                                                                this.open(session.get('id'))
                                                            }}
                                                            client={session}
                                                            operator={this.props.operator}
                                                            shortAlert={this.shortAlert}
                                                            hasUnread={this.hasUnread}
                                                        />)
                                                })
                                                .toIndexedSeq()
                                                .toArray()
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
                                                            key={client.get('id')}
                                                            onClick={() => {
                                                                this.takeAPart(client.get('id'))
                                                            }}
                                                            client={client}
                                                        />
                                                    )
                                                }).toIndexedSeq().toArray()
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
                                key={activeSession.get('id')}
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

    url(url) {
        return url.replace(/^(.{10}).+(.{10})$/, '$1...$2')
    }

    getClientAddress(seance) {
        let ip = seance.ip;
        let geo = seance.geo;
        let name = [<span key="ip"> [{ip}] </span>];
        if (geo && geo.iso) {
            name.push(<img src={`/flags/${geo.iso.toLowerCase()}.gif`} className={'mr-1'} key="flag"/>);
            name.push(<span key={'country '} className={'font-italic mr-1'}>{geo.city}, {geo.country}</span>);
        }


        return name
    }


    renderItem(seance) {
        let icon = {
            color: 'red',
            icon: 'window-close-o',
            title: window.translates.chatbox_activity_idle
        };
        switch (seance.current_window) {
            case 'bot':
                icon = {
                    color: 'purple',
                    icon: 'comments',
                    title: window.translates.chatbox_activity_bot
                };
                break;
            case 'live':
                icon = {
                    color: 'green',
                    icon: 'comments-o',
                    title: window.translates.chatbox_activity_live
                };
                break;
            case 'fb':
                icon = {
                    color: 'blue',
                    icon: 'facebook',
                    title: window.translates.chatbox_activity_fb
                };
                break;
            case 'whatsapp':
                icon = {
                    color: 'green',
                    icon: 'whatsapp',
                    title: window.translates.chatbox_activity_whatsapp
                };
                break;
        }
        return <span >
            <span title={icon.title} style={{marginRight: 5, color: icon.color}}
            ><i className={'fa fa-'+icon.icon} /></span>
            <a style={{marginRight: 5, color: 'blue'}} title={seance.url} target={'_blank'} href={seance.url}>{this.url(seance.url)}</a>
        </span>
    }

    render() {

        let {client} = this.props;
        let [activeSeance, ...otherSeances] =  client.get('active_seances')
            .sort(({current_window}) => !current_window);
        return (
            <li
                onClick={this.props.onClick}
                className={classnames({
                    blink: client.get('last_message_from_user') && !client.get('operators').size,
                    unread: this.props.checkUnread && client.get('has_unread_messages'),
                    active: this.props.active
                })}
            >
                <div className="">
                    <div>
                        <div>
                            {client.get('name')}
                            <strong>{this.getClientAddress(activeSeance)}</strong>
                            <strong style={{color: 'green'}}><i className={'fa fa-signal'}/> ({client.get('inactive_seances_count')})</strong>
                        </div>
                        <div style={{marginTop: 10}}>
                            {this.renderItem(activeSeance)}
                            {!!otherSeances.length &&
                            <UncontrolledDropdown className={'d-inline  small-dd'} size={"sm"}>
                                <DropdownToggle onClick={() => {}} caret>
                                    + {otherSeances.length}
                                </DropdownToggle>
                                <DropdownMenu>
                                    {
                                        otherSeances.map((seance) => (
                                            <DropdownItem key={seance.id}>{this.renderItem(seance)}</DropdownItem>
                                        ))
                                    }

                                </DropdownMenu>
                            </UncontrolledDropdown>}
                        </div>
                    </div>
                    <ul className={'operator-list'}>
                        <li >
                            {client.get('name') ? <span className={'avatar'}><span className={'avatar-inner'}>{client.get('name')[0]}</span></span>:
                            <img src={ '/img/default-user-image.png'}/>}
                        </li>
                        {
                            client.get('operators').map(({name, id, image}) =>
                                <li key={id}>
                                    <img src={image ? '/storage/' + image.path: '/img/default_operator_img.svg'} title={name}/>
                                </li>
                            )
                            .toIndexedSeq()
                            .toArray()
                        }
                    </ul>
                    <ul className={'tag-list'}>
                        {client.get('tags').map((tag) =>
                            <li className="tag" key={tag.id}>
                                {tag.name}
                            </li>
                        )}
                    </ul>
                </div>
            </li>
        )
    }
}
