import InputMask from 'react-input-mask'
import React from "react";

export default class TimeInputMask extends React.Component {
    beforeMaskedValueChange = (newState, oldState) => {
        let {value, selection} = newState;
        value = value.split('');
        if (value[0] > 2) {
            value[1] = value[0];
            value[0] = 0;
            selection = {start: 3, end: 3};
        }

        if (+value[0] === 2 && value[1] > 3) {

            value[1] = 3;
        }

        return {
            value: value.join(''),
            selection
        };
    }

    render() {
        return <InputMask
            style={this.props.style}
            onChange={this.props.onChange}
            mask="99:59" maskChar={'0'}
            value={this.props.value}
            formatChars={{
                '9': '[0-9]',
                '5': '[0-5]',
                '2': '[0-2]',
                'a': '[A-Za-z]',
                '*': '[A-Za-z0-9]'
            }}
            beforeMaskedValueChange={this.beforeMaskedValueChange}
        />
    }
}