import React from 'react';
import axios from "axios";
import Creatable from "react-select/lib/Creatable";

export default class MarkCreator extends React.Component {
    constructor(props) {
        super(...arguments);
        this.updateMarks = this.updateMarks.bind(this);
    }

    state = {
        marks: JSON.parse(this.props.marks).map((mark) => ({label: mark, value:mark})),
        marksList: JSON.parse(this.props.marks_list).map(({name}) => ({label: name, value:name}))
    };


    static defaultProps = {
        marks: "[]"
    };

    getData() {
        return this.state.marks.map(({value}) => value);
    }

    updateMarks(marks) {
        this.setState({marks});
    }

    render() {
        return (
            <div>
                <Creatable className="p-3"
                           value={this.state.marks}
                           options={
                               this.state.marksList
                           }
                           onChange={this.updateMarks}
                           isMulti
                           isCreatable
                />
            </div>
        )
    }
}
