import React, {PureComponent} from 'react';
import {List, Map, fromJS} from 'immutable';
import CreatableSelect from 'react-select/lib/Creatable'
import axios from 'axios';
import {map, get} from "lodash";
import Collapsible from 'react-collapsible';
import {Controlled as CodeMirror} from 'react-codemirror2'
import "codemirror/mode/javascript/javascript"

const METHODS = [
    'GET', "POST", "PATCH", "PUT", "OPTIONS", "DELETE", "HEAD", "JSONP"
];

export default class ApiRequestEditor extends PureComponent {
    constructor(props) {
        super(props);
        this.addHeader = this.addHeader.bind(this);
        this.test = this.test.bind(this);
        this.getData = this.getData.bind(this);
        this.changeHandler = this.changeHandler.bind(this);

        let data = props.data;
        let value = data.method || 'GET';
        this.state = {
            result: null,
            errors: "",
            headers: fromJS(data.headers || []),
            method: value,
            url: data.url || '',
            params: fromJS(data.params || []),
            data: fromJS(data.data || []),
            handler: data.handler || ``,
        };


    }

    static defaultProps = {
        variables: []
    };


    getData() {
        return {
            url: this.state.url,
            headers: this.state.headers.toJS(),
            method: this.state.method,
            params: this.state.params.toJS(),
            data: this.state.data.toJS(),
        }
    }

    test() {
        this.setState({errors: "", result: null}, () => {
            let values = {
                data: {},
                params: {},
                all: {}
            };
            ['data', 'params'].forEach((paramKey) => {
                this.state[paramKey].forEach((variable) => {
                    let key = variable.get('key');
                    let value = variable.get('value');
                    if (typeof value === 'undefined') {
                        return;
                    }

                    if (value[0] === '@' && this.props.variables.includes(value.slice(1))) {
                        if (typeof values.all[key] === 'undefined') {
                            values.all[key] = prompt('Enter value for ' + value)
                        }
                        values[paramKey][key] = values.all[key]
                    } else {
                        values[paramKey][key] = value;
                    }
                });
            });

            axios.request({
                method: this.state.method,
                url: this.state.url,
                data: values.data,
                params: values.params,
                headers: Object.fromEntries(this.state.headers.map((header) => [header.get('key'), header.get('value')]).toArray())
            }).then(({data}) => {
                if (this.state.handler) {
                    data = (new Function('response', this.state.handler))(data);
                }
                let response = {};
                if (typeof data === 'string') {
                    response.html = data;
                } else {
                    response = data;
                }
                this.setState({result: response, errors: ""})
            }).catch((error) => {
                this.setState({errors: error.response.statusText})
            })
        })
    }


    changeHeader(i, key) {
        return (e) => {
            let value = e.target.value;
            this.setState(({headers}) => {
                return {headers: headers.setIn([i, key], value)}
            })
        }
    }

    addHeader() {
        this.setState(({headers}) => {
            return {headers: headers.push(Map({key: "", value: ""}))}
        })
    }

    changeHandler(edit, data, value) {
        this.setState({handler: value})
    }

    changeParam(type, i, key) {
        return (e) => {
            let value = e.target.value;
            this.setState((state) => {
                return {[type]: state[type].setIn([i, key], value)}
            })
        }
    }

    changeParamValue(type, i) {
        return (value) => {
            this.setState((state) => {
                return {[type]: state[type].setIn([i, 'value'], value ? value.value : null)}
            })
        }
    }


    deleteEntity(entity, i) {
        return () => {
            this.setState((state) => {
                return {[entity]: state[entity].delete(i)}
            })
        }
    }


    addParam(type) {
        return () => {
            this.setState((state) => {
                return {[type]: state[type].push(Map({key: "", value: ""}))}
            })
        }
    }

    render() {
        return (
            <div className="form-group">
                <div className="label">{window.translates.api_configuration}</div>
                <div className="row mb-3">
                    <div className="col-3 p-0 pr-2">
                        <CreatableSelect
                            value={{value: this.state.method, label: this.state.method}}
                            onChange={({value}) => this.setState({method: value})}
                            options={METHODS.map((method) => ({value: method, label: method}))}
                            className='react-select-container'
                            classNamePrefix="react-select"
                        />
                    </div>
                    <div className="col-9 p-0">
                        <input
                            value={this.state.url}
                            type="text"
                            placeholder="URL"
                            onChange={(e) => this.setState({url: e.target.value})}
                        />
                    </div>
                </div>

                <div>
                    <Collapsible
                        trigger={<div>{window.translates.api_headers} <i className={'fa icon fa-angle-down'}/></div>}
                        triggerWhenOpen={<div>{window.translates.api_headers} <i className={'fa icon fa-angle-up'}/>
                        </div>}>
                        {
                            this.state.headers.map((header, i) => {
                                return <div key={i} className="row mb-2">
                                    <div className="col-5 p-0 pr-2">
                                        <input type="text" placeholder={window.translates.key} value={header.get('key')}
                                               onChange={this.changeHeader(i, 'key')}/>
                                    </div>
                                    <div className="col-6 p-0 pr-2">
                                        <input type="text" placeholder={window.translates.value}
                                               value={header.get('value')}
                                               onChange={this.changeHeader(i, 'value')}/>
                                    </div>
                                    <div className="col-1 p-0">
                                        <button className="btn btn-link" style={{minWidth: '45px'}}
                                                onClick={this.deleteEntity('headers', i)}>
                                            <i className="fa fa-trash" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </div>
                            }).toArray()
                        }
                        <button className="btn btn-primary text-uppercase" onClick={this.addHeader}><i
                            className="fa fa-plus" aria-hidden="true"/>{window.translates.add_header}</button>
                    </Collapsible>
                </div>
                <div>
                    <Collapsible
                        trigger={<div>{window.translates.api_params} <i className={'fa icon fa-angle-down'}/></div>}
                        triggerWhenOpen={<div>{window.translates.api_params} <i className={'fa icon fa-angle-up'}/>
                        </div>}>
                        {
                            this.state.params.map((param, i) => {
                                return <div key={i} className="row mb-2">
                                    <div className="col-5 p-0 pr-2">
                                        <input type="text" placeholder={window.translates.key} value={param.get('key')}
                                               onChange={this.changeParam('params', i, 'key')}/>
                                    </div>
                                    <div className="col-6 p-0 pr-2">
                                        <CreatableSelect
                                            isClearable
                                            formatCreateLabel={(value) => "Use value " + value}
                                            value={{value: param.get('value'), label: param.get('value')}}
                                            onChange={this.changeParamValue('params', i)}
                                            options={this.props.variables.map((variable) => ({
                                                value: `@${variable}`,
                                                label: `@${variable}`
                                            }))}
                                            className='react-select-container'
                                            classNamePrefix="react-select"
                                        />
                                    </div>
                                    <div className="col-1 p-0">
                                        <button className="btn btn-link" style={{minWidth: '45px'}}
                                                onClick={this.deleteEntity('params', i)}>
                                            <i className="fa fa-trash" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </div>
                            }).toArray()
                        }
                        <button className="btn btn-primary text-uppercase" onClick={this.addParam('params')}><i
                            className="fa fa-plus" aria-hidden="true"/> {window.translates.api_add_param}
                        </button>
                    </Collapsible>
                </div>
                <div>
                    <Collapsible
                        trigger={<div>{window.translates.api_body} <i className={'fa icon fa-angle-down'}/></div>}
                        triggerWhenOpen={<div>{window.translates.api_body} <i className={'fa icon fa-angle-up'}/></div>}
                        overflowWhenOpen={'visible'}
                    >
                        {
                            this.state.data.map((param, i) => {
                                return <div key={i} className="row mb-2">
                                    <div className="col-5 p-0 pr-2">
                                        <input type="text" placeholder={window.translates.key} value={param.get('key')}
                                               onChange={this.changeParam('data', i, 'key')}/>
                                    </div>
                                    <div className="col-6 p-0 pr-2">
                                        <CreatableSelect
                                            isClearable
                                            formatCreateLabel={(value) => "Use value " + value}
                                            value={{value: param.get('value'), label: param.get('value')}}
                                            onChange={this.changeParamValue('data', i)}
                                            options={this.props.variables.map((variable) => ({
                                                value: `@${variable}`,
                                                label: `@${variable}`
                                            }))}
                                            className='react-select-container'
                                            classNamePrefix="react-select"
                                        />
                                    </div>
                                    <div className="col-1 p-0">
                                        <button className="btn btn-link" style={{minWidth: '45px'}}
                                                onClick={this.deleteEntity('data', i)}>
                                            <i className="fa fa-trash" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </div>
                            }).toArray()
                        }
                        <button className="btn btn-primary text-uppercase" onClick={this.addParam('data')}><i
                            className="fa fa-plus" aria-hidden="true"/> {window.translates.api_add_body_param}
                        </button>
                    </Collapsible>
                </div>
                <div>
                    <Collapsible
                        trigger={<div>{window.translates.api_handler} <i className={'fa icon fa-angle-down'}/></div>}
                        triggerWhenOpen={<div>{window.translates.api_handler} <i className={'fa icon fa-angle-up'}/>
                        </div>}
                        overflowWhenOpen={'visible'}
                    >
                        <code>{window.translates.api_response_desc}</code>
                        <div>{window.translates.api_example}:</div>
                        <div className="example p-2 mb-3 border">
                            <img src="/img/builder/apiexample.png" alt=""/>
                        </div>
                        <CodeMirror
                            value={this.state.handler}
                            options={{
                                mode: 'javascript',
                                lineNumbers: true
                            }}
                            onBeforeChange={this.changeHandler}

                        />

                    </Collapsible>
                </div>
                <div className="text-right">
                    <button className="btn btn-primary mt-3 text-uppercase"
                            onClick={this.test}>{window.translates.api_test}</button>
                </div>
                {this.state.result &&
                <div>
                    <code className="m-0 mt-3 mb-3 p-3">
                        {this.state.result.html}
                    </code>
                    <hr/>
                    <div>
                        {map(get(this.state.result, 'variables', {}), (value, name) => {
                            return <div key={name}>
                                <span>@{name}:  </span>
                                <i>{value}</i>
                            </div>
                        })}
                    </div>
                    <hr/>
                    <samp className="alert alert-light" role="alert">
                        {this.state.result.answer}
                    </samp>
                </div>
                }
                {this.state.errors &&
                <div>
                    {this.state.errors}
                </div>
                }

            </div>
        )
    }
}
