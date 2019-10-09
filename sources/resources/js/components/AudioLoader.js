import React from 'react';
import axios from "axios";

export default class AudioLoader extends React.Component {

    constructor(props) {
        super(...arguments);
        this.state = {
            sound: this.props.value ? this.props.value : null
        };

        this.onChangeHandler = this.onChangeHandler.bind(this);
    }

    onChangeHandler (event) {
        const data = new FormData();
        data.append('audio', event.target.files[0]);
        axios.post("/sound", data).then(res => {
            this.props.onChange(res.data.id);
            return this.setState({sound: res.data.url});
        })
    }

    render() {
        return (
            <div>
                <label htmlFor="message_notification_id" className="form-group audio-input-wrapper">
                    <label htmlFor="message_notification_id" className="control-label">
                        {this.props.label}
                    </label>
                    <audio controls className="audio-input-preview my-1 d-block" src={this.state.sound ? this.state.sound : this.props.default}></audio>
                    <input id="message_notification_id" type="file" name="message_notification_id" onChange={this.onChangeHandler}/>
                </label>
            </div>
        );
    }
}
