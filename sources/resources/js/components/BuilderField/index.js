import React from 'react';
import Builder from './Builder';
import RightBar from './RightBar';
import {TYPE_BUTTONS, TYPE_MESSAGE, TYPE_START} from "../../help/buttonTypes";
import {cloneDeep, countBy} from "lodash";
import Minimap from "./Minimap";
import MarkCreator from "../MarkCreator";


/**
 * @property [Builder] builder
 */
class BuilderField extends React.Component {
    _wrapper;
    _bilder;

    builder;

    state = {
        scale: 100,
        scroll: {x:0, y:0},
        ready: false,
        mapReady: false,
        showTemplates: false,
        fullScreen: true,
        blockUpdate: null,
        blocks: this.props.blocks,
        variables: countBy(this.props.blocks.map(({data: {variable}}) => variable).filter((variable) => (variable))),
        anchors: this.props.anchors
    };

    constructor() {
        super(...arguments);
        this.getWrapper = this.getWrapper.bind(this);
        this.getBuilderWrapper = this.getBuilderWrapper.bind(this);
        this.toggleFullScreen = this.toggleFullScreen.bind(this);
        this.setBlocks = this.setBlocks.bind(this);
        this.getVariables = this.getVariables.bind(this);
        this.getBlocks = this.getBlocks.bind(this);
        this.setAnchors = this.setAnchors.bind(this);
        this.getAnchors = this.getAnchors.bind(this);
        this.onBlockUpdate = this.onBlockUpdate.bind(this);
        this.onBlockStopUpdate = this.onBlockStopUpdate.bind(this);
    }

    static defaultProps = {
        width: "100vw",
        height: "100vh",
        blocks: [{
            id: 'START',
            type: TYPE_START,
            position: {
                x: 100,
                y: 100,
            },
            data: {}
        }],
        anchors: []
    };

    componentDidMount() {
        setTimeout(() => {
                this.setState({ready: true}, () => {
                    this.setState({mapReady: true})

                })
        }, 100);
    }

    getWrapper() {
        return this._wrapper;
    }
    getBuilderWrapper() {
        return this._builderWrapper;
    }
    onBlockUpdate(blockId) {
        this.setState({blockUpdate: blockId});
    }
    onBlockStopUpdate() {
        this.setState({blockUpdate: null});
    }

    setBlocks(blocks, anchors, variables) {
        let newState = {blocks};
        if(anchors) {
            newState.anchors = anchors;
            this.builder.setAnchors(anchors)
        }
        if(variables) {
            newState.variables = variables
        }
        this.setState(newState)
    }

    setAnchors(anchors) {
        this.setState({anchors});
        this.builder.setAnchors(anchors);
    }

    getAnchors() {
        return this.builder.getAnchors()
    }

    getVariables() {
        return this.state.variables
    }

    getData() {
        return [
            this.getBlocks(),
            this.getAnchors(),
        ]
    }

    getBlocks() {
        // this.state.block saves all data we need real position
        // for not every time updating
        // just synchronize ))
        let refBlocks =  this.builder.getBlocks() ;
        return cloneDeep(this.state.blocks).map((block) => {
            let refBlock = refBlocks[block.id];
            block.position = refBlock ? refBlock.state.position : block.position;
            block.show = refBlock ? refBlock.state.show : block.show;
            return block;
        });
    }

    toggleFullScreen() {
        this.setState({
            fullScreen: !this.state.fullScreen
        })
    }

    render() {
        let coef = .5 - this.state.scale / 200;
        return (
            <div className={`chatbot-builder ${this.state.fullScreen ? 'full-screen': ''}`} ref={(ref) => this._wrapper = ref} style={{
                width: this.state.fullScreen ? '100vw' : this.props.width,
                height: this.state.fullScreen ? '100vh' : this.props.height
            }}>
                {/*<div className="header" onDoubleClick={this.toggleFullScreen}>*/}

                    {/*/!*<button type={'button'} className={'template-toggle'} onClick={this.toggleShowTemplates}>Templates <i className={'fa fa-caret-down '}/></button>*!/*/}
                    {/*{this.state.showTemplates && <ul className={'templates-select'} >*/}
                        {/*<li onClick={() => {}}>Template 1</li>*/}
                        {/*<li onClick={() => {}}>Template 2 </li>*/}
                    {/*</ul> }*/}
                    {/*<div className="buttons-block">*/}
                        {/*<button type={'button'} className="button" onClick={this.toggleFullScreen}>  <i className={`fa ${this.state.fullScreen ? 'fa-window-minimize' : 'fa-window-maximize '}`} aria-hidden="true" />*/}
                        {/*</button>*/}
                    {/*</div>*/}
                {/*</div>*/}
                <RightBar
                    url={this.props.url}
                    logo={this.props.logo}
                    getBlocks={this.getBlocks}
                    setBlocks={this.setBlocks}
                    getAnchors={this.getAnchors}
                    getVariables={this.getVariables}
                    blockUpdate={this.state.blockUpdate}
                    onBlockStopUpdate={this.onBlockStopUpdate}
                    chatConfig={this.props.chatConfig}
                />


                {this.state.mapReady && <Minimap
                    scale={this.state.scale}
                    onScaleChange={(e) => this.setState({scale: e.target.value})}
                    builder={this._builder}
                    wrapper={this._builderWrapper}
                    getBlocks={this.getBlocks}
                    blockUpdate={this.state.blockUpdate}
                />}


                <div ref={(ref) => this._builderWrapper = ref} onScroll={(e) => this.setState({scroll: {y: e.target.scrollTop, x:e.target.scrollLeft}})} className={'builder-wrapper'} >


                    <div ref={(ref) => this._builder = ref} className="builder" style={{transform: `scale(${this.state.scale/100})`, position: 'absolute', marginLeft: -6000*coef, marginTop: -6000*coef}}>
                        {this.state.ready && <Builder
                            scale={this.state.scale}
                            ref={(ref) => this.builder=ref}
                            getWrapper={this.getWrapper}
                            getBuilderWrapper={this.getBuilderWrapper}
                            scroll={this.state.scroll}
                            blocks={this.state.blocks}
                            setBlocks={this.setBlocks}
                            onBlockUpdate={this.onBlockUpdate}
                            anchors={this.state.anchors}
                        />}
                    </div>
                </div>
            </div>
        );
    }
}

export default BuilderField;
