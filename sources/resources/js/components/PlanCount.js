import React, {Component} from 'react';
import {clone} from 'lodash';
import axios from "axios";

export default class PlanCount extends Component {
    state = {
        count: 1
    }
    constructor(props) {
        super(...arguments);
        this.changeCount = this.changeCount.bind(this);
    }


    calculatePrice() {

        return (this.props.price * this.state.count).toFixed(2);

    }

    changeCount(e)  {
            let value = e.target.value;
            if(isFinite(value) && parseInt(value) === +value) {
                this.setState({count: value});

            }

    }

    render() {
        return (
            <div className="col-sm-4 mb-4">
                <div className="card text-center">

                    <div className="card-body">
                        <input name={'count'} type="text" value={this.state.count} onChange={this.changeCount}/>
                        <span>{this.calculatePrice()} $</span>
                    </div>
                </div>
            </div>
        )
    }
}
