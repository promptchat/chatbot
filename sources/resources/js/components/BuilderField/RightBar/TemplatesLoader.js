import React, { Component } from 'react';
import axios from 'axios';
import Modal from "react-modal";

Modal.setAppElement('#app');
const customStyles = {
    overlay: {
        overflowX: 'hidden',
        overflowY: 'auto',
    },
    content : {
        position: 'relative',
        top: 'unset',
        left: 'unset',
        right: 'unset',
        bottom: 'unset'
    }
};
export default class TemplatesLoader extends  Component {
    state={
        templates: []
    };

    componentDidMount() {
        axios.get('/templates').then(({data}) => this.setState({templates: data}))
    }

    startLoad(id) {
        axios.get(`/templates/${id}`).then(({data}) => this.props.setData(data))
    }

    render() {
        return(
            <Modal
                isOpen={true}
                onRequestClose={() => {
                    this.props.onCancel()
                }}
                style={customStyles}
            >
                <div className="sub-configs">{this.state.templates.map((template) => (
            <a
                key={template.id}
                onClick={() => this.startLoad(template.id)}
                className="button"
            >
                <i className={`button-icon fa fa-${template.icon}`} aria-hidden="true" />
                {template.name}
            </a>
        ))}
        </div>
            </Modal>)
    }
}
