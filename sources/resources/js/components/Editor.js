import React from 'react';
import { Editor } from 'react-draft-wysiwyg';
import { EditorState, convertToRaw, ContentState } from 'draft-js'
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import axios from 'axios';


class UploadAdapter {
    constructor( loader ) {
        this.loader = loader;
        this.reject = undefined;
    }

    upload() {
        const formData = new FormData();
        formData.append('file', this.loader.file);
        return axios.post('/api/file', formData).then(({data}) => Promise.resolve({
            default: data
        }));
    }

    abort() {
        this.reject();
    }
}

export default class CustomEditor extends React.Component {

    constructor(props) {
        super(...arguments);
        const html = this.props.value;
        let editorState = CustomEditor.editorStateFromHtml(html);
        this.state = {
            html,
            editorState,
        };

        this.onEditorStateChange = this.onEditorStateChange.bind(this)
    }

    static getDerivedStateFromProps(props, state) {
        const html = props.value;
        if (
            html !== state.html
        ) {
            let editorState = CustomEditor.editorStateFromHtml(html);

            return {
                editorState,
                html,
            };
        }
        return null;
    }

    static editorStateFromHtml(html) {
        let editorState;
        if (html) {
            const contentBlock = htmlToDraft(html);
            const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
            editorState = EditorState.createWithContent(contentState);
        } else {
            editorState = EditorState.createEmpty();
        }
        return editorState;
    }

    onEditorStateChange(editorState) {
        const html = draftToHtml(convertToRaw(editorState.getCurrentContent()));
        this.props.onChange(html);
        this.setState({
            html,
            editorState,
        });
    }

    render() {
        return <Editor
            toolbar={
                {
                    image: {
                        uploadEnabled: false,
                        previewImage: true,
                        uploadCallback: (file) => {
                            const formData = new FormData();
                            formData.append('file', file);
                            return axios.post('/api/file', formData).then(({data}) => Promise.resolve({
                                data:  {link: data}
                            }));
                        },
                    },
                }
            }
            handlePastedText={() => false}
            editorState={this.state.editorState}
            onEditorStateChange={this.onEditorStateChange}
        />    }
}


