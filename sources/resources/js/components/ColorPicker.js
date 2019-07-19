import React, {PureComponent, Fragment} from 'react'
import {CompactPicker} from "react-color";

export default class ColorPicker extends PureComponent {
    state = {
        open: false,
    }

    render() {
        return (
            <Fragment>
                <input type="hidden" value={this.props.value} name={this.props.name}/>
                <div onClick={() => this.setState(({open}) => ({open: !open}))}
                      style={{
                          width: 30, height: 30, backgroundColor: this.props.value,
                          border: '1px solid rgba(0, 0, 0, 0.38)', cursor: 'pointer'
                      }}/>
                {this.state.open && <CompactPicker
                    color={this.props.value}
                    onChangeComplete={this.props.onChange}
                />}
            </Fragment>
        )
    }
}