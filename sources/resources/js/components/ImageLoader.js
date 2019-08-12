import React from 'react';
import axios from "axios";

export default class ImageLoader extends React.Component {

    constructor(props) {
        super(...arguments);
        this.state = {
            image: this.props.value ? this.props.value : null
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler (event) {
        const data = new FormData();
        data.append('image', event.target.files[0]);
        axios.post("/image", data).then(res => {
            this.props.onChange(res.data.id, res.data.url);
            return this.setState({image: res.data.url});
        })
    }

    render() {
        return (
            <div>
                <label htmlFor="image_id" className="form-group image-input-wrapper">
                    <label htmlFor="image_id" className="control-label">
                        {this.props.label}
                    </label>
                    <img className="image-input-preview my-1 d-block" src={this.state.image ? this.state.image : this.props.default}/>
                    <input id="image_id" type="file" name="image_id" onChange={this.onChangeHandler}/>
                </label>
            </div>
        );
    }
}
