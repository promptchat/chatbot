import React from 'react';
import Message from "./Message";

export class ButtonsBlock extends React.Component {


    render() {
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
            </div>
        )
    }
}