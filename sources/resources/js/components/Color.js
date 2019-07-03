import React from 'react';
import { CompactPicker } from 'react-color';
import {
    IMG_ICON,
    CLOSE_ICON,
    LOGO_ICON,
    FULL_SCREEN_ICON,
    BOT_ICON,
    FACEBOOK_ICON,
    SEND_ICON,
    BACK_ICON, RESTART_ICON, WHATSAPP_ICON
} from "./_colorIcons";
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
            window_sub_header_bg: styles.window_sub_header_bg,
            window_sub_header_color: styles.window_sub_header_color,
            dropdown_bg: styles.dropdown_bg,
            window_header_fs: styles.window_header_fs,
            window_header_ff: {label: styles.window_header_ff, value: styles.window_header_ff},
            window_content_bg: styles.window_content_bg,
            window_content_color: styles.window_content_color,
            window_content_fs: styles.window_content_fs,
            window_content_ff: {label: styles.window_content_ff, value: styles.window_content_ff},
            window_footer_bg: styles.window_footer_bg,
            window_footer_color: styles.window_footer_color,
            window_footer_icon_color: styles.window_footer_icon_color,
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
            input_send_btn_color: styles.input_send_btn_color,
            input_placeholder_text_color: styles.input_placeholder_text_color,
            input_bg_color: styles.input_bg_color,
            input_send_btn_bg: styles.input_send_btn_bg,
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

    static hexToRGBA(hex, a = 1) {
        let r = 0, g =0, b = 0;

        if(/#[a-f0-9]{6}/.test(hex)) {
            let [fullMatch, f, s, t] = hex.toLowerCase().match(/#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/);
            r = parseInt(f, 16);
            g = parseInt(s, 16);
            b = parseInt(t, 16);
        }

        return `rgba(${r}, ${g}, ${b}, ${a})`
    }

    render() {
        return (
            <div>
                <div className="row">
                    <style>
                        {`

						.chat-btn {
							border-color: ${this.state.main_color};
						}

						.chat-btn .img-icon svg g path,
						.chat-btn .img-icon svg g polygon {
						    fill: ${this.state.main_color}
						}

						.chat-btn {
							background-color: ${this.state.secondary_color};
						}

						@keyframes play {
						  0% {
							transform: scale(1);
						  }

						  15% {
							box-shadow: 0 0 0 4px ${Color.hexToRGBA(this.state.main_color, 0.2)};
						  }

						  25% {
							box-shadow: 0 0 0 4px ${Color.hexToRGBA(this.state.main_color, 0.2)}, 0 0 0 8px ${Color.hexToRGBA(this.state.main_color, 0.2)};
						  }

						  30% {
							transform: scale(1.2);
						  }

						  50% {
							box-shadow: 0 0 0 4px ${Color.hexToRGBA(this.state.main_color, 0.2)}, 0 0 0 8px ${Color.hexToRGBA(this.state.main_color, 0.2)}, 0 0 0 12px ${Color.hexToRGBA(this.state.main_color, 0.2)};
						  }

						  80% {
							transform: scale(1);
						  }
						}

						.chat-window,
                        .chat-window .cw-content {
                            background-color: ${this.state.window_content_bg};
                        }

                        .chat-window .cw-content {
                             color: ${this.state.window_content_color};
                             font-size: ${this.state.window_content_fs}px;
                             line-height: normal;
                             font-family: "${this.state.window_content_ff.value}";
                        }

                        .chat-window .cw-header .top-header,
                        .chat-window .cw-header .bottom-header,
                        .chat-window .cw-header .top-header .name {
                            font-size: ${this.state.window_header_fs}px;
                            font-family: "${this.state.window_header_ff.value}";
                            line-height: normal;
                        }

                        .chat-window .cw-header .top-header,
                        .chat-window .cw-header .top-header .name {
                            background-color: ${this.state.window_header_bg};
                            color: ${this.state.window_header_color};
                        }

                        .chat-window .cw-header .bottom-header {
                            background-color: ${this.state.window_sub_header_bg};
                            color: ${this.state.window_sub_header_color};
                            line-height: normal;
                        }

                        .chat-window .cw-header .top-header .logo svg path,
                        .chat-window .cw-header .top-header .logo svg g polygon {
                            fill: ${this.state.window_header_color};
                        }

						.chat-window .cw-header .top-header .icon svg g,
						.chat-window .cw-header .top-header .icon svg line,
						.chat-window .cw-header .top-header .icon svg path,
						.chat-window .cw-header .top-header .icon svg g polygon {
							fill: ${this.state.window_header_color};
							stroke: ${this.state.window_header_color};
						}

                        .chat-window .cw-header .bottom-header .social-dropdown-menu {
                            background-color: ${this.state.dropdown_bg};
                        }

						.chat-window .cw-content .operator-message .message-item .message {
							background-color: ${this.state.chat_answer_bg};
                            color: ${this.state.chat_answer_color};
                            font-size: ${this.state.chat_answer_fs}px;
                            font-family: "${this.state.chat_answer_ff.value}";
						}

						.chat-window .cw-content .operator-message .image {
							background-color: ${this.state.chat_answer_bg};
						}

						.chat-window .cw-content .operator-message .message-item .message .select .button {
                            background: ${this.state.chat_answer_btn_bg};
                            color: ${this.state.chat_answer_btn_color};
                            font-size: ${this.state.chat_answer_btn_fs}px;
                            font-family: "${this.state.chat_answer_btn_ff.value}";
                            line-height: normal;
                        }

						.chat-window .cw-content .user-message .message-item .message {
							background-color: ${this.state.chat_message_bg};
                            color: ${this.state.chat_message_color};
                            font-size: ${this.state.chat_message_fs}px;
                            font-family: "${this.state.chat_message_ff.value}";
                            line-height: normal;
						}

						.chat-window .cw-content .user-message .image {
							background-color: ${this.state.chat_message_bg};
						}

                        .chat-window .cw-content .c-footer .send-button {
							color: ${this.state.input_send_btn_color};
							background-color: ${this.state.input_send_btn_bg}
						}

						.chat-window .cw-content .c-footer .send-button svg path,
						.chat-window .cw-content .c-footer .location-button svg path {
						    fill: ${this.state.input_send_btn_color};
						}

						.chat-window .cw-buttons .cw-button svg path,
						.chat-window .cw-buttons .cw-button svg path line,
						.chat-window .cw-buttons .cw-button svg line {
							stroke: ${this.state.window_footer_icon_color}
						}

						.chat-window .cw-footer {
							color: ${this.state.window_footer_color};
							background-color: ${this.state.window_footer_bg};
							font-size: ${this.state.window_footer_fs}px;
							font-family: "${this.state.window_footer_ff.value}";
							line-height: normal;
						}

						.chat-window .cw-content .user-input {
							color: ${this.state.input_text_color};
							background-color: ${this.state.input_bg_color};
						    font-size: ${this.state.input_text_fs}px;
						    font-family: "${this.state.input_text_ff.value}";
						    line-height: normal;
						}

						.chat-window .cw-content .user-input::placeholder{
							color: ${this.state.input_placeholder_text_color};
						}

					`}
                    </style>

                    <div className="col-sm-4 mb-15">
                        <div className="form-group">
                            <label>{window.translates.button_icon_color}</label>
                            <input type="hidden" name={'main_color'} value={this.state.main_color}/>
                            <CompactPicker
                                color={ this.state.main_color }
                                onChangeComplete={this.handleChangeColor('main_color')}
                            />
                        </div>
                    </div>
                    <div className="col-sm-4 mb-15 d-flex align-items-center justify-content-center">
                        <div className="text-center">
                            <a className="chat-btn show">
                                <div className="img-icon show" dangerouslySetInnerHTML={{__html: IMG_ICON}}></div>
                            </a>
                        </div>
                    </div>
                    <div className="col-sm-4 mb-15 text-right">
                        <div className="form-group">
                            <label>{window.translates.button_background}</label>
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
                            <label>{window.translates.window_header_background}</label>
                            <input type="hidden" name={'window_header_bg'} value={this.state.window_header_bg}/>
                            <CompactPicker
                                color={ this.state.window_header_bg }
                                onChangeComplete={ this.handleChangeColor('window_header_bg') }
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.window_header_text_color}</label>
                            <input type="hidden" name={'window_header_color'} value={this.state.window_header_color}/>
                            <CompactPicker
                                color={ this.state.window_header_color }
                                onChangeComplete={ this.handleChangeColor('window_header_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.window_sub_header_background}</label>
                            <input type="hidden" name={'window_sub_header_bg'} value={this.state.window_sub_header_bg}/>
                            <CompactPicker
                                color={ this.state.window_sub_header_bg }
                                onChangeComplete={ this.handleChangeColor('window_sub_header_bg') }
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.window_sub_header_text_color}</label>
                            <input type="hidden" name={'window_sub_header_color'} value={this.state.window_sub_header_color}/>
                            <CompactPicker
                                color={ this.state.window_sub_header_color }
                                onChangeComplete={ this.handleChangeColor('window_sub_header_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.dropdown_bg}</label>
                            <input type="hidden" name={'dropdown_bg'} value={this.state.dropdown_bg}/>
                            <CompactPicker
                                color={ this.state.dropdown_bg }
                                onChangeComplete={ this.handleChangeColor('dropdown_bg') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.window_content_background}</label>
                            <input type="hidden" name={'window_content_bg'} value={this.state.window_content_bg}/>
                            <CompactPicker
                                color={ this.state.window_content_bg }
                                onChangeComplete={ this.handleChangeColor('window_content_bg') }
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.window_content_text_color}</label>
                            <input type="hidden" name={'window_content_color'} value={this.state.window_content_color}/>
                            <CompactPicker
                                color={ this.state.window_content_color }
                                onChangeComplete={ this.handleChangeColor('window_content_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.window_footer_background}</label>
                            <input type="hidden" name={'window_footer_bg'} value={this.state.window_footer_bg}/>
                            <CompactPicker
                                color={ this.state.window_footer_bg }
                                onChangeComplete={ this.handleChangeColor('window_footer_bg') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.window_footer_text_color}</label>
                            <input type="hidden" name={'window_footer_color'} value={this.state.window_footer_color}/>
                            <CompactPicker
                                color={ this.state.window_footer_color }
                                onChangeComplete={ this.handleChangeColor('window_footer_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.window_footer_icon_color}</label>
                            <input type="hidden" name={'window_footer_icon_color'} value={this.state.window_footer_icon_color}/>
                            <CompactPicker
                                color={ this.state.window_footer_icon_color }
                                onChangeComplete={ this.handleChangeColor('window_footer_icon_color') }
                            />
                        </div>
                    </div>
                    <div className="col-lg-4 mb-15 d-flex align-items-center justify-content-center">
                        <div className="chat-window show">
                            <div className="cw-header">
                                <div className="top-header d-flex justify-content-space-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div className="logo">
                                            <div dangerouslySetInnerHTML={{__html: LOGO_ICON}}/>
                                        </div>
                                        <div className="name">No name</div>
                                    </div>
                                    <div className="d-flex justify-content-space-between align-items-center">
                                        <a><div className="icon" dangerouslySetInnerHTML={{__html: FULL_SCREEN_ICON}}/></a>
                                        <a><div className="icon" dangerouslySetInnerHTML={{__html: CLOSE_ICON}}/></a>
                                    </div>
                                </div>
                                <div className="bottom-header d-flex justify-content-space-between align-items-center">
                                    <div>
                                        <a className="chat-select">
                                            <div className="d-flex align-items-center">
                                                <div className="flip-container">
                                                    <div className="flipper">
                                                        <div className="front">
                                                            <div className="icon" dangerouslySetInnerHTML={{__html: BOT_ICON}}></div>
                                                            <img className="click" src="" alt=""/>
                                                        </div>
                                                        <div className="back">
                                                            <div className="icon"></div>
                                                            <img className="click" src="" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sevice-name">
                                                    <span>Chat<span className="bot">Bot</span></span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <div>
                                            <a className="social-dropdown">
                                                <div className="social-icon" dangerouslySetInnerHTML={{__html: FACEBOOK_ICON}}></div>
                                            </a>
                                            <div className="social-dropdown-menu show">
                                                <a className="social-item">
                                                    <div className="social-icon" dangerouslySetInnerHTML={{__html: FACEBOOK_ICON}}></div>
                                                </a>
                                                <a className="social-item">
                                                    <div className="social-icon" dangerouslySetInnerHTML={{__html: WHATSAPP_ICON}}></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="show">
                                <div className="cw-content">
                                    <div className="c-content">
                                        <div className="operator-message">
                                            <div className="image-block">
                                                <div className="image d-flex">
                                                    <div className="d-flex align-items-center justify-content-center" dangerouslySetInnerHTML={{__html: BOT_ICON}}/>
                                                </div>
                                            </div>
                                            <div className="messages">
                                                <div className="message-item">
                                                    <div className="message">
                                                        <div>
                                                            <p>Message text 1</p>
                                                        </div>
                                                        <div className="select">
                                                            <label className="button"><input name="id" type="checkbox" value="1"/>button 1</label>
                                                            <label className="button "><input name="id" type="checkbox" value="2"/>button 2</label>
                                                            <label className="button "><input name="id" type="checkbox" value="3"/>button 3</label>
                                                        </div>
                                                    </div>
                                                    <div className="time">14:00</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="user-message">
                                            <div className="messages">
                                                <div className="message-item">
                                                    <div className="time">14:01</div>
                                                    <div className="message">Message text 2</div>
                                                </div>
                                            </div>
                                            <div className="image-block">
                                                <div className="image">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="operator-message">
                                            <div className="image-block">
                                                <div className="image d-flex">
                                                    <div className="d-flex align-items-center justify-content-center" dangerouslySetInnerHTML={{__html: BOT_ICON}}/>
                                                </div>
                                            </div>
                                            <div className="messages">
                                                <div className="message-item">
                                                    <div className="message">Message text 3</div>
                                                    <div className="time">14:01</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="user-message">
                                            <div className="messages">
                                                <div className="message-item">
                                                    <div className="time">14:02</div>
                                                    <div className="message">Message text 4</div>
                                                </div>
                                            </div>
                                            <div className="image-block">
                                                <div className="image">
                                                </div>
                                            </div>
                                        </div>
                                        <p class="welcome-message">Text example</p>
                                    </div>
                                    <div className="c-footer">
                                        <div>
                                            <textarea name="message" placeholder="Start typing here...UA" className="user-input"></textarea>
                                            <button type="button" className="send-button">
                                                <div dangerouslySetInnerHTML={{__html: SEND_ICON}}></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="cw-footer d-flex justify-content-space-between align-items-flex-end">
                                    <div className="cw-buttons d-flex">
                                        <a className="cw-button d-flex align-items-flex-end" title="Restart chatbotUA">
                                            <div className="icon" dangerouslySetInnerHTML={{__html: RESTART_ICON}}/>
                                            <div className="name">Restart</div>
                                        </a>
                                        <a className="cw-button d-flex align-items-flex-end" title="Go back one stepUA">
                                            <div className="icon" dangerouslySetInnerHTML={{__html: BACK_ICON}}/>
                                            <div className="name">Back</div>
                                        </a>
                                    </div>
                                    <div className="cw-powered">Powered by</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-15 text-right">
                        <div className="form-group">
                            <label>{window.translates.chat_message_background}</label>
                            <input type="hidden" name={'chat_message_bg'} value={this.state.chat_message_bg}/>
                            <CompactPicker
                                color={ this.state.chat_message_bg }
                                onChangeComplete={ this.handleChangeColor('chat_message_bg') }
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.chat_message_text_color}</label>
                            <input type="hidden" name={'chat_message_color'} value={this.state.chat_message_color}/>
                            <CompactPicker
                                color={ this.state.chat_message_color }
                                onChangeComplete={ this.handleChangeColor('chat_message_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.chat_answer_background}</label>
                            <input type="hidden" name={'chat_answer_bg'} value={this.state.chat_answer_bg}/>
                            <CompactPicker
                                color={ this.state.chat_answer_bg }
                                onChangeComplete={ this.handleChangeColor('chat_answer_bg') }
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.chat_answer_text_color}</label>
                            <input type="hidden" name={'chat_answer_color'} value={this.state.chat_answer_color}/>
                            <CompactPicker
                                color={ this.state.chat_answer_color }
                                onChangeComplete={ this.handleChangeColor('chat_answer_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.chat_answer_button_background}</label>
                            <input type="hidden" name={'chat_answer_btn_bg'} value={this.state.chat_answer_btn_bg}/>
                            <CompactPicker
                                color={ this.state.chat_answer_btn_bg }
                                onChangeComplete={ this.handleChangeColor('chat_answer_btn_bg') }
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.chat_answer_button_text_color}</label>
                            <input type="hidden" name={'chat_answer_btn_color'} value={this.state.chat_answer_btn_color}/>
                            <CompactPicker
                                color={ this.state.chat_answer_btn_color }
                                onChangeComplete={ this.handleChangeColor('chat_answer_btn_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.input_placeholder_text_color}</label>
                            <input type="hidden" name={'input_placeholder_text_color'} value={this.state.input_placeholder_text_color}/>
                            <CompactPicker
                                color={ this.state.input_placeholder_text_color }
                                onChangeComplete={ this.handleChangeColor('input_placeholder_text_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.chat_input_text_color}</label>
                            <input type="hidden" name={'input_text_color'} value={this.state.input_text_color}/>
                            <CompactPicker
                                color={ this.state.input_text_color }
                                onChangeComplete={ this.handleChangeColor('input_text_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.input_bg_color}</label>
                            <input type="hidden" name={'input_bg_color'} value={this.state.input_bg_color}/>
                            <CompactPicker
                                color={ this.state.input_bg_color }
                                onChangeComplete={ this.handleChangeColor('input_bg_color') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.input_send_btn_bg}</label>
                            <input type="hidden" name={'input_send_btn_bg'} value={this.state.input_send_btn_bg}/>
                            <CompactPicker
                                color={ this.state.input_send_btn_bg }
                                onChangeComplete={ this.handleChangeColor('input_send_btn_bg') }
                            />
                        </div>

                        <div className="form-group">
                            <label>{window.translates.chat_input_send_button_color}</label>
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
                            <label>{window.translates.window_header_font_family}</label>
                            <Select
                                name={'window_header_ff'}
                                value={this.state.window_header_ff}
                                onChange={this.handleChangeSelect('window_header_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.window_header_font_size}</label>
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
                            <label>{window.translates.window_content_font_family}</label>
                            <Select
                                name={'window_content_ff'}
                                value={this.state.window_content_ff}
                                onChange={this.handleChangeSelect('window_content_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.window_content_font_size}</label>
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
                            <label>{window.translates.window_footer_font_family}</label>
                            <Select
                                name={'window_footer_ff'}
                                value={this.state.window_footer_ff}
                                onChange={this.handleChangeSelect('window_footer_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.window_footer_font_size}</label>
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
                            <label>{window.translates.window_input_text_font_family}</label>
                            <Select
                                name={'input_text_ff'}
                                value={this.state.input_text_ff}
                                onChange={this.handleChangeSelect('input_text_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.window_input_text_font_size}</label>
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
                        <div className="chat-window show">
                            <div className="cw-header">
                                <div className="top-header d-flex justify-content-space-between align-items-center">
                                    <div className="d-flex align-items-center">
                                        <div className="logo">
                                            <div dangerouslySetInnerHTML={{__html: LOGO_ICON}}/>
                                        </div>
                                        <div className="name">No name</div>
                                    </div>
                                    <div className="d-flex justify-content-space-between align-items-center">
                                        <a><div className="icon" dangerouslySetInnerHTML={{__html: FULL_SCREEN_ICON}}/></a>
                                        <a><div className="icon" dangerouslySetInnerHTML={{__html: CLOSE_ICON}}/></a>
                                    </div>
                                </div>
                                <div className="bottom-header d-flex justify-content-space-between align-items-center">
                                    <div>
                                        <a className="chat-select">
                                            <div className="d-flex align-items-center">
                                                <div className="flip-container">
                                                    <div className="flipper">
                                                        <div className="front">
                                                            <div className="icon" dangerouslySetInnerHTML={{__html: BOT_ICON}}></div>
                                                            <img className="click" src="" alt=""/>
                                                        </div>
                                                        <div className="back">
                                                            <div className="icon"></div>
                                                            <img className="click" src="" alt=""/>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="sevice-name">
                                                    <span>Chat<span className="bot">Bot</span></span>
                                                </div>
                                            </div>
                                        </a>
                                    </div>
                                    <div>
                                        <div>
                                            <a className="social-dropdown">
                                                <div className="social-icon" dangerouslySetInnerHTML={{__html: FACEBOOK_ICON}}></div>
                                            </a>
                                            <div className="social-dropdown-menu show">
                                                <a className="social-item">
                                                    <div className="social-icon" dangerouslySetInnerHTML={{__html: FACEBOOK_ICON}}></div>
                                                </a>
                                                <a className="social-item">
                                                    <div className="social-icon" dangerouslySetInnerHTML={{__html: WHATSAPP_ICON}}></div>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="show">
                                <div className="cw-content">
                                    <div className="c-content">
                                        <div className="operator-message">
                                            <div className="image-block">
                                                <div className="image d-flex">
                                                    <div className="d-flex align-items-center justify-content-center" dangerouslySetInnerHTML={{__html: BOT_ICON}}/>
                                                </div>
                                            </div>
                                            <div className="messages">
                                                <div className="message-item">
                                                    <div className="message">
                                                        <div>
                                                            <p>Message text 1</p>
                                                        </div>
                                                        <div className="select">
                                                            <label className="button"><input name="id" type="checkbox" value="1"/>button 1</label>
                                                            <label className="button "><input name="id" type="checkbox" value="2"/>button 2</label>
                                                            <label className="button "><input name="id" type="checkbox" value="3"/>button 3</label>
                                                        </div>
                                                    </div>
                                                    <div className="time">14:00</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="user-message">
                                            <div className="messages">
                                                <div className="message-item">
                                                    <div className="time">14:01</div>
                                                    <div className="message">Message text 2</div>
                                                </div>
                                            </div>
                                            <div className="image-block">
                                                <div className="image">
                                                </div>
                                            </div>
                                        </div>
                                        <div className="operator-message">
                                            <div className="image-block">
                                                <div className="image d-flex">
                                                    <div className="d-flex align-items-center justify-content-center" dangerouslySetInnerHTML={{__html: BOT_ICON}}/>
                                                </div>
                                            </div>
                                            <div className="messages">
                                                <div className="message-item">
                                                    <div className="message">Message text 3</div>
                                                    <div className="time">14:01</div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="user-message">
                                            <div className="messages">
                                                <div className="message-item">
                                                    <div className="time">14:02</div>
                                                    <div className="message">Message text 4</div>
                                                </div>
                                            </div>
                                            <div className="image-block">
                                                <div className="image">
                                                </div>
                                            </div>
                                        </div>
                                        <p class="welcome-message">Text example</p>
                                    </div>
                                    <div className="c-footer">
                                        <div>
                                            <textarea name="message" placeholder="Start typing here...UA" className="user-input"></textarea>
                                            <button type="button" className="send-button">
                                                <div dangerouslySetInnerHTML={{__html: SEND_ICON}}></div>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                                <div className="cw-footer d-flex justify-content-space-between align-items-flex-end">
                                    <div className="cw-buttons d-flex">
                                        <a className="cw-button d-flex align-items-flex-end" title="Restart chatbotUA">
                                            <div className="icon" dangerouslySetInnerHTML={{__html: RESTART_ICON}}/>
                                            <div className="name">Restart</div>
                                        </a>
                                        <a className="cw-button d-flex align-items-flex-end" title="Go back one stepUA">
                                            <div className="icon" dangerouslySetInnerHTML={{__html: BACK_ICON}}/>
                                            <div className="name">Back</div>
                                        </a>
                                    </div>
                                    <div className="cw-powered">Powered by</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-15 text-right">
                        <div className="form-group">
                            <label>{window.translates.window_chat_message_font_family}</label>
                            <Select
                                name={'chat_answer_ff'}
                                value={this.state.chat_answer_ff}
                                onChange={this.handleChangeSelect('chat_answer_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.window_chat_message_font_size}</label>
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
                            <label>{window.translates.window_chat_message_button_font_family}</label>
                            <Select
                                name={'chat_answer_btn_ff'}
                                value={this.state.chat_answer_btn_ff}
                                onChange={this.handleChangeSelect('chat_answer_btn_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.window_chat_message_button_font_size}</label>
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
                            <label>{window.translates.window_chat_answer_message_font_family}</label>
                            <Select
                                name={'chat_message_ff'}
                                value={this.state.chat_message_ff}
                                onChange={this.handleChangeSelect('chat_message_ff')}
                                options={fontSelect}
                            />
                        </div>
                        <div className="form-group">
                            <label>{window.translates.window_chat_answer_message_font_size}</label>
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
