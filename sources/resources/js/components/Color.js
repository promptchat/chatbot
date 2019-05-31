import React from 'react';
import { CompactPicker } from 'react-color';
import {AVAILABLE_ICON, CLOSE_ICON, IMG_ICON, REFRESH_BUTTON, SEND_BTN} from "./_colorIcons";
import Select from 'react-select';

let fonts = [
    'Raleway',
    'Open Sans',
    'Montserrat',
    'Playfair Display',
    'Poppins',
    'Roboto',];

const fontSelect = fonts.map((font) => ({ value: font, label: font })) ;

export default class Color extends React.Component {


    constructor(props) {
        super(...arguments);
        let styles = JSON.parse(props.styles);
        this.state = {
            main_color: styles.main_color,
            secondary_color: styles.secondary_color,
            window_header_bg: styles.window_header_bg,
            window_header_color: styles.window_header_color,
            window_header_fs: styles.window_header_fs,
            window_header_ff: {label: styles.window_header_ff, value: styles.window_header_ff},
            window_content_bg: styles.window_content_bg,
            window_content_color: styles.window_content_color,
            window_content_fs: styles.window_content_fs,
            window_content_ff: {label: styles.window_content_ff, value: styles.window_content_ff},
            window_footer_bg: styles.window_footer_bg,
            window_footer_color: styles.window_footer_color,
            window_footer_fs: styles.window_footer_fs,
            window_footer_ff: {label: styles.window_footer_ff, value: styles.window_footer_ff},
            chat_message_bg: styles.chat_message_bg,
            chat_message_color: styles.chat_message_color,
            chat_message_fs: styles.chat_message_fs,
            chat_message_ff: {label: styles.chat_message_ff, value: styles.chat_message_ff},
            chat_answer_bg: styles.chat_answer_bg,
            chat_answer_color: styles.chat_answer_color,
            chat_answer_fs: styles.chat_answer_fs,
            chat_answer_ff: {label: styles.chat_answer_ff, value: styles.chat_answer_ff},
            chat_answer_btn_bg: styles.chat_answer_btn_bg,
            chat_answer_btn_color: styles.chat_answer_btn_color,
            chat_answer_btn_fs: styles.chat_answer_btn_fs,
            chat_answer_btn_ff: {label: styles.chat_answer_btn_ff, value: styles.chat_answer_btn_ff},
            input_text_color: styles.input_text_color,
            input_text_fs: styles.input_text_fs,
            input_text_ff: {label: styles.input_text_ff, value: styles.input_text_ff},
            input_send_btn_color: styles.input_send_btn_color
        };

    }


    handleChangeColor(attribute) {
        return (color) => {
            this.setState({ [attribute]: color.hex });
        }
    }

    handleChangeInput(attribute) {

        return (e) => {
            let value = e.target.value;
            if(isFinite(value) && value>=10 && value<=20) {
                this.setState({[attribute]: value});
            }
        }
    }


    handleChangeSelect(attribute) {
        return (selectedOption) => {
            this.setState({ [attribute]: selectedOption });
        }
    }


    render() {
        return (
            <div>
                <div className="row">
                    <style>
                        {`

                        .help-window,
                        .help-window .buttons .user-input {
                            background-color: ${this.state.window_content_bg};
                        }

                        .help-window .w-body {
                             color: ${this.state.window_content_color};
                             font-size: ${this.state.window_content_fs}px;
                             line-height: normal;
                             font-family: "${this.state.window_content_ff.value}";
                        }

                        .help-window .w-header {
                            background-color: ${this.state.window_header_bg};
                            color: ${this.state.window_header_color};
                            font-size: ${this.state.window_header_fs}px;
                            font-family: "${this.state.window_header_ff.value}";
                            line-height: normal;
                        }

                        .help-window .w-header .available-icon-block .available-icon svg g path,
						.help-window .w-header .available-icon-block .available-icon svg g polygon,
						.help-window .w-header .close-icon svg g polygon {
							fill: ${this.state.window_header_color}
						}

						.help-window .chat-list .chat-element .chat-element-value.answer {
                            background-color: ${this.state.chat_answer_bg};
                            color: ${this.state.chat_answer_color};
                            font-size: ${this.state.chat_answer_fs}px;
                            font-family: "${this.state.chat_answer_ff.value}";
                            line-height: normal;
                        }

                        .help-window .chat-list .chat-element .chat-element-value.answer:before {
                            background-color: ${this.state.chat_answer_bg};
                        }

                        .help-window .chat-list .chat-element .chat-element-value.question::after,
                        .help-window .chat-list .chat-element .chat-element-value.answer:after {
                            background: ${this.state.window_content_bg};
                        }

                        .help-window .chat-list .chat-element .chat-element-value.question {
                            background-color: ${this.state.chat_message_bg};
                            color: ${this.state.chat_message_color};
                            font-size: ${this.state.chat_message_fs}px;
                            font-family: "${this.state.chat_message_ff.value}";
                            line-height: normal;
                        }

                        .help-window .chat-list .chat-element .chat-element-value.question:before {
                            background-color: ${this.state.chat_message_bg};
                        }

                        .help-window .chat-list .chat-element .chat-element-value .select .checkbox.button {
                            background: ${this.state.chat_answer_btn_bg};
                            color: ${this.state.chat_answer_btn_color};
                            font-size: ${this.state.chat_answer_btn_fs}px;
                            font-family: "${this.state.chat_answer_btn_ff.value}";
                            line-height: normal;
                        }

                        .send-btn {
							color: ${this.state.secondary_color};
							background-color: ${this.state.main_color}
						}

                        .help-window .social-block {
                            color: ${this.state.window_footer_color};
							background-color: ${this.state.window_footer_bg};
							font-size: ${this.state.window_footer_fs}px;
							font-family: "${this.state.window_footer_ff.value}";
							line-height: normal;
                        }

						.send-button svg g polygon,
						.refresh-button svg path {
							fill: ${this.state.input_send_btn_color}
						}

						.help-window .buttons .user-input {
						    color: ${this.state.input_text_color};
						    font-size: ${this.state.input_text_fs}px;
						    font-family: "${this.state.input_text_ff.value}";
						    line-height: normal;
						}

						.help-btn .img-icon, .help-btn .img-icon svg {
                            width: 32px;
                            height: 32px;
                        }

                        .help-btn .img-icon svg g path,
						.help-btn .img-icon svg g polygon {
						    fill: ${this.state.main_color}
						}

					`}
                    </style>

                    <div className="col-sm-4 mb-15">
                        <div className="form-group">
                            <label>Button icon color</label>
                            <input type="hidden" name={'main_color'} value={this.state.main_color}/>
                            <CompactPicker
                                color={ this.state.main_color }
                                onChangeComplete={this.handleChangeColor('main_color')}
                            />
                        </div>
                    </div>
                    <div className="col-sm-4 mb-15 d-flex align-items-center justify-content-center">
                        <div className="text-center">
                            <div className="center help-btn" style={{
                                display: 'inline-flex',
                                justifyContent: 'center',
                                alignItems: 'center',
                                width: "50px",
                                height: "50px",
                                borderRadius:"50%",
                                borderColor: '#d3d3d3',
                                borderWidth: 1,
                                borderStyle: 'solid',
                                backgroundColor: this.state.secondary_color,
                                lineHeight: "50px"
                            }}>
                                <div className="img-icon"
                                     dangerouslySetInnerHTML={{__html: IMG_ICON}}
                                />
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-15 text-right">
                        <div className="form-group">
                            <label>Button background</label>
                            <input type="hidden" name={'secondary_color'} value={this.state.secondary_color}/>
                            <CompactPicker
                                color={ this.state.secondary_color }
                                onChangeComplete={ this.handleChangeColor('secondary_color') }
                            />
                        </div>
                    </div>
                </div>
                <br/>
                <hr/>
                <div className="row">
                    <div className="col-lg-4 mb-15">
                        <div className="form-group">
                            <label>Window header background</label>
                            <input type="hidden" name={'window_header_bg'} value={this.state.window_header_bg}/>
                            <CompactPicker
                                color={ this.state.window_header_bg }
                                onChangeComplete={ this.handleChangeColor('window_header_bg') }
                            />
                        </div>
                        <div className="form-group">
                            <label>Window header text color</label>
                            <input type="hidden" name={'window_header_color'} value={this.state.window_header_color}/>
                            <CompactPicker
                                color={ this.state.window_header_color }
                                onChangeComplete={ this.handleChangeColor('window_header_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>Window content background</label>
                            <input type="hidden" name={'window_content_bg'} value={this.state.window_content_bg}/>
                            <CompactPicker
                                color={ this.state.window_content_bg }
                                onChangeComplete={ this.handleChangeColor('window_content_bg') }
                            />
                        </div>
                        <div className="form-group">
                            <label>Window content text color</label>
                            <input type="hidden" name={'window_content_color'} value={this.state.window_content_color}/>
                            <CompactPicker
                                color={ this.state.window_content_color }
                                onChangeComplete={ this.handleChangeColor('window_content_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>Window footer background</label>
                            <input type="hidden" name={'window_footer_bg'} value={this.state.window_footer_bg}/>
                            <CompactPicker
                                color={ this.state.window_footer_bg }
                                onChangeComplete={ this.handleChangeColor('window_footer_bg') }
                            />
                        </div>
                        <div className="form-group">
                            <label>Window footer text color</label>
                            <input type="hidden" name={'window_footer_color'} value={this.state.window_footer_color}/>
                            <CompactPicker
                                color={ this.state.window_footer_color }
                                onChangeComplete={ this.handleChangeColor('window_footer_color') }
                            />
                        </div>
                        <div className="form-group">
                            <label>Chat input text color</label>
                            <input type="hidden" name={'input_text_color'} value={this.state.input_text_color}/>
                            <CompactPicker
                                color={ this.state.input_text_color }
                                onChangeComplete={ this.handleChangeColor('input_text_color') }
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 mb-15 d-flex align-items-center justify-content-center">
                        <div className="help-window">
                            <div className="w-header">
                                <div className="available-icon-block">
                                    <div className="available-icon" dangerouslySetInnerHTML={{__html: AVAILABLE_ICON}}>
                                    </div>
                                </div>
                                Name
                                <a>
                                    <div className="close-icon" dangerouslySetInnerHTML={{__html: CLOSE_ICON}}>
                                    </div>
                                </a>
                            </div>
                            <div className="w-body">
                                <div title="Restart chatbot" className="refresh">
                                    <div className="refresh-button" dangerouslySetInnerHTML={{__html: REFRESH_BUTTON}}/>
                                </div>
                                <ul className="chat-list">
                                    <li className="chat-element">
                                        <div className="chat-element-value answer">
                                            <img className="bot" src="/icons/chatbot.png" alt=""/>
                                            <div>Welcome to Web Agency</div>
                                        </div>
                                    </li>
                                    <li className="chat-element">
                                        <div className="chat-element-value answer">
                                            <img className="bot" src="/icons/chatbot.png" alt=""/>
                                            <div>
                                                <div>We are a team of awesome designers, thinkers and engineers who develop full fledged products</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-element">
                                        <div className="chat-element-value question">
                                            <img className="bot" src="/icons/chatbot.png" alt=""/>
                                            <div>Ok</div>
                                        </div>
                                    </li>
                                    <li className="chat-element">
                                        <div className="chat-element-value answer">
                                            <img className="bot" src="/icons/chatbot.png" alt=""/>
                                            <div>
                                                <div>Do you need our help?</div>
                                                <div className="select">
                                                    <label className="checkbox button">
                                                        Yes
                                                    </label>
                                                    <label className="checkbox button">
                                                        Not realy
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                    <div className="clearfix"></div>
                                    <br/>
                                    <div className="text-center">Simple text</div>
                                </ul>
                                <div className="buttons">
                                    <form>
                                        <input type="text" placeholder="Start typing here..." className="user-input"/>
                                        <button type={"submit"} className={"send-button"} dangerouslySetInnerHTML={{__html: SEND_BTN}}/>
                                    </form>
                                </div>
                            </div>
                            <div className="social-block">
                                Powered by name
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-15 text-right">
                        <div className="form-group">
                            <label>Chat message background</label>
                            <input type="hidden" name={'chat_message_bg'} value={this.state.chat_message_bg}/>
                            <CompactPicker
                                color={ this.state.chat_message_bg }
                                onChangeComplete={ this.handleChangeColor('chat_message_bg') }
                            />
                        </div>
                        <div className="form-group">
                            <label>Chat message text color</label>
                            <input type="hidden" name={'chat_message_color'} value={this.state.chat_message_color}/>
                            <CompactPicker
                                color={ this.state.chat_message_color }
                                onChangeComplete={ this.handleChangeColor('chat_message_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>Chat answer background</label>
                            <input type="hidden" name={'chat_answer_bg'} value={this.state.chat_answer_bg}/>
                            <CompactPicker
                                color={ this.state.chat_answer_bg }
                                onChangeComplete={ this.handleChangeColor('chat_answer_bg') }
                            />
                        </div>
                        <div className="form-group">
                            <label>Chat answer text color</label>
                            <input type="hidden" name={'chat_answer_color'} value={this.state.chat_answer_color}/>
                            <CompactPicker
                                color={ this.state.chat_answer_color }
                                onChangeComplete={ this.handleChangeColor('chat_answer_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>Chat answer button background</label>
                            <input type="hidden" name={'chat_answer_btn_bg'} value={this.state.chat_answer_btn_bg}/>
                            <CompactPicker
                                color={ this.state.chat_answer_btn_bg }
                                onChangeComplete={ this.handleChangeColor('chat_answer_btn_bg') }
                            />
                        </div>
                        <div className="form-group">
                            <label>Chat answer button text color</label>
                            <input type="hidden" name={'chat_answer_btn_color'} value={this.state.chat_answer_btn_color}/>
                            <CompactPicker
                                color={ this.state.chat_answer_btn_color }
                                onChangeComplete={ this.handleChangeColor('chat_answer_btn_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>Chat input send button color</label>
                            <input type="hidden" name={'input_send_btn_color'} value={this.state.input_send_btn_color}/>
                            <CompactPicker
                                color={ this.state.input_send_btn_color }
                                onChangeComplete={ this.handleChangeColor('input_send_btn_color') }
                            />
                        </div>
                    </div>
                </div>
                <br/>
                <hr/>
                <div className="row">
                    <div className="col-lg-4 mb-15">
                        <div className="form-group">
                            <label>Window header font family</label>
                            <Select
                                name={'window_header_ff'}
                                value={this.state.window_header_ff}
                                onChange={this.handleChangeSelect('window_header_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>Window header font size</label>
                            <input
                                className="form-control"
                                name={'window_header_fs'}
                                type="number"
                                min="10"
                                max="20"
                                value={this.state.window_header_fs}
                                onChange={this.handleChangeInput('window_header_fs')}
                            />
                        </div>
                        <div className="form-group">
                            <label>Window content font family</label>
                            <Select
                                name={'window_content_ff'}
                                value={this.state.window_content_ff}
                                onChange={this.handleChangeSelect('window_content_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>Window content font size</label>
                            <input
                                name={'window_content_fs'}
                                className="form-control"
                                type="number"
                                min="10"
                                max="20"
                                value={this.state.window_content_fs}
                                onChange={this.handleChangeInput('window_content_fs')}
                            />
                        </div>
                        <div className="form-group">
                            <label>Window footer font family</label>
                            <Select
                                name={'window_footer_ff'}
                                value={this.state.window_footer_ff}
                                onChange={this.handleChangeSelect('window_footer_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>Window footer font size</label>
                            <input
                                name={'window_footer_fs'}
                                className="form-control"
                                type="number"
                                min="10"
                                max="20"
                                value={this.state.window_footer_fs}
                                onChange={this.handleChangeInput('window_footer_fs')}
                            />
                        </div>
                        <div className="form-group">
                            <label>Window input text font family</label>
                            <Select
                                name={'input_text_ff'}
                                value={this.state.input_text_ff}
                                onChange={this.handleChangeSelect('input_text_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>Window input text font size</label>
                            <input
                                name={'input_text_fs'}
                                className="form-control"
                                type="number"
                                min="10"
                                max="20"
                                value={this.state.input_text_fs}
                                onChange={this.handleChangeInput('input_text_fs')}
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 mb-15 d-flex align-items-center justify-content-center">
                        <div className="help-window">
                            <div className="w-header">
                                <div className="available-icon-block">
                                    <div className="available-icon" dangerouslySetInnerHTML={{__html: AVAILABLE_ICON}}>
                                    </div>
                                </div>
                                Name
                                <a>
                                    <div className="close-icon" dangerouslySetInnerHTML={{__html: CLOSE_ICON}}>
                                    </div>
                                </a>
                            </div>
                            <div className="w-body">
                                <div title="Restart chatbot" className="refresh">
                                    <div className="refresh-button" dangerouslySetInnerHTML={{__html: REFRESH_BUTTON}}/>
                                </div>
                                <ul className="chat-list">
                                    <li className="chat-element">
                                        <div className="chat-element-value answer">
                                            <img className="bot" src="/icons/chatbot.png" alt=""/>
                                            <div>Welcome to Web Agency</div>
                                        </div>
                                    </li>
                                    <li className="chat-element">
                                        <div className="chat-element-value answer">
                                            <img className="bot" src="/icons/chatbot.png" alt=""/>
                                            <div>
                                                <div>We are a team of awesome designers, thinkers and engineers who develop full fledged products</div>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="chat-element">
                                        <div className="chat-element-value question">
                                            <img className="bot" src="/icons/chatbot.png" alt=""/>
                                            <div>Ok</div>
                                        </div>
                                    </li>
                                    <li className="chat-element">
                                        <div className="chat-element-value answer">
                                            <img className="bot" src="/icons/chatbot.png" alt=""/>
                                            <div>
                                                <div>Do you need our help?</div>
                                                <div className="select">
                                                    <label className="checkbox button">
                                                        Yes
                                                    </label>
                                                    <label className="checkbox button">
                                                        Not realy
                                                    </label>
                                                </div>

                                            </div>
                                        </div>
                                    </li>
                                    <div className="clearfix"></div>
                                    <br/>
                                    <div className="text-center">Simple text</div>
                                </ul>
                                <div className="buttons">
                                    <form>
                                        <input type="text" placeholder="Start typing here..." className="user-input"/>
                                        <button type={"submit"} className={"send-button"} dangerouslySetInnerHTML={{__html: SEND_BTN}}/>
                                    </form>
                                </div>
                            </div>
                            <div className="social-block">
                                Powered by name
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-15 text-right">
                        <div className="form-group">
                            <label>Window chat message font family</label>
                            <Select
                                name={'chat_answer_ff'}
                                value={this.state.chat_answer_ff}
                                onChange={this.handleChangeSelect('chat_answer_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>Window chat message font size</label>
                            <input
                                name={'chat_answer_fs'}
                                className="form-control"
                                type="number"
                                min="10"
                                max="20"
                                value={this.state.chat_answer_fs}
                                onChange={this.handleChangeInput('chat_answer_fs')}
                            />
                        </div>

                        <div className="form-group">
                            <label>Window chat message button font family</label>
                            <Select
                                name={'chat_answer_btn_ff'}
                                value={this.state.chat_answer_btn_ff}
                                onChange={this.handleChangeSelect('chat_answer_btn_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>Window chat message button font size</label>
                            <input
                                name={'chat_answer_btn_fs'}
                                className="form-control"
                                type="number"
                                min="10"
                                max="20"
                                value={this.state.chat_answer_btn_fs}
                                onChange={this.handleChangeInput('chat_answer_btn_fs')}
                            />
                        </div>

                        <div className="form-group">
                            <label>Window chat message font family</label>
                            <Select
                                name={'chat_message_ff'}
                                value={this.state.chat_message_ff}
                                onChange={this.handleChangeSelect('chat_message_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>Window chat message font size</label>
                            <input
                                name={'chat_message_fs'}
                                className="form-control"
                                type="number"
                                min="10"
                                max="20"
                                value={this.state.chat_message_fs}
                                onChange={this.handleChangeInput('chat_message_fs')}
                            />
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
