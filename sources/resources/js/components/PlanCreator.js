import React, {Component} from 'react';
import {clone} from 'lodash';
import axios from "axios";

export default class PlanCreator extends Component {
    constructor(props) {
        super(...arguments);
        this.createPlan = this.createPlan.bind(this);

        const items = JSON.parse(this.props.items);
        this.state = {
            items: items,
            incorrectValues: {},
        };
        let limits = {};
        let prices = {};
        items.forEach((item) => {
            prices[item.name]  = item.price
            limits[item.name] = 1
        });
        this.prices = prices;
        this.state.limits = limits;
    }


    createPlan() {
        if(Object.keys(this.state.incorrectValues).length === 0) {
            axios.post('', this.state.limits).then(({data}) => {
                window.location = '/plans/buy/' + data.id
            })
        }
    }

    calculatePrice() {
        let sum = 0;
        for(let name in this.state.limits) {
            if(this.state.limits.hasOwnProperty(name)) {
                sum += (this.prices[name] * this.state.limits[name]);
            }

        }


        return sum.toFixed(2);

    }

    changeLimit(name)  {
        return (e) => {
            let value = e.target.value;
            if(value==="" || isFinite(value) && parseInt(value) === +value) {
                let limits = clone(this.state.limits);
                let incorrectValues = clone(this.state.incorrectValues);
                if(+value>0) {
                    delete incorrectValues[name];
                } else {
                    incorrectValues[name] = 'Minimum value is 1';
                }
                limits[name] = value && +value;
                this.setState({limits, incorrectValues});
            }
        }
    }

    render() {
        return (<div className="row justify-content-center align-items-center" >
            <div className="col-sm-3">
                <div className="card">
                    <div className="card-body">
                        {
                            this.state.items.map(({name, price}) =>

                                <div className="form-group "  key={name}>
                                    <label htmlFor={name} className="control-label">
                                        {window.translates[name]} (${price}/{window.translates.days})
                                    </label>

                                    <input id="limit_departments" type="text" className="form-control  "
                                           name={name} placeholder="" onChange={this.changeLimit(name)} value={this.state.limits[name]} />
                                    {this.state.incorrectValues[name] &&
                                    <span className="invalid-feedback d-block">
                                        <strong>{this.state.incorrectValues[name]}</strong>
                                    </span>}
                                </div>)
                        }
                    </div>
                </div>
            </div>
            <div className="col-sm-4 mb-4">
                <div className="card text-center">

                    <div className="card-body">
                        <h5 className="card-title">{window.translates.create}</h5>
                        <p>
                            <strong
                                className="d-inline">${this.calculatePrice()}</strong>/{window.translates.days}

                        </p>
                        <ul className="card-text list-unstyled">
                            {
                                this.state.items.map(({name}) => (
                                    <li key={name} >{window.translates[name]}: <strong>{this.state.limits[name]}</strong></li>)
                                )
                            }

                        </ul>
                        <a onClick={this.createPlan} className="btn btn-primary">{window.translates.create_button}</a>
                    </div>
                </div>
            </div>
        </div>)
    }
}
