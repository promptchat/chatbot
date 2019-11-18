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
                    <span className="name">{'Method'}</span>
                    <span className="value">{api.method}</span>
                </div>
                <div className={'configuration'}>
                    <span className="name">{'Url'}</span>
                    <span className="value">{api.url}</span>
                </div>
                {
                    api.headers.length ?
                        <div className={'configuration'}>
                            <span className="name">{'Headers'}</span>
                            <span className="value">{api.headers.length}</span>
                        </div> : null
                }
                {
                    api.params.length ?
                        <div className={'configuration'}>
                            <span className="name">{'Params'}</span>
                            <span className="value">{api.params.length}</span>
                        </div> : null
                }
                {
                    api.data.length ?
                        <div className={'configuration'}>
                            <span className="name">{'Body'}</span>
                            <span className="value">{api.data.length}</span>
                        </div> : null
                }

            </div>
        )
    }
}
