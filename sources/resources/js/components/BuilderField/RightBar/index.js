import React from 'react'
import ButtonCreation from "./ButtonCreation";
import {find, cloneDeep, remove, uniqueId} from 'lodash'
import TemplatesLoader from "./TemplatesLoader";
import {TYPE_CALENDAR, TYPE_QUESTION, TYPE_SELECT} from "../../../help/buttonTypes";

const STEP_INIT = 1;
const STEP_BUTTON_CREATION = 2;
const STEP_TEMPLATES = 3;


export default class RightBar extends React.PureComponent {
    state = {
        step: STEP_INIT,
    };

    constructor() {
        super(...arguments);
        this.startButtonCreation = this.startButtonCreation.bind(this);
        this.onBlockChange = this.onBlockChange.bind(this);
        this.stopButtonCreation = this.stopButtonCreation.bind(this);
        this.startTemplates = this.startTemplates.bind(this);
        this.setData = this.setData.bind(this);
        this.stopTemplates = this.stopTemplates.bind(this);
    }

    setData({blocks, anchors}) {
        this.props.setBlocks(blocks);
        this.props.setAnchors(anchors);
        this.stopButtonCreation();
    }

    startButtonCreation() {
        this.setState({step: STEP_BUTTON_CREATION});
    }
    stopButtonCreation() {
        this.setState({step: STEP_INIT});

        this.props.onBlockStopUpdate();
    }
    startTemplates() {
        this.setState({step: STEP_TEMPLATES});
    }
    stopTemplates() {
        this.setState({step: STEP_INIT});
    }

    onBlockChange(data, type) {
        let blocks = cloneDeep(this.props.getBlocks());
        let block = find(blocks, {id: this.props.blockUpdate});
        if(!block) {
            let lastBlock = blocks[blocks.length - 1];
            block = {
                type,
                id: uniqueId('block-'),
                show: true,
                position: {x: lastBlock.position.x + 20, y:lastBlock.position.y + 20}
            };
            blocks.push(block);
        }
        block.data = data;

        this.props.setBlocks(blocks);
        this.stopButtonCreation();
    }

    render() {
        const block = this.props.blockUpdate ? find(this.props.getBlocks(), {id: this.props.blockUpdate}) : null;
        const step = block ? STEP_BUTTON_CREATION : this.state.step;




        return (
            <div className="right-bar">
                <div className="top-block">
                    <a href="/chats" className="back-link">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </a>
                    <img className={'logo'} src={this.props.logo} alt=""/>
                </div>
                <div className="configs" data-simplebar>
                    <div className="navigation-label">{window.translates.create_block}</div>
                    <ButtonCreation
                        isCreation={step === STEP_BUTTON_CREATION}
                        onCancel={this.stopButtonCreation}
                        onBlockChange={this.onBlockChange}
                        block={block}
                        startButtonCreation={this.startButtonCreation}
                    />
                    <div className="navigation-label">Template</div>
                    <a
                        className="menu-item"
                        onClick={this.startTemplates}

                    ><i className={`button-icon fa fa-download`} aria-hidden="true" />{window.translates.load_from_template}</a>
                    {
                        step===STEP_TEMPLATES && <TemplatesLoader
                            onCancel={this.stopTemplates}
                            setData={this.setData}
                        />
                    }
                    <div className="navigation-label">Chat configs</div>
                    {this.props.chatConfig}
                </div>
            </div>
        )
    }

}
