import React, { Component } from 'react'
import SERVICES from '../help/services'

export default class AgentContacts extends Component {

    state = {
        socials: JSON.parse(this.props.socials)
    };

    render() {


        return ( <div>
            {
                SERVICES.map((service, i) =>
                    this.props.socials[service.id] ?
                    (

                                <img key={i} title={service.name} className="agent-contact" src={service.icon} alt=""/>
                    ): null
                )
            }
          
        </div> )
    }
}