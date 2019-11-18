import React from 'react';
import {wrapErrors} from "../help/functions";
import BuilderField from "./BuilderField/index";
import axios from 'axios';
import Modal from "./Modal";
import ImageLoader from "./ImageLoader";
import {get} from "lodash";
import MarkCreator from "./MarkCreator";

const STATUS_VALIDATION_FAILED = 422;
export default class DefaultCreator extends React.Component {
    chat;
    timer;

    state = {
        id: this.props.id,
        temporary_chat_id: this.props.temporary_chat_id,
        chat_id: this.props.chat_id,
        name: this.props.name || this.props.defaultName,
        errors: {},
        saving: false,
        preview: false,
        autoSaving: true,
        temporaryResolved: !this.props.temporary_chat_id,
        data: null,
        image: this.props.image ? JSON.parse(this.props.image) : {},
    };

    autoSave() {
        this.timer = setTimeout(() => {
            this.saveButton(true).then(() => this.autoSave());
        }, 10e3)
    }

    loadChatBot(temporary) {
        axios
            .get(`${this.props.apiUrl}/${this.state.id}/load/${+temporary}`)
            .then(({data}) => {
                this.setState({data: data, temporaryResolved: true})
            })
    }


    componentDidMount() {
        if (!this.state.chat_id) {
            this.setState({data: {}})
        } else {
            if (this.state.temporaryResolved) {
                this.loadChatBot(false)
            }
        }
        if (this.state.id) {
            this.autoSave();
        }

        window.addEventListener('focus', () => {
            if (this.state.id) {
                this.autoSave();
            }
        });

        window.addEventListener('blur', () => {
            if (this.timer) {
                clearTimeout(this.timer);
            }
        })
    }

    saveButton(temporary = false) {
        clearTimeout(this.timer);
        let data = {
            name: this.state.name,
            image_id: get(this.state.image, 'id')
        };

        let [chat, relations] = this.chat.getData();


        if (!temporary && this.props.withMarks && this.markCreator) {
            data['marks'] = this.markCreator.getData();
        }

        data['chat'] = chat;
        data['relations'] = relations;
        return new Promise(resolve => {
            this.setState({saving: true}, resolve)
        }).then(() => {
            return axios({
                url: `${this.props.apiUrl}/${this.state.id || ''}`,
                method: this.state.id ? "PATCH" : "POST",
                data,
                params: {
                    temporary: +temporary
                }
            }).then((response) => {
                return new Promise(resolve => this.setState({
                    saving: false,
                    temporary_chat_id: response.data.temporary_chat_id
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
                    id: response.data.id,
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
                {
                    this.props.withImage && <ImageLoader
                        value={this.state.image}
                        onChange={(image) => this.setState({image})}
                    />
                }
                {
                    this.state.id && this.props.withMarks && <MarkCreator
                        ref={(markCreator) => this.markCreator = markCreator}
                        marks={this.props.marks}
                        marks_list={this.props.marks_list}
                        id={this.state.id}
                    />
                }
                <div className="row">
                    <div className="col-sm-12 bottom-btn">
                        {this.state.saving ? <span className={'text-white'}>{window.translates.saving}</span> : null}
                        <button onClick={() => this.createButton()}
                                className="btn btn-primary pull-right text-uppercase">{window.translates.save}</button>
                    </div>
                </div>
            </div>)
    }

    render() {
        return (
            <div>
                <button style={{position: 'fixed', left: 320, zIndex: 6000, top: 10}}
                        className={'btn btn-info'}
                        onClick={() => this.saveButton(true).then(() => this.setState({preview: true}))}>
                    Preview
                </button>
                {this.state.id ? null :
                    <Modal
                        isOpen={true}
                        onAfterOpen={() => {
                        }}
                        onRequestClose={() => {
                        }}

                    >
                        <div className='react-modal-header'>
                            <i className={`icon fa fa-edit`}/>
                            {/*<div className='close' onClick={() => {this.props.onCancel()}}><i className='fa fa-times'/></div>*/}
                        </div>
                        {this.renderEdit()}
                    </Modal>} {
                this.state.temporaryResolved ? null :
                    <Modal
                        isOpen={true}
                        onAfterOpen={() => {
                        }}
                        onRequestClose={() => {
                        }}

                    >
                        <div className='react-modal-header'>
                            <i className={`icon fa fa-edit`}/>
                            {/*<div className='close' onClick={() => {this.props.onCancel()}}><i className='fa fa-times'/></div>*/}
                        </div>
                        <h4 className={'text-center'}>{window.translates.not_saved}</h4>

                        <div className="text-center mt-4">
                            <button className={'btn btn-success mr-4'} onClick={() => this.loadChatBot(true)}>
                                {window.translates.load}
                            </button>
                            <button className={'btn btn-warning'} onClick={() => this.loadChatBot(false)}>
                                {window.translates.ignore}
                            </button>
                        </div>
                    </Modal>
            }
                {this.state.preview && <Modal isOpen={true} onRequestClose={() => {
                    this.setState({preview: false})
                }}>
                    <div className='react-modal-header'>
                        <i className={`icon fa fa-eye`}/>
                        <div className='close' onClick={() => {
                            this.setState({preview: false})
                        }}><i className='fa fa-times'/></div>
                    </div>
                    <iframe style={{width: 450, height: 600}} src={`/preview/${this.state.temporary_chat_id}`}/>
                </Modal>}

                {this.state.data && <BuilderField

                    url={this.props.apiUrl}
                    logo={this.props.logo}
                    chatConfig={
                        <div>
                            {this.renderEdit()}
                        </div>} ref={(ref) => this.chat = ref} {...this.state.data} />}

            </div>
        );
    }
}
