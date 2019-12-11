import React, {Component} from 'react'
import axios from "axios";
import DatePicker from "react-datepicker";
import AnalyticElement from "./AnalyticElement";
import VisitorsMap from "./VisitorsMap";
import {HorizontalBar, Pie} from "react-chartjs-2"
import {Table} from "reactstrap"


export default class StaticAnalytic extends Component {
    state = {
        total: 0,
        open: 0,
        chatbot: 0,
        livechat: 0,
        socials: [],
        countries: {},
        usages: [],
        chatboxes: [],
        pages: [],
        duration: 0,
        from: new Date(),
        to: new Date(),
        pages_total: {}
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
        axios.get('/analytics/static-data', {
            params: {
                from: this.state.from,
                to: this.state.to,
                company_id: this.props.companyId
            }
        }).then(({data}) => {
            this.setState({
                total: data.total,
                open: data.open,
                chatbot: data.chatbot,
                livechat: data.livechat,
                countries: JSON.parse(data.countries),
                usages: Object.values(data.usages),
                chatboxes: Object.values(data.chatboxes),
                pages: data.pages,
                pages_total: data.pages_total,
                socials: data.socials,
                duration: data.duration,
            })
        });
    }

    render() {
        const barData = {
            type: 'horizontalBar',
            labels: ['chatbot', 'livechat'],
            datasets: [
                {
                    label: 'Times using',
                    fill: false,
                    lineTension: 0.1,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: this.state.usages
                },
            ]
        }

        const pieData = {
            type: 'pie',
            labels: Array.from(this.state.chatboxes, elem => elem['name']),
            datasets: [{
                label: 'Chatboxes usages',
                backgroundColor: 'rgba(75,192,192,0.4)',
                borderColor: 'rgba(75,192,192,1)',
                pointBorderColor: 'rgba(75,192,192,1)',
                pointBackgroundColor: '#fff',
                pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                pointHoverBorderColor: 'rgba(220,220,220,1)',
                data: Array.from(this.state.chatboxes, elem => elem['count']),
            }]
        }
        const totalPage = this.state.pages_total
        return (
            <div>
                <div className="my-5 mx-4">
                    <div className="">
                        <p>{window.translates.select_date}</p>
                    </div>
                    <div className="d-flex">
                        <DatePicker selected={this.state.from} onChange={this.handleChangeDate('from')}
                                    className="mr-4"/>
                        <DatePicker selected={this.state.to} onChange={this.handleChangeDate('to')}/>
                        <div className="refresh-block ml-3">
                            <i className="fa fa-refresh" onClick={this.refreshData} title={'Update'}></i>
                        </div>
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-12">
                        <div className="card rounded">
                            <div className="card-header d-flex justify-content-between">
                                <h4>Pages</h4>
                                <h4 className="pull-right">
                                    <a href="/analytics/most-visited" style={{fontSize: 18}} target="_blank">
                                        {window.translates.see_all}
                                        <i className="fa fa-arrow-right ml-2"></i>
                                    </a>
                                </h4>
                            </div>
                            <div className="card-body">
                                <Table striped bordered hover size="sm">
                                    <thead>
                                    <tr>
                                        <th rowSpan={2}>{window.translates.page}</th>
                                        <th colSpan={2}>{window.translates.sessions}</th>
                                        <th colSpan={2}>{window.translates.clicks}</th>
                                        <th colSpan={3} className={'bg-dark'}>{window.translates.livechat}</th>
                                        <th colSpan={3} className={'bg-info'}>{window.translates.chatbot}</th>
                                    </tr>
                                    <tr>

                                        <th>{window.translates.total}</th>
                                        <th>{window.translates.unique}</th>
                                        <th>{window.translates.total}</th>
                                        <th>{window.translates.unique}</th>
                                        <th className={'bg-dark'}>{window.translates.total}</th>
                                        <th className={'bg-dark'}>{window.translates.unique}</th>
                                        <th className={'bg-dark'}>{window.translates.avg_duration}</th>
                                        <th className={'bg-info'}>{window.translates.total}</th>
                                        <th className={'bg-info'}>{window.translates.unique}</th>
                                        <th className={'bg-info'}>{window.translates.avg_duration}</th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    <tr>
                                        <td>{'All'}</td>
                                        <td>{totalPage.count_total}</td>
                                        <td>{totalPage.count_unique}</td>
                                        <td>{totalPage.opens_total}</td>
                                        <td>{totalPage.opens_unique}</td>
                                        <td style={{backgroundColor: 'rgba(255, 0, 0, 0.1)'}}>{totalPage.livechat_total}</td>
                                        <td style={{backgroundColor: 'rgba(255, 0, 0, 0.1)'}}>{totalPage.livechat_unique}</td>
                                        <td style={{backgroundColor: 'rgba(255, 0, 0, 0.1)'}}>
                                            {totalPage.livechat_duration && Math.round(totalPage.livechat_duration / 60, 2) + ' min'}
                                        </td>
                                        <td style={{backgroundColor: 'rgba(0, 0, 255, 0.1)'}}>{totalPage.chatbot_total}</td>
                                        <td style={{backgroundColor: 'rgba(0, 0, 255, 0.1)'}}>{totalPage.chatbot_unique}</td>
                                        <td style={{backgroundColor: 'rgba(0, 0, 255, 0.1)'}}>{totalPage.chatbot_duration && Math.round(totalPage.chatbot_duration / 60, 2) + ' min'}</td>
                                    </tr>
                                    {this.state.pages.length !== 0 && this.state.pages.map((page) => {
                                        return (<tr key={page.url}>
                                            <td>{page.url}</td>
                                            <td>{page.count_total}</td>
                                            <td>{page.count_unique}</td>
                                            <td>{page.opens_total}</td>
                                            <td>{page.opens_unique}</td>
                                            <td style={{backgroundColor: 'rgba(255, 0, 0, 0.1)'}}>{page.livechat_total}</td>
                                            <td style={{backgroundColor: 'rgba(255, 0, 0, 0.1)'}}>{page.livechat_unique}</td>
                                            <td style={{backgroundColor: 'rgba(255, 0, 0, 0.1)'}}>{Math.round(page.livechat_duration / 60, 2)} min</td>
                                            <td style={{backgroundColor: 'rgba(0, 0, 255, 0.1)'}}>{page.chatbot_total}</td>
                                            <td style={{backgroundColor: 'rgba(0, 0, 255, 0.1)'}}>{page.chatbot_unique}</td>
                                            <td style={{backgroundColor: 'rgba(0, 0, 255, 0.1)'}}>{Math.round(page.chatbot_duration / 60, 2)} min</td>
                                        </tr>)
                                    })}
                                    </tbody>
                                </Table>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="row my-4">
                    <div className={'col-md-8'}>
                        <VisitorsMap
                            countries={this.state.countries}
                        />
                    </div>
                    <div className="col-md-4">
                        <div className="card rounded">
                            <div className="card-header">
                                <h4>{window.translates.using}</h4>
                            </div>
                            <div className="card-body">
                                {this.state.usages.length !== 0 ?
                                    <HorizontalBar
                                        data={barData}
                                    />
                                    : <p>{window.translates.no_result}</p>
                                }
                            </div>
                        </div>
                        <div className="card mt-5 rounded">
                            <div className="card-header">
                                <h4>{window.translates.chatboxes}</h4>
                            </div>
                            <div className="card-body">
                                {this.state.chatboxes.length !== 0 ?
                                    <HorizontalBar
                                        data={pieData}
                                    />
                                    : <p>{window.translates.no_result}</p>
                                }
                            </div>
                        </div>
                        <div className="row my-4 justify-content-end">
                            <div className="col-md-6 pl-0 text-center">
                                <AnalyticElement
                                    color={'blue-icon-block'}
                                    class={'fa-facebook'}
                                    name={'Facebook'}
                                    value={this.state.socials.facebook}
                                />
                            </div>
                            <div className="col-md-6 pr-0 text-center">
                                <AnalyticElement
                                    color={'green-icon-block'}
                                    class={'fa-whatsapp'}
                                    name={'Whatsapp'}
                                    value={this.state.socials.whatsapp}
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
