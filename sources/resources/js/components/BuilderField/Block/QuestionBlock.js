import React from 'react';
import Message from "./Message";

export class QuestionBlock extends React.Component {


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
                <div className="clearfix" />
            </div>
        )
    }
}