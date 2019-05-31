import React from 'react';
import {wrapErrors} from "../help/functions";
import BuilderField from "./BuilderField/index";
import axios from 'axios';

const STATUS_VALIDATION_FAILED = 422;
export default class ChatCreator extends React.Component {
    chat;
    state = {
        name: this.props.name,
        data: this.props.data ? JSON.parse(this.props.data) : {

        },
        errors: {}
    };

    createButton() {

        let data = {
            name: this.state.name
        };

        let [chat, relations] =  this.chat.getData();


        data['chat'] =  chat;
        data['relations'] =  relations;


        axios({
            url: this.props.url,
            method: this.props.method,
            data
        })
            .then((response) => {
                if(response.data.url) {
                    window.location = response.data.url;
                }
            })
            .catch((error) => {
                if(error.response.status === STATUS_VALIDATION_FAILED) {
                    this.setState({errors: wrapErrors(error.response.data.errors)});
                }
            });
    }


    render() {

        return ( <div>

                <BuilderField logo={this.props.logo} chatConfig={
                    <div className="chat-config">

                        <div className="form-group">
                            <label >Name</label>
                            <input

                                placeholder="Name your new chatbot"
                                type="text"
                                name="name"
                                value={this.state.name}
                                onChange={(e) => this.setState({name: e.target.value})}
                                className="form-control"
                            />
                        </div>
                        <div className="row">
                            <div className="col-sm-12 bottom-btn">
                                <button onClick={() =>this.createButton()} className="btn btn-primary pull-right text-uppercase">Save</button>
                            </div>
                        </div>
                    </div>
                } ref={(ref) => this.chat = ref} {...this.state.data} />

            </div>
        );
    }
}
