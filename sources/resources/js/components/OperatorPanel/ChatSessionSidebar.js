import React from 'react';
import axios from "axios";
import {clone, remove} from "lodash";
import moment from 'moment'
import Creatable from 'react-select/lib/Creatable';
import {DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown} from "reactstrap";
import ImageLoader from "../ImageLoader";

export default class ChatSessionSidebar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.renameUser = this.renameUser.bind(this);
        this.changeTags = this.changeTags.bind(this);;
    }

    state = {
        editName: false,
        name: this.props.session.name,
    };

    get ip() {
        let client = this.props.session;
        let seance = client.get('active_seances')[0]
        return seance.ip
    }

    get sessionLocation() {
        let name = [];
        let client = this.props.session;
        let seance = client.get('active_seances')[0]
        if (seance.geo && seance.geo.iso) {
            let geo = seance.geo;
            name.push(<img src={`/flags/${geo.iso.toLowerCase()}.gif`} className={'mr-1'} key="flag"/>);
            name.push(<span key={'country '} className={'font-italic mr-1'}>{geo.city}, {geo.country}</span>);
        }
        return name;
    }

    renameUser() {
        if (this.state.name) {
            axios.post('/api/rename-session/' + this.props.session.get('id'), {name: this.state.name}).then(() => {
                this.setState({editName: false});
            })
        }
    }

    changeTags(tags) {
        axios.post('/api/tags/' + this.props.session.get('id'), {tags})

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
        return <span>
            <span title={icon.title} style={{marginRight: 5, color: icon.color}}
            ><i className={'fa fa-' + icon.icon}/></span>
            <a style={{marginRight: 5, color: 'blue'}} title={seance.url} target={'_blank'}
               href={seance.url}>{this.url(seance.url)}</a>
        </span>
    }

    url(url) {
        return url.replace(/^(.{10}).+(.{10})$/, '$1...$2')
    }

    render() {
        let {session} = this.props;
        let [activeSeance, ...otherSeances] = session.get('active_seances');
        return (
            <div className="sidebar" style={{overflowY: 'scroll'}}>
                <div className="block">
                    <div className="head text-center">
                        <div className="p-3">
                            <div className="image">
                                <img src="/img/default-user-image.png" alt=""/>
                            </div>
                            {
                                this.state.editName ?
                                    <div>
                                        <input className='input-change-name my-2' type="text" value={this.state.name}
                                               onChange={(e) => this.setState({name: e.target.value})}/><br/>
                                        <button className="btn btn-danger mr-1"
                                                onClick={() => this.setState({editName: false})}>{window.translates.cancel}
                                        </button>
                                        <button className="btn btn-success ml-1"
                                                onClick={this.renameUser}>{window.translates.ok}</button>
                                    </div>
                                    : <div>
                                        <p className="my-2">{this.props.session.get('name') || <i>(not set)</i>}</p>
                                        <button className="btn btn-primary" onClick={() => this.setState({
                                            editName: true,
                                            name: this.props.session.get('name')
                                        })}>
                                            <i
                                                className={'fa fa-edit'}/>{window.translates.edit}
                                        </button>
                                    </div>
                            }
                        </div>
                    </div>
                </div>
                <div className="block text-left">
                    <div className="p-3">
                        <p>
                            <i className="fa fa-map-pin pr-2"></i>
                            {window.translates.ip}: {this.ip}
                        </p>
                        <p>
                            <i className="fa fa-globe pr-2"></i>
                            {window.translates.location}: {this.sessionLocation}
                        </p>
                        <p>
                            <i className="fa fa-bar-chart pr-2"></i>
                            <a href={`/analytics/chat-statistics/${session.get('id')}`} target={'_blank'}
                               className={'text-dark'}>
                                {window.translates.analytics}
                            </a>
                        </p>
                        <div>
                            <p>
                                {this.renderItem(activeSeance)}
                            </p>
                            {!!otherSeances.length &&
                            <UncontrolledDropdown className={'d-inline small-dd'} size={"sm"}>
                                <DropdownToggle onClick={() => {
                                }} caret>
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
                </div>

                <div className="block">
                    <h5 className="text-center mb-2 pt-2 font-italic">{window.translates.operators}</h5>
                    <div className="row p-2">
                        {
                            session.get('operators').map(operator => {
                                return (
                                    <div className="col-md-6" key={operator.id}>
                                        <div className="operator-image text-center">
                                            <img
                                                src={operator.image ? '/storage/' + operator.image.path : '/img/default_operator_img.svg'}
                                                className="operator-image"/>
                                        </div>
                                        <div className="mt-2">
                                            <p>{operator.name}</p>
                                        </div>
                                    </div>
                                )
                            })
                                .toIndexedSeq()
                                .toArray()
                        }
                    </div>
                </div>

                <div className="block">
                    <h5 className="text-center mb-2 pt-2 font-italic">{window.translates.tags}</h5>
                    <Creatable className="p-3"
                               value={this.props.session.get('tags').map((tag) => ({
                                   value: tag.id,
                                   label: tag.name,
                               }))}
                               options={
                                   this.props.tags.map((tag) => ({
                                       value: tag.id,
                                       label: tag.name,
                                   }))
                               }
                               onChange={this.changeTags}
                               isClearable={false}
                               isMulti
                               isCreatable
                    />

                </div>
                <div className="bottom block mb-0 text-center">
                    <a className="text-danger" onClick={this.props.leave}>{window.translates.leave_chat}</a>
                </div>
            </div>
        );
    }
}
