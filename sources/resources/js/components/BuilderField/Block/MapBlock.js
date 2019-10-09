import React from 'react';
import Message from "./Message";

export class MapBlock extends React.Component {


    render() {
        return (
            <div className={'content-block'}>

                <Message>
                    {
                        this.props.block.text
                    }

                </Message>

                    {
                        this.props.block.markers.map((marker) =>
                            (<div key={marker.id} className={'message income'}>
                                    <div dangerouslySetInnerHTML={{__html:marker.text}} />
                            </div>))
                    }

                <div className="clearfix" />
            </div>
        )
    }
}