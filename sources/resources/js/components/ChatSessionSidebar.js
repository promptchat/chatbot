import React from 'react';
import axios from "axios";
import {clone, remove} from "lodash";
import moment from 'moment'
import Creatable from 'react-select/lib/Creatable';

export default class ChatSessionSidebar extends React.PureComponent {
    constructor(props) {
        super(props);
        this.renameUser = this.renameUser.bind(this);
        this.changeTags = this.changeTags.bind(this);
    }

    state = {
        editName: false,
        name: this.props.session.name,
    };

    get sessionLocation() {
        let name = [];
        let client = this.props.session;
        if (client.geo && client.geo.iso) {
            let geo = client.geo;
            name.push(<img src={`/flags/${geo.iso.toLowerCase()}.gif`} className={'mr-1'} key="flag"/>);
            name.push(<span key={'country '} className={'font-italic mr-1'}>{geo.city}, {geo.country}</span>);
        }
        return name;
    }

    renameUser() {
        if (this.state.name) {
            axios.post('/api/rename-session/' + this.props.session.id, {name: this.state.name}).then(() => {
                this.props.onNameChange(this.state.name);
                this.setState({editName: false});
            })
        }
    }

    changeTags(tags) {
        axios.post('/api/tags/' + this.props.session.id, {tags})

    }

    render() {
        let {session} = this.props;
        console.log();
        let lastActive = moment(session.last_active);
        return (
            <div className="sidebar">
                <div className="block">
                    <div className="head text-center">
                        <div className="p-3">
                            <div className="image">
                                <img src="/img/default-user-image.png"/>
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
                                        <p className="my-2">{this.props.session.name || <i>(not set)</i>}</p>
                                        <button className="btn btn-primary" onClick={() => this.setState({editName: true})}>
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
                            {window.translates.ip}: {session.ip}</p>
                        <p>
                            <i className="fa fa-globe pr-2"></i>
                            {window.translates.location}: {this.sessionLocation}
                        </p>
                        <p>
                            <i className="fa fa-clock-o pr-2"></i>
                            {window.translates.last_active}: {lastActive.format('h:m a')}
                        </p>
                    </div>
                </div>

                <div className="block">
                    <h5 className="text-center mb-2 pt-2 font-italic">{window.translates.operators}</h5>
                    <div className="row p-2">
                        {
                            session.operators.map(operator => {
                                return (
                                    <div className="col-md-6" key={operator.id}>
                                        <div className="operator-image text-center">
                                            <img src={location.origin + '/storage/' + operator.image.path}
                                                 className="operator-image"/>
                                        </div>
                                        <div className="mt-2">
                                            <p>{operator.name}</p>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="block">
                    <h5 className="text-center mb-2 pt-2 font-italic">{window.translates.tags}</h5>
                    <Creatable className="p-3"
                        value={this.props.session.tags.map((tag) => ({
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