import React from 'react';

import Anchor from './Anchor'
import Block from './Block'
import {clone, cloneDeep, remove, uniqBy, uniqueId, find, each} from 'lodash'
import MS_EDGE_WRAPPER from "../../MS_EDGE_WRAPPER";

class MouseRect {
    event;
    getScroll;
    initScroll;
    initWrapperScroll;
    getWrapperScroll;
    init = true;

    constructor(event, getScroll = () => ({x: 0, y: 0}), getWrapperScroll = () => ({x: 0, y: 0})) {
        event.persist();
        this.event = event;
        this.getScroll = getScroll;
        this.initScroll = getScroll();
        this.initWrapperScroll = getWrapperScroll();
        this.getWrapperScroll = getWrapperScroll;
    }

    getBoundingClientRect() {
        let initScroll = this.initScroll;
        let currentScroll = this.getScroll();
        let wrapperScroll = this.initWrapperScroll;
        let currentWrapperScroll = this.getWrapperScroll();

        return {
            x: this.event.clientX - currentScroll.x + initScroll.x +currentWrapperScroll.x - wrapperScroll.x,
            y: this.event.clientY - currentScroll.y + initScroll.y +currentWrapperScroll.y - wrapperScroll.y,
            width:0,
            height:0
        }
    }
}


export default class Builder extends React.Component {
    hover = null;
    state =  {
        anchors: uniqBy(this.props.anchors.reverse(), 'source'),
        blockSizes: {},
        draw: false,
        drawStart: {},
        drawEnd: {},
        startConnect: null,
    };

    blocks = {};

    static defaultProps = {
        anchors: [],
        blocks: []
    };

    onMouseDown(e, startConnect) {
        e.persist();
        this.setState({
            startConnect,
            draw: true,
            drawStart: new MouseRect(e, () => this.props.scroll, () => MS_EDGE_WRAPPER(this.props.getWrapper().getBoundingClientRect())),
            drawEnd: new MouseRect(e)
        });

    }

    onMouseMove(e) {
        if(this.state.draw) {
            e.persist();
            this.setState({
                drawEnd: new MouseRect(e)
            });
        }

    }
    setAnchors(anchors) {
        this.setState({anchors})
    }

    onMouseUp(e) {
        if(this.state.draw) {

            let anchors  = this.state.anchors;

            if(this.hover !== null) {
                if(!Array.isArray(this.hover)) {
                    this.hover = [this.hover]
                }

                if (!this.hover.some((el) => this.state.startConnect === el)) {
                    anchors.push({source: this.state.startConnect, target: this.hover.shift()});
                    anchors = uniqBy(anchors.reverse(), 'source')
                }
            }
            this.setState({
                draw:false,
                anchors: anchors
            });
        }
    }

    onCopy(copyId, position) {
        let element =  find(this.props.blocks, {id: copyId});
        let copy = cloneDeep(element);
        copy.position = {
            x: position.x + 50,
            y: position.y + 50
        };
        copy.show = true;
        copy.id = uniqueId('new-');

        let blocks = cloneDeep(this.props.blocks);
        each(copy.data.buttons, (child) => {
            child.id = uniqueId('child-')
        });

        blocks.push(copy);
        this.props.setBlocks(blocks);
    }

    onHover(hover) {
        if(this.state.draw) {
            this.hover = hover
        }
    }

    constructor() {
        super(...arguments);
        this.onBlockBuild = this.onBlockBuild.bind(this);
        this.onMouseUp = this.onMouseUp.bind(this);
        this.onMouseMove = this.onMouseMove.bind(this);
        this.onMouseDown = this.onMouseDown.bind(this);
        this.onHover = this.onHover.bind(this);
        this.onRemove = this.onRemove.bind(this);
        this.onCopy = this.onCopy.bind(this);
        this.removeAnchor = this.removeAnchor.bind(this);
    }

    onBlockBuild(blockId, rect) {
        this.setState((state) => {
            let blockSizes = clone(state.blockSizes);
            blockSizes[blockId] = rect;
            state.blockSizes = blockSizes;
            return state;
        });
    }

    onRemove(blockId, children) {
        let blocks = cloneDeep(this.props.blocks);
        remove(blocks, (block) => block.id === blockId);
        let blockSizes = cloneDeep(this.state.blockSizes);
        blockSizes[blockId] = null;
        for(let child of children) {
            blockSizes[child] = null;
        }
        this.props.setBlocks(blocks);
        this.setState({ blockSizes});
    }
    removeAnchor(target,source) {
        let anchors = cloneDeep(this.state.anchors);
        remove(anchors, (anchor) => anchor.target === target && anchor.source === source);

        this.setState({ anchors});
    }

    getBlocks() {
        return this.blocks
    }

    getAnchors() {
        return this
            .state
            .anchors;
    }

    render() {
        return (
            <div style={{position:'relative', width:"100%", height: "100%"}} onMouseMove={this.onMouseMove} onMouseUp={this.onMouseUp}>
                {
                    this
                        .state
                        .anchors
                        .filter(
                            ({target, source}) =>
                                this.state.blockSizes[target]
                                && this.state.blockSizes[source]
                        )
                        .map(
                            ({target, source}) =>
                                <Anchor scale={this.props.scale} onRemove={() => this.removeAnchor(target,source)} getWrapper={this.props.getWrapper} scroll={this.props.scroll} key={[target,source].join('-')} target={this.state.blockSizes[target]} source={this.state.blockSizes[source]} />
                        )
                }
                {
                    this.state.draw && <Anchor  scale={this.props.scale}  getWrapper={this.props.getWrapper} scroll={this.props.scroll} source={this.state.drawStart} target={this.state.drawEnd}  />
                }
                {
                    this
                        .props
                        .blocks
                        .map(
                            (block) =>
                                <Block
                                    scale={this.props.scale}
                                    ref={(ref) => this.blocks[block.id] = ref}
                                    onBlockUpdate={this.props.onBlockUpdate}
                                    isConnectable={block.isConnectable}
                                    getWrapper={this.props.getBuilderWrapper}
                                    startConnect={this.onMouseDown}
                                    onHover={this.onHover}
                                    show={block.show}
                                    key={block.id}
                                    data={block.data}
                                    type={block.type}
                                    header={block.header}
                                    position={block.position}
                                    id={block.id}
                                    onBuild={this.onBlockBuild}
                                    onRemove={this.onRemove}
                                    onCopy={this.onCopy}
                                />
                        )
                }

            </div>
        );
    }
}
