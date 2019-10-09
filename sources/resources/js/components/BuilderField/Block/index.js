import React from 'react';
import {each} from 'lodash'
import Draggable from "react-draggable";
import {
    TYPE_BUTTONS, TYPE_CALENDAR, TYPE_MAP, TYPE_MESSAGE, TYPE_QUESTION, TYPE_SELECT,
    TYPE_START
} from "../../../help/buttonTypes";
import {MessageBlock} from "./MessageBlock";
import {ButtonsBlock} from "./ButtonsBlock";
import {QuestionBlock} from "./QuestionBlock";
import {SelectBlock} from "./SelectBlock";
import {StartBlock} from "./StartBlock";
import {CalendarBlock} from "./CalendarBlock";
import {MapBlock} from "./MapBlock";


export class Connect extends React.PureComponent {
    state = {
        active: false,
    };

    static  defaultProps = {
        positions: ['top', 'left', 'bottom', 'right'],
        isConnectable: true,
    };

    removeConnection() {
        if (this.state.active) {
            this.setState({active: false})
        }
    }


    constructor() {
        super(...arguments);
        this.removeConnection = this.removeConnection.bind(this)
    }

    componentDidMount() {
        window.addEventListener('mouseup', this.removeConnection)
    }

    componentWillUnmount() {
        window.removeEventListener('mouseup', this.removeConnection)
    }

    onConnect(position) {
        return (e) => {

            this.setState({active: position});
            this.props.onConnect(e);
        }

    }

    render() {
        return (<div className={'builder-block'}>
            {
                this.props.isConnectable && this.props.positions.map((pos) =>
                    <span key={pos} onMouseDown={this.onConnect(pos)}
                          className={`${this.state.active === pos ? "connecting" : ''} connect connect-${pos}`}/>
                )
            }

            {this.props.children}

        </div>)
    }
}

export default class Block extends React.PureComponent {

    blocks = {};
    mainBlock;
    children = [];

    state = {
        position: this.props.position,
        show: this.props.show
    };

    timeoutTop;
    timeoutLeft;

    onControlledDrag(e, position) {
        const {x, y} = position;
        clearTimeout(this.timeoutTop);
        clearTimeout(this.timeoutLeft);

        const {clientX, clientY} = e;
        const { width, height} = this.props.getWrapper().getBoundingClientRect();

        if(height < clientY - 50) {
            let timeout = () => {
                this.props.getWrapper().scrollTop+=~~Math.max(clientY - height - 50, 10);
                this.timeoutTop = setTimeout(timeout, 1e2)
            };
            timeout();
        }

        if(clientY < 50) {
            let timeout = () => {
                this.props.getWrapper().scrollTop-=~~Math.max(50-clientY, 10);
                this.timeoutTop = setTimeout(timeout, 1e2)
            };
            timeout();
        }

        if(width < clientX- 300) {
            let timeout = () => {
                this.props.getWrapper().scrollLeft+=~~Math.max(clientX - width - 300, 10);
                this.timeoutLeft = setTimeout(timeout, 1e2)
            };
            timeout();


        }

        if(clientX < 300) {
            let timeout = () => {
                this.props.getWrapper().scrollLeft-=~~Math.max(300-clientX, 10);
                this.timeoutLeft = setTimeout(timeout, 1e2)
            };
            timeout();
        }


        this.setState({position: {x, y}});

        this.notifySize();
    }

    constructor() {
        super(...arguments);
        this.toggleContent = this.toggleContent.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.edit = this.edit.bind(this);
        this.copy = this.copy.bind(this);
    }

    onControlledStopDrag(e, position) {
        clearTimeout(this.timeoutTop);
        clearTimeout(this.timeoutLeft);
        let {x, y} = position;
        x = Math.round(x / 10) * 10;
        y = Math.round(y / 10) * 10;
        this.setState({position: {x, y}});

        this.notifySize();
    }

    toggleContent() {
        this.setState({show: !this.state.show}, () => this.notifySize());
    }

    edit() {
        this.props.onBlockUpdate(this.props.id)
    }

    static defaultProps = {
        onBuild: () => {
        },
        isConnectable: true,
    };

    notifySize() {
        if (this.state.show) {
            each(this.blocks, (block, key) => this.props.onBuild(key, block))
        } else {
            each(this.blocks, (block, key) => this.props.onBuild(key, this.mainBlock))
        }
    }

    componentDidMount() {
        this.notifySize();
    }

    componentDidUpdate() {
        this.notifySize();
    }


    onRemove() {
        this.props.onRemove(this.props.id, this.children);
    }


    copy() {
        this.props.onCopy(this.props.id, this.state.position);
    }


    get isConnectable() {
        return [TYPE_MESSAGE, TYPE_QUESTION, TYPE_SELECT, TYPE_START, TYPE_MAP, TYPE_CALENDAR].indexOf(this.props.type) !== -1
    }


    get name() {
        switch (this.props.type) {
            case TYPE_MESSAGE:
                return "Message";
            case TYPE_START:
                return  "START";
            case TYPE_BUTTONS:
                return "Button";
            case TYPE_CALENDAR:
                return "Scheduler";
            case TYPE_MAP:
                return "Map";

            case TYPE_QUESTION:
            case TYPE_SELECT:
                return this.props.data.variable || 'Question' ;

        }
    }

    render() {

        let content;
        switch (this.props.type) {
            case TYPE_MESSAGE:
                content = <MessageBlock block={this.props.data}/>;
                break;
            case TYPE_START:
                content = null;
                break;
            case TYPE_BUTTONS:
                content = <ButtonsBlock
                    block={this.props.data}
                    connector={(render, id) => {
                        this.children.push(id);
                        return <div className={'connectable-inline'} key={id} ref={(ref) => this.blocks[id] = ref}>{
                            <Connect positions={['right', 'left']} onConnect={(e) => {
                                this.props.startConnect(e, id)
                            }}>
                                <div className="connectable-content">{render}</div>
                            </Connect>
                        }</div>
                    }
                    }

                />;
                break;
            case TYPE_QUESTION:
                content = <QuestionBlock
                    block={this.props.data}

                />;
                break;
            case TYPE_CALENDAR:
                content = <CalendarBlock
                    block={this.props.data}

                />;
                break;
            case TYPE_SELECT:
                content = <SelectBlock
                    block={this.props.data}

                />;
                break;
            case TYPE_MAP:
                content = <MapBlock
                    block={this.props.data}

                />;
                break;
        }

        return (
            <Draggable
                handle=".header"
                position={this.state.position}
                onDrag={this.onControlledDrag.bind(this)}
                onStop={this.onControlledStopDrag.bind(this)}

            >
                <div onMouseOut={() => this.props.onHover(null)}
                     onMouseOver={() => this.props.onHover([this.props.id, ...this.children])}
                     className={'builder-block-wrapper'}>
                    <Connect isConnectable={this.isConnectable} onConnect={(e) => {
                        this.props.startConnect(e, this.props.id)
                    }}>

                        <div className={'builder-block-body'} ref={(block) => this.blocks[this.props.id] = this.mainBlock = block}>
                            <div onDoubleClick={this.toggleContent} className={`header ${this.props.type === TYPE_START ? 'start' : '' }`}>
                                <span className="block-name">{this.name}</span>
                                {this.props.type !== TYPE_START &&
                                <div className="buttons-block">

                                    <button
                                        key={'edit'}
                                        type={'button'}
                                        className="button"
                                        onClick={this.edit}>
                                        <i
                                            className={`fa fa-pencil`}
                                            aria-hidden="true"
                                        />
                                    </button>
                                    <button
                                        key={'copy'}
                                        type={'button'}
                                        className="button"
                                        onClick={this.copy}>
                                        <i
                                            className={`fa fa-copy`}
                                            aria-hidden="true"
                                        />
                                    </button>
                                    <button
                                        key={'remove'}
                                        type={'button'}
                                        className="button"
                                        onClick={this.onRemove}>
                                        <i
                                            className={`fa fa-trash`}
                                            aria-hidden="true"
                                        />
                                    </button>
                                        <button
                                            type={'button'}
                                            className="button"
                                            onClick={this.toggleContent}>
                                            <i
                                                className={`fa ${this.state.show ? 'fa-window-minimize' : 'fa-window-maximize '}`}
                                                aria-hidden="true"
                                            />
                                        </button>
                                </div>}
                            </div>

                            <div style={{display: this.state.show ? 'block' : 'none'}}>
                                {content}
                            </div>
                        </div>
                    </Connect>
                </div>
            </Draggable>
        )
    }
}
