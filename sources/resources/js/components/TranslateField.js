import React, { Component } from 'react';
import {clone} from "lodash";

export default class TranslateField extends  Component {


    constructor() {
        super(...arguments);
        const values = this.props.value;

        this.state = {
            locale: Object.keys(values)[0]
        }
        this.changeValue = this.changeValue.bind(this);
    }

    changeValue(e) {
        const values = clone(this.props.value);

        values[this.state.locale] = e.target.value;

        this.props.onChange(values);
    }

    render() {
        const values = this.props.value;
        const locales = Object.keys(values);
        return (<div>
            <ul className="nav nav-tabs mb-2">
                {locales.map((locale) => {
                    return (
                        <li
                            className="nav-item"
                            key={locale}
                            onClick={() => this.setState({locale: locale})}
                        >
                                <span style={{minHeight: 'auto', padding: '10px 15px'}}
                                      className={`nav-link cursor-pointer ${this.state.locale === locale ? 'active' : ''}`}
                                >
                                    {locale}
                                </span>
                        </li>
                    )
                })}
            </ul>
            <input type="text" className="form-control" value={values[this.state.locale]} onChange={this.changeValue}/>
        </div>)
    }
}