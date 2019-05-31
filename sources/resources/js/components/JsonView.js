import React from 'react';
import {JSONEditor} from 'react-json-editor-viewer';
import {cloneDeep, map} from 'lodash';
import Editor from "./Editor";

export default class JsonView extends React.Component {
    state = {
        config: JSON.parse(this.props.config),
    };

    constructor(){
        super(...arguments);

        this.onJsonChange = this.onJsonChange.bind(this);
        this.changeEditor = this.changeEditor.bind(this);
    }

    onJsonChange (key, value, parent, data) {
        this.setState({
            config: data,
        });
    }
    changeEditor (key) {
        return (value) => {
            let config = cloneDeep(this.state.config);
            config[key] = value;
            this.setState({
                config
            })
        }

    }

    render() {
        return (
            this.props.aseditor ?
                <div>
                            <input name="data" type="text" hidden value={JSON.stringify(this.state.config)}/>
                    {map(this.state.config, (value, key) => {
                        return (
                            <div>
                                {key}
                                <Editor key={key} onChange={this.changeEditor(key)} value={value}/>
                            </div>
                        )

                    })}
                </div>
                    :<div className="json-view">
                        <input name="data" type="text" hidden value={JSON.stringify(this.state.config)}/><JSONEditor
                    data={this.state.config}
                    collapsible
                    onChange={this.onJsonChange}
                /></div>

        );
    }
}
