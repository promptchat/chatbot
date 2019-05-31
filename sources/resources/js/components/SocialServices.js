import React, { Component } from 'react'
import SERVICES from '../help/services'

export default class SocialServices extends Component {
    state = {
        socials: this.props.socials && JSON.parse(this.props.socials) || [],
        active: 0
    };

    componentDidMount() {

    }

    render() {
        let services = [];


        return ( <div>
            Socials (Allow website visitors to contact you directly via social messengers)
            <div>
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    {
                        SERVICES.map((service, i) =>
                            <li key={i} className="nav-item"><a
                                className={`nav-link ${i == this.state.active ? 'active' : ''}`}
                                onClick={() => this.setState({'active': i})}
                                id={`${i}-tab`}
                                data-toggle="tab"
                                href={`#${i}`}
                                role="tab"
                                aria-controls={i}
                                aria-selected="true"
                            >{service.name}</a></li>
                        )
                    }
                </ul>
                <div className="tab-content" id="myTabContent">
                    {
                        SERVICES.map((service, i) =>
                            (
                                <div  key={i} className={`tab-pane fade ${i==this.state.active ? 'show active' : ''}`} id={i} role="tabpanel" aria-labelledby={`${i}-tab`}>
                                    <div className="form-group row mt-15">
                                        <div className="col-2">
                                            <img className="prefix-img" src={service.icon} alt=""/>
                                        </div>
                                        <div className="col-10">
                                            <label >{service.format}</label>
                                            <input
                                                name={`socials[${service.id}]`}
                                                defaultValue={this.state.socials[service.id]}
                                                type="text"
                                                className="form-control"
                                            />
                                        </div>
                                    </div>
                                </div>

                            )
                        )
                    }
                </div>
            </div>
        </div> )
    }
}