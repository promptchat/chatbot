import React, { Component, Fragment } from  'react'
import {Bar} from "react-chartjs-2"
import axios from 'axios'
import {getById} from "../help/services";


export class StatisticByAgent extends Component {
    state = {
        data: {},
        agents: []
    };
    componentDidMount() {
        axios.get("/analytics/by-agents", {
            params: {
                from: this.props.from,
                to: this.props.to
            }
        }).then(({data}) => {
            this.setState({data: data.data, agents: data.agents})
        });
    }


    render() {
        let data = this.state.data;
        let agents = this.state.agents;
        let dates = [];
        let dateSets = [];
        for(let i in data) {
            if (data.hasOwnProperty(i)) {
                dates.push(i);
            }
        }

        for(let agent of agents) {
            let agentsData = [];
            for(let i in data) {
                if(data.hasOwnProperty(i)) {
                    let day = data[i];
                    let _ = day.find((d) => d.id === agent.id);
                    if(_) {
                        agentsData.push(_.count)
                    } else {
                        agentsData.push(0)
                    }

                }
            }

            let color = Analytics.getRandomColor();
            dateSets.push({
                label: agent.name,
                backgroundColor: color,
                borderColor: color,
                borderWidth: 1,
                hoverBackgroundColor: color,
                hoverBorderColor: color,
                data: agentsData
            })

        }



        return(
            <div style={ {width: "100%"}  }>

                <Bar
                    width={50}
                    height={20}
                    options={{
                        scales: {
                            yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 0}}]
                        }
                    }}
                    legend={{
                        position: 'bottom',
                    }}
                    data={{
                        labels: dates,
                        datasets: dateSets
                    }}
                />
            </div>
        )

    }
}
export class StatisticByServices extends Component {
    state = {
        data: {},
        services: []
    };
    componentDidMount() {
        axios.get("/analytics/by-services", {
            params: {
                from: this.props.from,
                to: this.props.to
            }
        }).then(({data}) => {
            this.setState({data: data.data, services: data.services})
        });
    }


    render() {
        let data = this.state.data;
        let services = this.state.services;
        let dates = [];
        let dateSets = [];
        for(let i in data) {
            if (data.hasOwnProperty(i)) {
                dates.push(i);
            }
        }

        for(let service of services) {
            let serviceData = [];
            for(let i in data) {
                if(data.hasOwnProperty(i)) {
                    let day = data[i];
                    let _ = day.find((d) => d.contact_type_id === service.id);
                    if(_) {
                        serviceData.push(_.count)
                    } else {
                        serviceData.push(0)
                    }

                }
            }

            let color = Analytics.getRandomColor();
            dateSets.push({
                label: getById(service.id).name,
                backgroundColor: color,
                borderColor: color,
                borderWidth: 1,
                hoverBackgroundColor: color,
                hoverBorderColor: color,
                data: serviceData
            })

        }



        return(
            <div style={ {width: "100%"}  }>

                <Bar
                    width={50}
                    height={20}
                    options={{
                        scales: {
                            yAxes: [{id: 'y-axis-1', type: 'linear', position: 'left', ticks: {min: 0}}]
                        }
                    }}
                    legend={{
                        position: 'bottom',
                    }}
                    data={{
                        labels: dates,
                        datasets: dateSets
                    }}
                />
            </div>
        )

    }
}
export class StatisticByChatBots extends Component {
    state= {
        bots: [],
        data: []
    };

    componentDidMount() {
        axios.get("/analytics/by-bots", {
            params: {
                from: this.props.from,
                to: this.props.to
            }
        }).then(({data}) => {
            this.setState({bots: data.bots, data: data.data})
        });
    }


    render() {
        return (
            <div>
                <h4>Bot statistic </h4>
                {this.state.bots.map((bot) => (
                    <div key={bot.id}>
                        <h5>{bot.name}</h5>
                        <div className="table-responsive">
                            <table className="table table-sm">
                                <thead>
                                <tr>
                                    <th>ID</th>
                                    <th>Ip</th>
                                    <th>Url</th>
                                    <th>Created at</th>
                                    {bot.variables.map((v) => <th key={v.id}>Variable {v.variable}</th>)}
                                </tr>
                                </thead>
                                <tbody>
                                {(this.state.data[bot.id] || []).map((session) =>
                                    <tr key={`session-${session.id}`}>
                                        <td>{session.id}</td>
                                        <td>{session.ip}</td>
                                        <td>{session.url}</td>
                                        <td>{session.created_at}</td>
                                        {bot.variables.map((v) => <td key={`${session.id}-${v.id}`}>{session.variables[v.variable] || ''}</td>)}
                                    </tr>

                                )}
                                </tbody>
                            </table>
                        </div>
                        <hr/>
                    </div>
                ))}
            </div>
        )
    }
}
export default class Analytics extends Component {
    state = {
        data: {},
        agents: []
    };
    componentDidMount() {

    }
    static getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
    render() {


        return(
            <div>
                <h4>Statistic by agent's channels</h4>
                <StatisticByAgent from={this.props.from} to={this.props.to} />
                <h4>Statistic by contacts</h4>
                <StatisticByServices from={this.props.from} to={this.props.to} />

            </div>
        )

    }
}