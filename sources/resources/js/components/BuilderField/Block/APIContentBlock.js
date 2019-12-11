import React from 'react';
import Message from "./Message";

export class APIContentBlock extends React.Component {


    render() {
        let api = this.props.block.api;
        return (
            <div className={'content-block'}>
                <Message>
                    {
                        this.props.block.text
                    }

                </Message>
                {
                    this.props.block.image.path && <img src={`/storage/${this.props.block.image.path}`} alt=""/>
                }
                {
                    this.props.block.buttons.map((button) => this.props.connector(button.text, button.id)

                    )
                }

                <div className={'configuration'}>
                    <span className="name">{api.method}{` `}</span>
                    <span className="value">{api.url}</span>
                </div>


            </div>
        )
    }
}
