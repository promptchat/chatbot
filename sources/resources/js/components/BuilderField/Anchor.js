import React, {Fragment} from  'react';
import MS_EDGE_WRAPPER from "../../MS_EDGE_WRAPPER";


export default  class Anchor extends React.Component {

    get d() {
        const HEADER_HEIGHT = 0;
        const RIGHT_BAR_WIDTH = 285;

        const DELTA  = 12;
        const PATH_LEFT = 1;
        const PATH_RIGHT = 2;
        const PATH_TOP = 3;
        const PATH_BOTTOM = 4;
        let sourceRect = MS_EDGE_WRAPPER(this.props.source.getBoundingClientRect());
        let targetRect = MS_EDGE_WRAPPER(this.props.target.getBoundingClientRect());
        let wrapperRect = MS_EDGE_WRAPPER(this.props.getWrapper().getBoundingClientRect());


        const a = {
            x: sourceRect.x + this.props.scroll.x - wrapperRect.x - RIGHT_BAR_WIDTH,
            y: sourceRect.y + this.props.scroll.y - wrapperRect.y - HEADER_HEIGHT,
            width: sourceRect.width,
            height: sourceRect.height,
        };
        const b = {
            x: targetRect.x +this.props.scroll.x - wrapperRect.x - RIGHT_BAR_WIDTH,
            y: targetRect.y + this.props.scroll.y - wrapperRect.y - HEADER_HEIGHT,
            width: targetRect.width,
            height: targetRect.height,
        };


        const axMiddle = a.x   + a.width/2;
        const ayMiddle = a.y   + a.height/2;

        const bxMiddle = b.x   + b.width/2;
        const byMiddle = b.y   + b.height/2;

        // 16 outs
        const leftDelta = axMiddle  - bxMiddle;
        const topDelta = ayMiddle -  byMiddle;

        const A = {
            top: {
                x: axMiddle,
                y: a.y
            },
            bottom: {
                x: axMiddle,
                y: a.y + a.height
            },
            left: {
                x: a.x,
                y: ayMiddle
            },
            right: {
                x: a.x + a.width,
                y: ayMiddle
            }

        };

        const B = {
            top: {
                x: bxMiddle,
                y: b.y  - DELTA
            },
            bottom: {
                x: bxMiddle,
                y: b.y + b.height  + DELTA
            },
            left: {
                x: b.x  - DELTA,
                y: byMiddle
            },
            right: {
                x: b.x + b.width  + DELTA,
                y: byMiddle
            }
        };

        let paths = [];
        // 4 outs
        if(leftDelta > 0) {
            if(topDelta > 0) {
                paths =  [
                    [A.top, B.right, PATH_RIGHT],
                    [A.top, B.bottom, PATH_BOTTOM],
                    [A.left, B.right, PATH_RIGHT],
                    [A.left , B.bottom, PATH_TOP],
                ]
            } else {
                paths =  [
                    [A.bottom, B.right, PATH_RIGHT],
                    [A.bottom, B.top, PATH_TOP],
                    [A.left, B.right, PATH_RIGHT],
                    [A.left, B.top, PATH_TOP],
                ]
            }
        } else {
            if(topDelta > 0) {
                paths =  [
                    [A.top, B.left, PATH_LEFT],
                    [A.top, B.bottom, PATH_BOTTOM],
                    [A.right, B.left, PATH_LEFT],
                    [A.right, B.bottom, PATH_BOTTOM],
                ]
            } else {
                paths =  [
                    [A.bottom, B.left, PATH_LEFT],
                    [A.bottom, B.top, PATH_TOP],
                    [A.right, B.left, PATH_LEFT],
                    [A.right, B.top, PATH_BOTTOM],
                ]
            }
        }



        const pow =  Math.pow;
        const distance = (a,b) => Math.sqrt(pow(a.x - b.x, 2) + pow(a.y - b.y, 2));

        const [SOURCE, TARGET, PATH] = paths.sort((a,b) => distance(...a) - distance(...b))[0];
        const CURVE = 80;
        
        let middle = {
            'top': (SOURCE.y + TARGET.y)/2,
            'left': (SOURCE.x + TARGET.x)/2,
        };

        const leftPath = () =>
            `M ${SOURCE.x},          ${SOURCE.y} 
                 C ${SOURCE.x + CURVE},  ${SOURCE.y} 
                   ${TARGET.x - CURVE},  ${TARGET.y} 
                   ${TARGET.x},          ${TARGET.y}`;

        const rightPath = () =>
            `M ${SOURCE.x},          ${SOURCE.y} 
                 C ${SOURCE.x - CURVE},  ${SOURCE.y} 
                   ${TARGET.x + CURVE},  ${TARGET.y} 
                   ${TARGET.x},          ${TARGET.y}`;

        const topPath = () =>
            `M ${SOURCE.x},          ${SOURCE.y} 
                 Q ${SOURCE.x - CURVE},  ${SOURCE.y} 
                   ${TARGET.x},          ${TARGET.y}`;

        const bottomPath = () =>
            `M ${SOURCE.x},          ${SOURCE.y} 
                 Q ${SOURCE.x +  CURVE}, ${SOURCE.y} 
                   ${TARGET.x},          ${TARGET.y}`;


        let d;

        switch (PATH) {
            case PATH_LEFT:

                d  = leftPath();
                break;
            case PATH_RIGHT:

                d  = rightPath();
                break;
            case PATH_TOP:
                middle.left-=CURVE/2;
                d  = topPath();
                break;
            case PATH_BOTTOM:

                d  = bottomPath();
                break;
        }

        return {d, middle};

    }


    render() {
        let {d, middle}  = this.d;
        return (
            <Fragment>

                <svg xmlns="http://www.w3.org/2000/svg"   style={{position:'absolute', width: "100%", height: "100%"}} >
                    <defs >
                        <marker fill={"#126d88"}  id="arrowhead" viewBox="0 0 10 10" refX="3" refY="5"
                                markerWidth="6" markerHeight="6" orient="auto">
                            <path  d="M 0 0 L 10 5 L 0 10 z" />
                        </marker>
                    </defs>
                    <g fill="none" stroke="#126d88" strokeWidth="2" markerEnd="url(#arrowhead)">
                        <path  d={d}/>

                    </g>

                </svg>
                {this.props.onRemove && <button onClick={this.props.onRemove} className={'remove-anchor'} style={middle}><i className={'fa fa-trash'} /></button>}
            </Fragment>
        )
    }
}