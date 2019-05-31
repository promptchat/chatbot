import React from 'react';
import Tree from 'react-d3-tree';
import {cloneDeep} from 'lodash';

const QUESTION = "1";
const ANSWER = "2";
const USER_INPUT = "3";
const CREATE_QUESTION = "4";
const CREATE_ANSWER = "5";
class NodeLabel extends React.PureComponent {

    render() {
        const {nodeData} = this.props;
        switch (nodeData.type) {
            case QUESTION:
                return (
                    <div className="label">
                        <div className="inc">
                            <div className="header">Chatbot says...</div>
                            <div title={nodeData.name} onClick={this.props.onChangeText(nodeData)} className="body">
                                {nodeData.name ? nodeData.name : <span>Click to edit...</span>}
                            </div>
                        </div>
                    </div>
                );
            case ANSWER:
                return (
                    <div className="label">
                        <div className="out">
                            <div className="header">Visitor select</div>
                            <div title={nodeData.name} onClick={this.props.onChangeText(nodeData)} className="body">
                                {nodeData.name ? nodeData.name : <span>Click to edit...</span>}
                            </div>
                        </div>
                    </div>);
            case USER_INPUT:
                return (
                    <div className="label">
                        <div className="out">
                            <div onClick={this.props.onChangeVariable(nodeData)} className="header">Visitor answer ({nodeData.variable})</div>
                            <div title={nodeData.name} onClick={this.props.onChangeText(nodeData)} className="body">
                                {nodeData.name ? nodeData.name : <span>Click to edit...</span>}
                            </div>
                        </div>
                    </div>);
            case CREATE_QUESTION:
                return (
                    <div className="label create">

                        <button onClick={this.props.onCreateAnswer(nodeData)}>Create answer</button>

                    </div>
                );
            case CREATE_ANSWER:
                return (
                    <div className="label create">
                        <button onClick={this.props.onCreateQuestion(nodeData)}>Create question</button>
                    </div>
                )
        }


    }
}



export default class TreeBuilder extends React.PureComponent {
    state = {
        showTemplates: false,
        fullScreen: false,
        wasChanged: !!this.props.data,
        onCreate : true,
        zoom: 1,
        translate: {
            x: this.baseTranslateX ,
            y: 50
        },
        'data': this.props.data || [
            {
                name: '',
                type: QUESTION,

                children: [
                ],
            }],
    };

    static defaultProps = {
        translateX: 420
    };

    get baseTranslateX() {
        const translateX = this.props.translateX;
        const innerWidth = window.innerWidth;

        return innerWidth < translateX * 2  ?
            innerWidth / 2 - 70 + (500-translateX)/2 :
            translateX
    }

    constructor(props) {
        super(props);
        this.toggleShowTemplates = this.toggleShowTemplates.bind(this);
    }

    createObject(type) {
        return {type, children: [], name:''}
    }

    getData() {
        return this.state.wasChanged ? this.state.data: false;
    }

    formatData() {
        let data  = cloneDeep(this.state.data);
        let root = data.pop();
        this.generateChild(root);
        return [root]
    }

    componentDidUpdate() {

        if(this.state.fullScreen) {
            document.body.classList.add('tree-full-screen');
        } else {
            document.body.classList.remove('tree-full-screen');
        }
    }



    generateChild(node, level = '0') {

        node.level = level;
        if(typeof  node.children === 'undefined') {
            node.children  = [];
        }
        if(node.type === QUESTION) {
            if(node.children.length ===0 || node.children[0].type !== USER_INPUT) {
                node.children.push(this.createObject(CREATE_QUESTION))
            }
        }

        if((node.type === ANSWER || node.type === USER_INPUT)   && node.children.length === 0) {
            node.children.push(this.createObject(CREATE_ANSWER))
        }


        level += '.';
        node.children.forEach((child, i) => {
            this.generateChild(child, level + i)
        })
    }

    onChangeText(nodeData) {
        return () => {
            let data = cloneDeep(this.state.data);
            let {level} = nodeData;

            let element = this.getByLevel(data, level);
            window.customPrompt("Enter text", element.name).then(
                (newText) => {
                    if(newText !== element.name ) {
                        element.name = newText;
                        if(this.props.onChange) {
                            this.props.onChange(data)
                        }
                        this.setState({data, onCreate: false, wasChanged: true});
                    }
                }
            )


        }
    }

    onChangeVariable(nodeData) {
        return () => {
            let data = cloneDeep(this.state.data);
            let {level} = nodeData;

            let element = this.getByLevel(data, level);
            window.customPrompt("Enter variable name", element.variable).then(
                (newText) => {
                    if(newText !== element.variable ) {
                        element.variable = newText;
                        if(this.props.onChange) {
                            this.props.onChange(data)
                        }
                        this.setState({data, onCreate: false, wasChanged: true});
                    }
                }
            )


        }
    }

    onCreateAnswer(nodeData) {


        return () => {
            let {level} = nodeData;
            let levels = level.split`.`;
            let currentNode = levels.pop();
            let parentLevel = levels.join`.`;
            let data = cloneDeep(this.state.data);
            let parent =  this.getByLevel(data, parentLevel);

            let createAnswer = (v) => {
                v = v.toString();




                window.customPrompt(v === USER_INPUT ? "Enter question" : "Enter button value", '').then(
                    async (text) => {

                        let obj = this.createObject(v);
                        obj.name = text;

                        if (v === USER_INPUT) {
                            obj.variable = await window.customPrompt("Enter variable name", '');
                        }

                        parent.children.push(obj);
                        if (this.props.onChange) {
                            this.props.onChange(data)
                        }
                        this.setState({data, onCreate: true, wasChanged: true});


                    }
                )

            };

            if(parent.children.length > 0) {
                createAnswer(ANSWER);
            } else {
                window.customSelect('Select type',
                    [{id: USER_INPUT, name: 'User input'},
                        {id: ANSWER, name:'Button'}]
                ).then(createAnswer)
            }

        }
    }

    onCreateQuestion(nodeData) {
        return () => {
            let data = cloneDeep(this.state.data);
            let {level} = nodeData;
            let levels = level.split`.`;
            let currentNode = levels.pop();
            let parentLevel = levels.join`.`;



            window.customPrompt("Enter text", '').then(
                (text) => {

                    let obj = this.createObject(QUESTION);
                    obj.name = text;

                    this.getByLevel(data, parentLevel).children.push(obj);
                    if (this.props.onChange) {
                        this.props.onChange(data)
                    }
                    this.setState({data, onCreate: true, wasChanged: true});


                }
            )


        }
    }

    getByLevel(data, level) {
        let levels = level.split`.`;

        if(levels.length === 1) {
            return data[level];
        }


        return this.getByLevel(data[levels.shift()].children, levels.join`.`)
    }

    toggleShowTemplates() {
        this.setState({showTemplates: !this.state.showTemplates, onCreate: false});
    }

    render() {
        return (

            <div className={`tree ${this.state.fullScreen ? 'full-screen' : ''}`} id="treeWrapper">
                <div className="tree-header">
                    <button type={'button'} className={'template-toggle'} onClick={this.toggleShowTemplates}>Templates <i className={'fa fa-caret-down '}/></button>
                    {this.state.showTemplates && <ul className={'templates-select'} >
                        <li onClick={() => {}}>Template 1</li>
                        <li onClick={() => {}}>Template 2 </li>
                    </ul> }
                    <button type={'button'} className="screens-size" onClick={() => this.setState({
                        translate: {
                            x: this.state.fullScreen  ? this.baseTranslateX : window.innerWidth /2,
                            y: 50
                        },
                        onCreate: false,
                        zoom: 1,
                        fullScreen: !this.state.fullScreen
            })}>  <i className={`fa ${this.state.fullScreen ? 'fa-window-minimize' : 'fa-window-maximize '}`} aria-hidden="true" /></button>
                </div>
                <Tree
                    // pathFunc={(d,i) => {
                    //     return "M" + d.source.x +"," + d.source.y
                    //     + "V" + d.target.y + "H" + d.target.x;
                    // }}
                    allowForeignObjects
                    transitionDuration={this.state.onCreate ? 500 : 0}
                    nodeLabelComponent={{
                        render: <NodeLabel
                            onCreateAnswer={this.onCreateAnswer.bind(this)}
                            onCreateQuestion={this.onCreateQuestion.bind(this)}
                            onChangeText={this.onChangeText.bind(this)}
                            onChangeVariable={this.onChangeVariable.bind(this)}
                        />,
                        foreignObjectWrapper: {
                            y: 0,
                            x: -95,
                        }
                    }}
                    styles={{links: {
                        stroke: '#ccc',
                        strokeWidth: "1px",
                    }}}
                    separation={{siblings: 2, nonSiblings: 2}}
                    nodeSvgShape={{shape: 'none'}}
                    nodeSize={{x: 215, y: 170}}
                    zoom={this.state.zoom}
                    translate={this.state.translate}
                    onUpdate={({zoom, translate}) => {
                        if(this.state.zoom !== zoom || JSON.stringify(this.state.translate) !== JSON.stringify(translate)) {
                            this.setState({
                                zoom,
                                translate,
                                onCreate: false,
                            })
                        }
                    }}
                    collapsible={false}
                    onClick={(nodeObj,e) => {
                        e.persist();
                        nodeObj._collapsed= !nodeObj._collapsed
                    }
                    }
                    orientation={'vertical'}
                    data={this.formatData()}
                />
            </div>
        );
    }
}
