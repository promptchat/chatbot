import React from 'react'
import ButtonCreation from "./ButtonCreation";
import {find, cloneDeep, remove, uniqueId, get, filter, countBy} from 'lodash'
import TemplatesLoader from "./TemplatesLoader";
import {TYPE_API_CONTENT, TYPE_CALENDAR, TYPE_QUESTION, TYPE_SELECT} from "../../../help/buttonTypes";
import MarkCreator from "../../MarkCreator";
import axios from "axios";
import SweetAlert from "react-bootstrap-sweetalert"

const STEP_INIT = 1;
const STEP_BUTTON_CREATION = 2;
const STEP_TEMPLATES = 3;


export default class RightBar extends React.PureComponent {
    state = {
        step: STEP_INIT,
        templateId: null,
    };

    constructor() {
        super(...arguments);
        this.startButtonCreation = this.startButtonCreation.bind(this);
        this.onBlockChange = this.onBlockChange.bind(this);
        this.stopButtonCreation = this.stopButtonCreation.bind(this);
        this.startTemplates = this.startTemplates.bind(this);
        this.setData = this.setData.bind(this);
        this.stopTemplates = this.stopTemplates.bind(this);
        this.createTemplate = this.createTemplate.bind(this);
        this.confirmAlert = this.confirmAlert.bind(this);
    }

    setData({blocks, anchors}) {
        let variables = countBy(blocks.map(({data: {variable}}) => variable).filter((variable) => (variable)));
        this.props.setBlocks(blocks, anchors, variables);
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
        let blocks = this.props.getBlocks();
        let block = find(blocks, {id: this.props.blockUpdate});

        let newAnchors = null;
        let newVariables = null;

        if (!block) {
            let lastBlock = blocks[blocks.length - 1];
            block = {
                type,
                id: uniqueId('block-'),
                show: true,
                position: {x: lastBlock.position.x + 20, y: lastBlock.position.y + 20}
            };
            blocks.push(block);
        }


        if (block.variable || data.variable) {
            newVariables = cloneDeep(this.props.getVariables());
            if (block.variable) {
                newVariables[block.variable]--;
            }
            if (data.variable) {
                newVariables[data.variable] = -~newVariables[data.variable];
            }
        }
        if (type === TYPE_API_CONTENT) {
            let oldLength = get(data, 'buttons', []).length === 0;
            let newLength = get(block, 'data.buttons', []).length === 0;
            if (oldLength !== newLength) {
                let anchors = cloneDeep(this.props.getAnchors());
                remove(anchors, {source: this.props.blockUpdate});
                newAnchors = anchors
            }
        }

        block.data = data;

        this.props.setBlocks(blocks, newAnchors, newVariables);
        this.stopButtonCreation();
    }

    confirmAlert() {
        window.location = `/templates/${this.state.templateId}/edit`
    }

    createTemplate() {
        let chat = this.props.getBlocks()
        let relations = this.props.getAnchors()
        let name = this.props.name

        axios.post('/templates', {
            name, chat, relations
        }).then((response) => {
            this.setState({templateId: response.data.id})
        })
    }

    render() {
        const block = this.props.blockUpdate ? find(this.props.getBlocks(), {id: this.props.blockUpdate}) : null;
        const step = block ? STEP_BUTTON_CREATION : this.state.step;


        return (
            <div className="right-bar">
                <SweetAlert
                    success
                    show={!!this.state.templateId}
                    title={window.translates.saved}
                    onConfirm={this.confirmAlert}
                >
                    {window.translates.template_redirect}
                </SweetAlert>
                <div className="top-block">
                    <a href={this.props.url} className="back-link">
                        <i className="fa fa-arrow-left" aria-hidden="true"></i>
                    </a>
                    <img className={'logo'} src={this.props.logo} alt=""/>
                </div>
                <div className="configs" data-simplebar>
                    <div className="navigation-label">{window.translates.create_block}</div>
                    <ButtonCreation
                        variables={this.props.getVariables()}
                        isCreation={step === STEP_BUTTON_CREATION}
                        onCancel={this.stopButtonCreation}
                        onBlockChange={this.onBlockChange}
                        block={block}
                        startButtonCreation={this.startButtonCreation}
                    />
                    <div className="navigation-label">{window.translates.template}</div>
                    <a
                        className="menu-item"
                        onClick={this.startTemplates}

                    ><i className={`button-icon fa fa-download`}
                        aria-hidden="true"/>{window.translates.load_from_template}</a>
                    {
                        step === STEP_TEMPLATES && <TemplatesLoader
                            onCancel={this.stopTemplates}
                            setData={this.setData}
                        />
                    }
                    {this.props.saveAsTemplate && <a className="menu-item" onClick={this.createTemplate}>
                        <i className={'button-icon fa fa-upload'}/>
                        {window.translates.save_as_template}
                    </a>}
                    <div className="navigation-label">{window.translates.configs}</div>
                    {this.props.chatConfig}
                </div>
            </div>
        )
    }

}
