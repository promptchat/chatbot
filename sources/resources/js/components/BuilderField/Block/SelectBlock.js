import React from 'react';
import Message from "./Message";

export class SelectBlock extends React.Component {


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
                <div className={'message income'}>
                    {
                        this.props.block.variants.map((variant) => <div  key={variant.text}><i className={'icon fa fa-check-circle'}/>{variant.text}</div>)
                    }
                </div>
                <div className="clearfix" />
            </div>
        )
    }
}