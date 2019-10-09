import React from 'react';
import Message from "./Message";

export class CalendarBlock extends React.Component {


    render() {
        return (
            <div className={'content-block'}>
                <Message>
                    {`<i class="fa fa-calendar" ></i> ${this.props.block.calendar_name}`}
                </Message>
                <div className="clearfix" />
            </div>
        )
    }
}