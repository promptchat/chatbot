import React from 'react';
import Message from "./Message";
import {
    TYPE_BUTTONS, TYPE_CALENDAR, TYPE_MAP, TYPE_MESSAGE, TYPE_QUESTION,
    TYPE_SELECT
} from "../../../../help/buttonTypes";
import Buttons from "./Buttons";
import Question from "./Question";
import Select from "./Select";
import Calendar from "./Calendar";
import Map from "./Map";

const STEP_INIT = 1;
const STEP_MESSAGE_CREATION = 2;
export default class ButtonCreation extends React.PureComponent {
    state = {
        step: STEP_INIT,
        buttonType: null
    };

    render() {
        const buttonType = this.props.block ? this.props.block.type : this.state.buttonType;

        return (
            <div className="sub-configs ">
                <a
                    className="button"
                    onClick={() => this.setState({
                        step: STEP_MESSAGE_CREATION,
                        buttonType: TYPE_MESSAGE,
                    })}
                >
                    <i className={`button-icon fa fa-comment`} aria-hidden="true" />
                    Message
                </a>
                {buttonType === TYPE_MESSAGE && (
                            <Message
                                onCancel={this.props.onCancel}
                                onBlockChange={this.props.onBlockChange}
                                blockId={this.props.block ? this.props.block.id : null} block={this.props.block ? this.props.block.data : {}}/>
                        )}

                <a
                    className="button"
                    onClick={() => this.setState({
                        step: STEP_MESSAGE_CREATION,
                        buttonType: TYPE_QUESTION,
                    })}
                ><i className={`button-icon fa fa-question`} aria-hidden="true" />Question</a>
                {buttonType === TYPE_QUESTION && (
                    <Question
                        onCancel={this.props.onCancel}
                        onBlockChange={this.props.onBlockChange}
                        blockId={this.props.block ? this.props.block.id : null} block={this.props.block ? this.props.block.data : {}}/>
                )}
                <a
                    className="button"
                    onClick={() => this.setState({
                        step: STEP_MESSAGE_CREATION,
                        buttonType: TYPE_BUTTONS,
                    })}
                ><i className={`button-icon fa fa-list`} aria-hidden="true" />Buttons</a>
                {buttonType === TYPE_BUTTONS && (
                    <Buttons
                        onCancel={this.props.onCancel}
                        onBlockChange={this.props.onBlockChange}
                        blockId={this.props.block ? this.props.block.id : null} block={this.props.block ? this.props.block.data : {}}/>
                )}

                <a
                    className="button"
                    onClick={() => this.setState({
                        step: STEP_MESSAGE_CREATION,
                        buttonType: TYPE_SELECT,
                    })}
                ><i className={`button-icon fa fa-check-square`} aria-hidden="true" />Select</a>
                {buttonType === TYPE_SELECT && (
                            <Select
                                onCancel={this.props.onCancel}
                                onBlockChange={this.props.onBlockChange}
                                blockId={this.props.block ? this.props.block.id : null} block={this.props.block ? this.props.block.data : {}}/>
                        )}

                <a
                    className="button"
                    onClick={() => this.setState({
                        step: STEP_MESSAGE_CREATION,
                        buttonType: TYPE_CALENDAR,
                    })}
                ><i className={`button-icon fa fa-calendar`} aria-hidden="true" />Calendar</a>
                {buttonType === TYPE_CALENDAR && (
                            <Calendar
                                onCancel={this.props.onCancel}
                                onBlockChange={this.props.onBlockChange}
                                blockId={this.props.block ? this.props.block.id : null} block={this.props.block ? this.props.block.data : {}}/>
                        )}
                <a
                    className="button"
                    onClick={() => this.setState({
                        step: STEP_MESSAGE_CREATION,
                        buttonType: TYPE_MAP,
                    })}
                ><i className={`button-icon fa fa-map`} aria-hidden="true" />Map</a>
                {buttonType === TYPE_MAP && (
                            <Map
                                onCancel={this.props.onCancel}
                                onBlockChange={this.props.onBlockChange}
                                blockId={this.props.block ? this.props.block.id : null} block={this.props.block ? this.props.block.data : {}}/>
                        )}
            </div>
        )
    }
}