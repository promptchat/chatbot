import React from 'react';
import axios from "axios";

export default class ImageLoader extends React.Component {

    constructor(props) {
        super(...arguments);

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler(event) {
        const data = new FormData();
        data.append('image', event.target.files[0]);
        axios.post("/image", data).then(res => {
            this.props.onChange(res.data);
        })
    }

    render() {
        return (
            <div>
                <label className="form-group image-input-wrapper">
                    <label className="control-label">
                        {this.props.label}
                    </label>

                    <img className="image-input-preview my-1 d-block"
                         src={(this.props.value && this.props.value.path) ? `/storage/${this.props.value.path}` : this.props.default}/>
                    <label className={'btn btn-info btn-sm img-loader-btn'}>
                        <i className="fa fa-image" />
                        <input type="file" style={{display: 'none'}} name="image_id" onChange={this.onChangeHandler}/>
                    </label>
                    {this.props.value && this.props.value.path && <label
                        className={'btn btn-sm btn-danger img-loader-btn'}
                        onClick={() => this.props.onChange({})}
                    >
                        <i className={'fa fa-remove'} />
                    </label>}
                </label>
            </div>
        );
    }
}
