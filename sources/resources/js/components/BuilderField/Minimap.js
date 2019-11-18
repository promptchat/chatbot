import React, {Component} from 'react'
import Draggable from "react-draggable";
import {CustomInput} from "reactstrap";

const SIZE = 200;
export default class Minimap extends Component {
    constructor() {
        super(...arguments);
        this.onControlledDrag = this.onControlledDrag.bind(this);
        this.handleMapClick = this.handleMapClick.bind(this);
    }

    componentDidMount() {
        window.addEventListener('mouseup', () => this.setState({}))
    }

    handleMapClick(e) {
        let target = e.target;
        if(target !== this.rect) {
            let wrapRect = e.target.getBoundingClientRect();
            let rect = this.rect.getBoundingClientRect();
            let x = e.clientX - wrapRect.left - rect.width/2; //x position within the element.
            let y = e.clientY - wrapRect.top - rect.height/2;  //y position within the element.
            this.onControlledDrag(e, {x, y})
        }
    }
    onControlledDrag(e, position) {
        const {x,y} = position;
        let {wrapper, builder} = this.props;
        let builderRect = builder.getBoundingClientRect();
        let wrapperRect = wrapper.getBoundingClientRect();


        let height = Math.min(SIZE * wrapperRect.height/builderRect.height, SIZE);
        let width = Math.min(SIZE * wrapperRect.width/builderRect.width, SIZE);

        wrapper.scrollTop =wrapper.scrollHeight * (y + height) / SIZE - wrapper.clientHeight - 10;
        wrapper.scrollLeft =wrapper.scrollWidth * (x + width) / SIZE - wrapper.clientWidth - 10;
    }

    render() {
        let {wrapper, builder} = this.props;
        let builderRect = builder.getBoundingClientRect();
        let wrapperRect = wrapper.getBoundingClientRect();
        let wrapperHeight = wrapper.scrollHeight - wrapper.clientHeight;
        let wrapperWidth = wrapper.scrollWidth - wrapper.clientWidth;

        let height = Math.min(SIZE * wrapperRect.height/builderRect.height, SIZE);
        let width = Math.min(SIZE * wrapperRect.width/builderRect.width, SIZE);

        return (<div style={{    position: 'fixed',
            bottom: 20,
            right: 20,
            zIndex: 5000,}}>
            <div style={{
                color: 'white',
                padding: 10,
                backgroundColor: 'rgba(0,0,0,.7)',
            }}>
            <div>Zoom: <span className={'pull-right'}>{`${this.props.scale}%`}</span></div>
            <CustomInput id={'zoom'} type="range"  min={1}
                         max={100}

                         onChange={this.props.onScaleChange}
                         value={this.props.scale}/>
            </div>
            <div style={{
                backgroundColor: 'rgba(0,0,0,.5)',
                position: 'relative',
                width: SIZE,
                height: SIZE,
        }}
        onMouseDown={this.handleMapClick}
        >


            <Draggable
                // scale={this.props.scale/100}
                bounds="parent"
                // handle=".header"
                onDrag={this.onControlledDrag.bind(this)}
                position={{
                    y: wrapper.scrollTop ? (SIZE - height) * wrapper.scrollTop / wrapperHeight : 0,
                    x: wrapper.scrollLeft ? (SIZE - width) * wrapper.scrollLeft / wrapperWidth : 0
                }}

            >
            <div
                ref={(ref) => this.rect = ref}
                style={{
                border: "1px solid rgb(0, 231, 255)",
                width: width,
                height: height,
                position: 'absolute',
                backgroundColor: "rgba(0, 231, 255, 0.3)",
                zIndex: 20,
            }}/>
            </Draggable>
            {
                this.props.getBlocks().map(({id, position}) => {
                    return <div key={id} style={{
                        backgroundColor: 'white',
                        border: '1px dashed blue',
                        width: 7,
                        height: 7,
                        position: 'absolute',
                        left: position.x/6000*(SIZE - 7),
                        top: position.y/6000*(SIZE - 7)
                    }}>

                    </div>
                })
            }
        </div></div>)
    }
}
