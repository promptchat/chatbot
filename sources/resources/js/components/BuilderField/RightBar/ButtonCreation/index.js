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
import Modal from 'react-modal';


Modal.setAppElement('#app');

const customStyles = {
    overlay: {
        overflowX: 'hidden',
        overflowY: 'auto',
    },
    content : {
        position: 'relative',
        top: 'unset',
        left: 'unset',
        right: 'unset',
        bottom: 'unset'
    }
};

export default class ButtonCreation extends React.PureComponent {
    state = {
        buttonType: null
    };

    createButton(type) {
        this.setState({buttonType: type});
        this.props.startButtonCreation();
    }

    renderButtonConfig() {
        const buttonType = this.props.block ? this.props.block.type : this.state.buttonType;
        if(!buttonType) {
            return null;
        }
        let content = null;
        let message = null;
        let icon = null;
        switch (buttonType) {
            case TYPE_MESSAGE:
                icon = 'comment';
                message = window.translates.message;
                content = <Message
                    onCancel={this.props.onCancel}
                    onBlockChange={this.props.onBlockChange}
                    blockId={this.props.block ? this.props.block.id : null}
                    block={this.props.block ? this.props.block.data : {}}/>;
                    break;
            case TYPE_QUESTION:
                icon = 'question';
                message = window.translates.question;
                content =  <Question
                    onCancel={this.props.onCancel}
                    onBlockChange={this.props.onBlockChange}
                    blockId={this.props.block ? this.props.block.id : null}
                    block={this.props.block ? this.props.block.data : {}}/>;
                    break;
            case TYPE_BUTTONS:
                icon = 'list';
                message = window.translates.buttons;
                content =  <Buttons
                    onCancel={this.props.onCancel}
                    onBlockChange={this.props.onBlockChange}
                    blockId={this.props.block ? this.props.block.id : null}
                    block={this.props.block ? this.props.block.data : {}}/>;
                    break;
            case TYPE_SELECT:
                icon = 'check-square';
                message = window.translates.select;
                content = <Select
                    onCancel={this.props.onCancel}
                    onBlockChange={this.props.onBlockChange}
                    blockId={this.props.block ? this.props.block.id : null}
                    block={this.props.block ? this.props.block.data : {}}/>;
                    break;
            case TYPE_CALENDAR:
                icon = 'calendar';
                message = window.translates.calendar;
                content =  <Calendar
                    onCancel={this.props.onCancel}
                    onBlockChange={this.props.onBlockChange}
                    blockId={this.props.block ? this.props.block.id : null}
                    block={this.props.block ? this.props.block.data : {}}/>;
                    break;
            case TYPE_MAP:
                icon = 'map';
                message = window.translates.map;
                content =  <Map
                    onCancel={this.props.onCancel}
                    onBlockChange={this.props.onBlockChange}
                    blockId={this.props.block ? this.props.block.id : null}
                    block={this.props.block ? this.props.block.data : {}}/>;
                break;
        }

        return <Modal
            isOpen={this.props.isCreation}
            onRequestClose={() => {
                this.props.onCancel()
            }}
            style={customStyles}
        >
            <div className='react-modal-header'>
                <i className={`icon fa fa-${icon}`}/> {message}
                <div className='close' onClick={() => {this.props.onCancel()}}><i className='fa fa-times'/></div>
            </div>
            {content}
        </Modal>
    }

    render() {


        return (
            <div>
                <a
                    className="menu-item"
                    onClick={() => this.createButton(TYPE_MESSAGE)}
                >
                    <i className={`button-icon fa fa-comment`} aria-hidden="true" />{window.translates.message}
                </a>

                <a
                    className="menu-item"
                    onClick={() => this.createButton(TYPE_QUESTION)}
                ><i className={`button-icon fa fa-question`} aria-hidden="true" />{window.translates.question}</a>

                <a
                    className="menu-item"
                    onClick={() => this.createButton(TYPE_BUTTONS)}
                ><i className={`button-icon fa fa-list`} aria-hidden="true" />{window.translates.buttons}</a>


                <a
                    className="menu-item"
                    onClick={() => this.createButton(TYPE_SELECT)}
                ><i className={`button-icon fa fa-check-square`} aria-hidden="true" />{window.translates.select}</a>

                <a
                    className="menu-item"
                    onClick={() => this.createButton(TYPE_CALENDAR)}
                ><i className={`button-icon fa fa-calendar`} aria-hidden="true" />{window.translates.calendar}</a>

                <a
                    className="menu-item"
                    onClick={() => this.createButton(TYPE_MAP)}
                ><i className={`button-icon fa fa-map`} aria-hidden="true" />{window.translates.map}</a>
                {this.renderButtonConfig()}
            </div>
        )
    }
}