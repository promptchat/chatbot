import React, {PureComponent} from 'react';
import axios from 'axios';
import Select from "react-select";
import {Badge, Input, InputGroup, InputGroupAddon, InputGroupText} from "reactstrap";
import Modal from "../../Modal";


export default class TemplatesLoader extends PureComponent {
    constructor(props) {
        super(props)

        this.updateMarks = this.updateMarks.bind(this);
        this.searchUpdated = this.searchUpdated.bind(this)
        this.codeUpdated = this.codeUpdated.bind(this)
    }

    state = {
        templates: [],
        searchTerm: '',
        code: this.props.code || '',
        marksList: [],
        marks: [],
    };

    componentDidMount() {
        this.getTemplateList();
        axios.get('/marks/list').then(({data}) => this.setState(({marksList: data.map(({id, name})  => ({label: name, value: id})) })));
    }

    getTemplateList() {
        axios.get(`/templates/list/`, {
            params: {
                q: this.state.searchTerm,
                code: this.state.code,
                marks: this.state.marks.map(({value}) => value)
            }
        }).then(({data}) => this.setState({templates: data}))
    }

    startLoad(id) {
        axios.get(`/templates/${id}/items`).then(({data}) => this.props.setData(data))
    }

    searchUpdated (e) {
        this.setState({searchTerm: e.target.value}, () => {
            this.getTemplateList()
        })
    }
    codeUpdated (e) {
        this.setState({code: e.target.value}, () => {
            this.getTemplateList()
        })
    }

    updateMarks(marks) {
        this.setState({marks}, () => {
            this.getTemplateList()
        });

    }

    renderPreview() {
        return ( <Modal isOpen={true} onRequestClose={() => {
            this.setState({preview: false})
        }}>
            <div className='react-modal-header'>
                <i className={`icon fa fa-eye`}/>
                <div className='close' onClick={() => {
                    this.setState({preview: false})
                }}><i className='fa fa-times'/></div>
            </div>
            <iframe style={{width: 450, height: 600}} src={`/preview/${this.state.preview}`}/>
        </Modal>)
    }

    render() {
        if(this.state.preview) {
            return  this.renderPreview();
        }

        return (
            <Modal
                isOpen={true}
                onRequestClose={() => {
                    this.props.onCancel()
                }}
                style={{
                    content: {
                        maxWidth: 800,
                        position: 'relative',
                    }
                }}
                header={<span>
                    <i className={`icon fa fa-edit`}/>
                    Templates
                </span>}
            >
                <div className="row">
                <div className={'col-4'}>
                    <input type="text" value={this.state.code} onChange={this.codeUpdated} placeholder={'Code'}/>
                    <Select className="p-1"
                            placeholder={'Tags'}
                            value={this.state.marks}
                            onChange={this.updateMarks}
                            options={
                                this.state.marksList
                            }
                            isMulti
                    />
                </div>
                <div className="col-8">
                <div className="search">

                    <Input placeholder="Search" onChange={this.searchUpdated} />

                </div>
                <table className="table table-borderless">
                    <tbody>
                    {this.state.templates.map((template) => (
                        <tr
                            key={template.id}

                        >
                            <td
                                 style={{width: 32, padding: 10}}
                            ><img src={template.image && `/storage/${template.image.path}`} alt=""
                                 style={{width: 32}}/>
                            </td>
                            <td>
                                <strong>{template.name}</strong>
                                <div>
                                    {
                                        template.marks.map((mark) => {
                                            return   <Badge color="primary" key={mark.id} pill>{mark.name}</Badge>
                                        })
                                    }
                                </div>
                            </td>
                            <td>
                                <span onClick={() => this.setState({preview: template.chat_id})}><i className={'fa fa-eye'} /></span>
                            </td>
                            <td>
                                <span onClick={() => this.startLoad(template.id)}><i className={'fa fa-upload'} /></span>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                </div>
                </div>
            </Modal>
        )
    }
}
