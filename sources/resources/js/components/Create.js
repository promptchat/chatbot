import React from 'react';
import services from '../help/services';
import TreeBuilder from "./TreeBuilder";
import Registration from "./Registration";
import axios from 'axios';
import {wrapErrors} from "../help/functions";
import {uniqueId} from "lodash";


const STATUS_VALIDATION_FAILED = 422;
export default class Create extends React.Component {
    chat = null;
    registration=  null;
    state = {
        chat: false,
        ready: false,
        code: '',
        errors: {
            registration: {}
        },
        services: [
            {
                value: '',
                service: services[0]
            },
        ],
        text: '',
        title: '',
        primaryColor: '#38cb44',
        secondaryColor: '#ffffff',
        position: 'right',
        isLoggedIn: this.props.isloggedin || false
    };

    toggleService(id) {
        return () => {
            let data = this.state.services;
            let exists = data.findIndex(({service}) => service.id === id);

            if (exists !== -1) {
                if (data.length === 1) {
                    return;
                }
                data = data.filter((v,i) => i!==exists);
            } else {
                data.push({
                    value: '',
                    service: services.find((service) => service.id === id)
                });
            }
            this.setState({services: data});
        }
    }

    constructor(props) {
        super(props);
        this.handleChangePosition = this.handleChangePosition.bind(this);
        this.createButton = this.createButton.bind(this);
        this.toggleService = this.toggleService.bind(this)
    }

    handleChangePosition (event) {
        this.setState({
            position: event.target.value
        });
    }

    createButton() {
        let data = {


            socials: this.options
        };
        if(!this.state.isLoggedIn) {
            data['registration'] =  this.registration.getData();
        }
        let chat =  this.chat.getData();
        if(chat) {
            data['chat'] =  chat;
        }
        axios.post('/create-button', data)
            .then((response) => {
                window.location = '/home'
            })
            .catch((error) => {
                if(error.response.status === STATUS_VALIDATION_FAILED) {
                    this.setState({errors: wrapErrors(error.response.data.errors)});
                }
            });
    }
    get options() {
        let options = {};
        for(let service of this.state.services) {
            options[service.service.parameter] = service.value
        }
        options.options = {};
        options.options.text = this.state.text;
        options.options.header = this.state.title;
        options.options.primaryColor = this.state.primaryColor;
        options.options.secondaryColor = this.state.secondaryColor;
        options.options.position = this.state.position;
        return options
    }

    get url() {
        let options = this.options;
        if(this.state.chat) {
            localStorage.setItem('___chat', JSON.stringify(this.state.chat));
            options.chat = '___chat';
            options.chatUUID = uniqueId();

        }
        return encodeURIComponent(JSON.stringify(options));
    }

    handleService(s) {
        return (event) => {
            let service   = this.state.services.findIndex((f) => f.service.id === s.service.id);
            let services = this.state.services;
            services[service].value =  event.target.value;
            this.setState({services});
        }
    }
    render() {

        return (
            <main id={"generation"}>
                <div className="container form-container">
                    <h2 className="text-center f-title">Get a Free Button in Four Simple Steps</h2>
                    <div className="row step-1 step-item">
                        <div className="col-lg-1">
                            <div className="item-icon">
                                <img src="img/icons/icon_step-1.png"/>
                            </div>
                        </div>
                        <div className="col-lg-11 item-border">
                            <h3 className="form-item-title"><span className="number">1.</span> Choose messaging apps</h3>
                            <div className="item-content">
                                <ul className="messenger-list">
                                    {services.map((s) =>  <li key={s.id}>
                                        <a onClick={this.toggleService(s.id)}  className={`m-icon
                                    ${s.fa}
                                    ${this.state.services.findIndex(({service}) => service.id === s.id) !== -1 ? 'active': ''
                                            }`}>
                                            <i className={`fa fa-${s.fa}`}/>
                                        </a>
                                    </li>)}
                                </ul>
                                {
                                    this.state.services.map((s) =>
                                        <div key={s.id} className="row messenger-form">
                                            <div className="col-lg-2">
                                                <div className={`m-icon active ${s.service.fa}`}>
                                                    <i className={`fa fa-${s.service.fa}`}/>
                                                </div>
                                                <b>{s.service.name}</b>
                                            </div>
                                            <div className="col-lg-10">
                                                <div style={{maxWidth: '380px', position: 'relative'}}>
                                                    <input
                                                        type="text"
                                                        onChange={this.handleService(s)}
                                                        value={s.value}
                                                        className="form-control"
                                                        placeholder={s.service.format}
                                                    />
                                                    <button onClick={this.toggleService(s.service.id)} type="button" className="btn btn-default">
                                                        <span className="fa fa-times" />
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                        </div>
                    </div>

                    <div className="has-background">
                        <div className="row step-2 step-item">
                            <div className="col-lg-1">
                                <div className="item-icon">
                                    <img src="img/icons/icon_step-2.png"/>
                                </div>
                            </div>
                            <div className="col-lg-6 item-border">
                                <h3 className="form-item-title"><span className="number">2.</span> Customize your button</h3>
                                <div className="item-content">
                                    <div className="form-group row">
                                        <label htmlFor={"primaryColor"} className="col-sm-4 col-form-label">
                                            Primary color
                                        </label>
                                        <div className="col-sm-8">
                                            <div className="form-control d-flex align-items-center">
                                                <input type="color"
                                                       value={this.state.primaryColor}
                                                       className="form-control"
                                                       id="primaryColor"
                                                       onChange={(event) => this.setState({primaryColor: event.target.value})}
                                                />
                                                <span className="color-value">{this.state.primaryColor}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor={"secondaryColor"} className="col-sm-4 col-form-label">
                                            Secondary color
                                        </label>
                                        <div className="col-sm-8">
                                            <div className="form-control d-flex align-items-center">
                                                <input type="color"
                                                       value={this.state.secondaryColor}
                                                       className="form-control"
                                                       id="secondaryColor"
                                                       onChange={(event) => this.setState({secondaryColor: event.target.value})}
                                                />
                                                <span className="color-value">{this.state.secondaryColor}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label htmlFor={"header"} className="col-sm-4 col-form-label">
                                            Message window title
                                        </label>
                                        <div className="col-sm-8">
                                            <input type="text"
                                                   value={this.state.title}
                                                   className="form-control"
                                                   id="header"
                                                   placeholder="Name it here"
                                                   onChange={(event) => this.setState({title: event.target.value})}
                                            />
                                        </div>
                                    </div>
                                    <div className="form-group row">
                                        <label  htmlFor={"text"} className="col-sm-4 col-form-label">
                                            Message window welcome text
                                        </label>
                                        <div className="col-sm-8">
                                    <textarea className="form-control"
                                              id="text"
                                              onChange={(event) => this.setState({text: event.target.value})}
                                              placeholder="Welcome text">
                                        {this.state.text}
                                    </textarea>
                                        </div>
                                    </div>

                                    <div className="form-group row">
                                        <label className="col-sm-4 col-form-label">
                                            Position
                                        </label>
                                        <div className="col-sm-8">
                                            <div className="form-check form-check-inline">
                                                <input className="form-check-input"
                                                       type="radio"
                                                       name="inlineRadioOptions"
                                                       id="inlineRadio1"
                                                       onChange={this.handleChangePosition}
                                                       checked={this.state.position === 'left'}
                                                       value="left" />
                                                <label className="form-check-label" htmlFor="inlineRadio1">Left</label>
                                            </div>
                                            <div className="form-check form-check-inline">
                                                <input
                                                    className="form-check-input"
                                                    type="radio"
                                                    name="inlineRadioOptions"
                                                    id="inlineRadio2"
                                                    onChange={this.handleChangePosition}
                                                    checked={this.state.position === 'right'}
                                                    value="right"
                                                />
                                                <label className="form-check-label" htmlFor="inlineRadio2">Right</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5">
                                <iframe id="preview" src={`/live?options=${this.url}`} frameBorder="0" />
                            </div>
                        </div>

                        <div className="row step-3 step-item">
                            <div className="col-lg-1">
                                <div className="item-icon">
                                    <img src="img/icons/icon_step-3.png"/>
                                </div>
                            </div>
                            <div className="col-lg-10 item-border">
                                <h3 className="form-item-title"><span className="number">3.</span> Chatbox conversation tree builder</h3>
                                <div className="item-content">
                                    <div className="form-inline">
                                        <TreeBuilder onChange={(data) => this.setState({chat:data})} ref={(instance) => this.chat = instance} />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <a href="#preview" className="test-it-btn">Test it!</a>
                    </div>


                    <div className="row step-4 step-item">
                        <div className="col-lg-1">
                            <div className="item-icon">
                                <img src="img/icons/icon_step-4.png"/>
                            </div>
                        </div>
                        <div className="col-lg-11 item-border">
                            <h3 className="form-item-title"><span className="number">4.</span> Add the code to your website</h3>
                            <div className="item-content">
                                {!this.state.isLoggedIn &&
                                <Registration errors={this.state.errors.registration} ref={(instance) => this.registration = instance}/>}
                                <button type="button" onClick={this.createButton} className="btn get-btn">Get Button</button>
                            </div>
                        </div>
                    </div>

                    {this.state.code &&
                    <code>
                        {this.state.code}
                    </code>}
                </div>

            </main>
    );
    }
    }
