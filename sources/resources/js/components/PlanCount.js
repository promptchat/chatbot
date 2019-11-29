import React, {Component} from 'react';
import {clone} from 'lodash';
import axios from "axios";

export default class PlanCount extends Component {
    state = {
        count: this.props.count
    }

    constructor(props) {
        super(...arguments);
        this.changeCount = this.changeCount.bind(this);
    }


    calculatePrice() {
        return Math.max(0, (this.props.price * this.state.count - this.props.discount).toFixed(2));
    }

    changeCount(e) {
        let value = e.target.value;
        if (value == '' || isFinite(value) && parseInt(value) === +value && value <= 12) {
            if (value > 0) {
                this.setState({count: value});
            }
        }
    }

    render() {
        return (
            <div className="col-sm-4 offset-sm-4">
                <div className="card">
                    <div className="card-body">
                        <div className="form-group">
                            <label>Months</label>
                            <div className={'month-input pull-right'}>
                                <input name={'count'} type="number" className={'text-center form-control'}
                                       value={this.state.count} onChange={this.changeCount}/>
                            </div>
                            <div className="mt-4 text-right">
                                <strong>Total: </strong>
                                <span>{this.calculatePrice()} $</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }}
