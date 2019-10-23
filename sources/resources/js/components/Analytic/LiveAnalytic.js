import React, {Component} from 'react'
import AnalyticElement from './AnalyticElement'

export default class LiveAnalytic extends Component {

    state = {
        active_users: 0,
        active_users_chatbot: 0,
        active_users_livechat: 0,
        operators_online: 0,
    };

    constructor() {
        super(...arguments);
        this.updateData = this.updateData.bind(this)
        this.onlineOperators = this.onlineOperators.bind(this)
        this.activeLivechats = this.activeLivechats.bind(this)
    }

    onlineOperators() {
        window.open('/users?filter[status]=1');
    }

    activeLivechats() {
        window.open('/live-chat');
    }

    activeChatbots() {

    }

    activeSeances() {

    }

    updateData() {
        axios.get("/analytics-liveData", {})
            .then(({data}) => {
                this.setState({
                    active_users: data.active_users,
                    active_users_chatbot: data.active_users_chatbot,
                    active_users_livechat: data.active_users_livechat,
                    operators_online: data.operators_online,
                }, () => {
                    setTimeout(this.updateData, 5e3);
                })
            });
    }

    componentDidMount() {
        this.updateData()
    }


    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-md-3 text-center">
                        <AnalyticElement
                            color={'blue-icon-block'}
                            class={'fa-bar-chart'}
                            name={window.translates.active}
                            value={this.state.active_users}
                        />
                    </div>
                    <div className="col-md-3 text-center">
                        <AnalyticElement
                            color={'blue-one-block'}
                            class={'fa-android'}
                            name={window.translates.active_chatbot}
                            value={this.state.active_users_chatbot}
                        />
                    </div>
                    <div className="col-md-3 text-center">
                        <AnalyticElement
                            color={'blue-second-block'}
                            class={'fa-comments-o'}
                            name={window.translates.active_livechat}
                            value={this.state.active_users_livechat}
                            onClick={this.activeLivechats}
                        />
                    </div>
                    <div className="col-md-3 text-center">
                        <AnalyticElement
                            color={'green-icon-block'}
                            class={'fa-signal'}
                            name={window.translates.operators_online}
                            value={this.state.operators_online}
                            onClick={this.onlineOperators}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
