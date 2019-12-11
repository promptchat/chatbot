import React, {Component} from 'react'
import {Timeline, TimelineEvent} from 'react-event-timeline'

export default class ActionsTimeline extends Component {

    constructor() {
        super(...arguments);
    }

    render() {
        return (
            <Timeline style={{maxHeight: "600px", overflowY: "scroll"}}>
                {this.props.actions && JSON.parse(this.props.actions).map((action) => {
                    return (
                        <TimelineEvent
                            className={'text-dark'}
                            collapsible={true}
                            title={action.title}
                                       createdAt={action.created_at}>
                            {action.message &&
                            <p>
                                {action.message}
                            </p>
                            }
                        </TimelineEvent>
                    )
                })}
            </Timeline>
        )
    }
}