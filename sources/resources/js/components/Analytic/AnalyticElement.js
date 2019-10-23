import React, {Component} from 'react'

export default class AnalyticElement extends Component {
    render() {
        return (
            <div className={'analytic-element d-flex my-2 clickable'} onClick={this.props.onClick}>
                <div className={'icon-block ' + this.props.color}>
                    <i className={'fa ' + this.props.class}></i>
                </div>
                <div className="data-block">
                    <p className={'analytic-element-name'}>{this.props.name}</p>
                    <p className={'analytic-element-value'}>{this.props.value}</p>
                </div>
            </div>
        )
    }
}