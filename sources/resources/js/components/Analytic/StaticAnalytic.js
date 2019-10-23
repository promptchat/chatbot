import React, {Component} from 'react'
import axios from "axios";
import DatePicker from "react-datepicker";
import AnalyticElement from "./AnalyticElement";

export default class StaticAnalytic extends Component {
    state = {
        total: 0,
        open: 0,
        chatbot: 0,
        livechat: 0,
        from: new Date(),
        to: new Date()
    }

    constructor() {
        super(...arguments);
        this.refreshData = this.refreshData.bind(this)
    }

    componentDidMount() {
        this.refreshData()
    }

    handleChangeDate(type) {

        return (date) => {
            this.setState({[type]: date}, () => this.refreshData())
        }
    }


    refreshData() {
        axios.get('analytics-staticData', {
            params: {
                from: this.state.from,
                to: this.state.to
            }
        }).then(({data}) => {
                this.setState({
                    total: data.total,
                    open: data.open,
                    chatbot: data.chatbot,
                    livechat: data.livechat
                })
            });
    }

    render() {
        return (
            <div>
                <div className="d-flex justify-content-between my-5 mx-4">
                    <div className="">
                        <div className="">
                            <p>{window.translates.select_date}</p>
                        </div>
                        <DatePicker selected={this.state.from} onChange={this.handleChangeDate('from')} className="mr-4"/>
                        <DatePicker selected={this.state.to} onChange={this.handleChangeDate('to')}/>
                    </div>
                    <div className="pull-right refresh-block mr-4">
                        <i className="fa fa-refresh" onClick={this.refreshData}></i>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-3">
                        <AnalyticElement
                            class={'fa-globe'}
                            color={'red-icon-block'}
                            value={this.state.total}
                            name={window.translates.static_total}
                        />
                    </div>
                    <div className="col-md-3">
                        <AnalyticElement
                            class={'fa-mouse-pointer'}
                            color={'orange-icon-block'}
                            value={this.state.open}
                            name={window.translates.static_open}
                        />
                    </div>
                    <div className="col-md-3">
                        <AnalyticElement
                            class={'fa-headphones'}
                            color={'purple-icon-block'}
                            value={this.state.livechat}
                            name={window.translates.static_livechat}
                        />
                    </div>
                    <div className="col-md-3">
                        <AnalyticElement
                            class={'fa-android'}
                            color={'grey-icon-block'}
                            value={this.state.chatbot}
                            name={window.translates.static_chatbot}
                        />
                    </div>
                </div>
            </div>
        )
    }
}