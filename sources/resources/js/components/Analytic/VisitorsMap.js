import React, {Component} from 'react'
import {VectorMap} from "react-jvectormap";


export default class VisitorsMap extends Component {

    regionHover(tip, code) {
        tip[0].innerHTML = tip[0].innerHTML + ' ' + (this.props.countries[code] ? this.props.countries[code] : 0)
    }

    render() {
        return (
            <div className="card rounded">
                <div className="card-header">
                    <div className="d-flex justify-content-between">
                        <h4>{window.translates.visitors}</h4>
                        <div className="">
                            <h5>
                                {window.translates.total}: {Object.entries(this.props.countries).length !== 0 ? Object.values(this.props.countries).reduce((a, b) => a + b) : 0}
                            </h5>
                            <h5>{this.props.countries.none && 'Not defined: ' + this.props.countries.none}</h5>
                        </div>
                    </div>
                </div>
                <div className="card-body" style={{width: "auto", height: 610}}>
                    <VectorMap map={'world_mill'}
                               backgroundColor="#d0d0d0"
                               ref="map"
                               containerStyle={{
                                   width: '100%',
                                   height: '100%'
                               }}
                               series={{
                                   regions: [{
                                       values: this.props.countries,
                                       scale: ['#C8EEFF', '#0071A4'],
                                       normalizeFunction: 'polynomial'
                                   }]
                               }}
                               onRegionTipShow={(event, tip, code) => {
                                   this.regionHover(tip, code)
                               }}
                               containerClassName="map"
                    />
                </div>
            </div>
        )
    }
}