import React from 'react';
import {find} from 'lodash';
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
import ChatConfigsItems, {
    ButtonConfigsItems,
    TYPE_COLOR,
    TYPE_FONT_FAMILY,
    TYPE_FONT_SIZE,
    TYPE_INPUT,
    TYPE_SELECT, TYPE_TRANSLATE
} from "./ChatConfigsItems";
import ColorPicker from "./ColorPicker";
import axios from "axios";
import AudioLoader from "./AudioLoader";
import TranslateField from "./TranslateField";
import ImageLoader from "./ImageLoader";

let fonts = [
    'Raleway',
    'Open Sans',
    'Montserrat',
    'Playfair Display',
    'Poppins',
    'Roboto',];

const FONT_VARIANTS = fonts.map((font) => ({ value: font, label: font }));

export default class Color extends React.Component {


    constructor(props) {
        super(...arguments);
        let styles = JSON.parse(props.styles);
        this.state = {
            name: props.name,
            logo: props.logo ? JSON.parse(props.logo) : {},
            default_operator_img: props.default_operator_img ? JSON.parse(props.default_operator_img) : {},
            hasLive: props.has_live,
            message_notification_id: null,
            message_notification: props.message_notification,
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
            position: {label: styles.position, value: styles.position},
            size: styles.size,
            auto_open_time: styles.auto_open_time,
            header_title: styles.header_title,
            bot: styles.bot,
            click_to_bot: styles.click_to_bot,
            live: styles.live,
            click_to_live: styles.click_to_live,
            welcome_live_chat_text: styles.welcome_live_chat_text,

            menu: null,
            submenu: null,
        };

        this.saveConfigs = this.saveConfigs.bind(this);

    }

    getData() {
        let data = {};
        [ChatConfigsItems, ButtonConfigsItems].map((config) => {
            config.map((main) => {
                main.items.map(({items}) => items.map((item) => {
                    let value = null;
                    let name = item.key;
                    switch (item.type) {
                        case TYPE_SELECT:
                        case TYPE_FONT_FAMILY:
                            value = this.state[name].value;
                            break;
                        default:
                            value = this.state[name];
                    }

                    data[name] = value;

                }))
            });
        });

        return {
            name: this.state.name,
            logo_id: this.state.logo.id,
            default_operator_img_id: this.state.default_operator_img.id,
            message_notification_id: this.state.message_notification_id,
            config: data
        }

    }

    handleChangeColor(attribute) {
        return (color) => {
            this.setState({ [attribute]: color.hex });
        }
    }
    handleChangeTranslate(attribute) {
        return (value) => {
            this.setState({ [attribute]: value });
        }
    }

    handleChangeTextInput(attribute) {
        return (e) => {
            let value = e.target.value;
            this.setState({[attribute]: value});
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

    openMenu(menu = null, submenu = null) {
        this.setState({
            menu,
            submenu
        })
    }

    openMenuClicker(menu, submenu) {
        return (e) => {
            e.stopPropagation();
            e.preventDefault();

            this.openMenu(menu, submenu)

        }
    }

    getCurrentItems(configs) {
        const {menu, submenu} = this.state;

        if(!menu || !submenu) {
            return [];
        }
        let currentMenu = find(configs, {key: menu});

        if(!currentMenu) {
            return [];
        }

        let currentSubmenu = find(currentMenu.items, {key: submenu});

        if(!currentSubmenu) {
            return [];
        }

        return currentSubmenu.items;

    }

    renderField(item) {
        const {type, key, name} = item;
        let value = this.state[key];
        let content = null;

        switch (type) {
            case TYPE_COLOR:
                content = <ColorPicker
                    value={value}
                    name={key}
                    onChange={this.handleChangeColor(key)}
                />;
                break;
            case TYPE_FONT_FAMILY:
                content = <Select
                    name={key}
                    value={value}
                    onChange={this.handleChangeSelect(key)}
                    options={FONT_VARIANTS}
                />;
                break;
            case TYPE_FONT_SIZE:
                content = <input
                        className="form-control"
                        name={key}
                        type="number"
                        min="10"
                        max="20"
                        value={value}
                        onChange={this.handleChangeInput(key)}
                />;
                break;
            case TYPE_INPUT:
                content = <input
                    type="text"
                    name={key}
                    value={value}
                    className="form-control"
                    onChange={this.handleChangeTextInput(key)}
                />;
                break;
            case TYPE_SELECT:
                content = <Select
                    name={key}
                    value={value}
                    onChange={this.handleChangeSelect(key)}
                    options={item.variants}
                />;
                break;
            case TYPE_TRANSLATE:
                content = <TranslateField
                    name={key}
                    value={value}
                    onChange={this.handleChangeTranslate(key)}
                />;
                break;
        }


        return (
            <div  key={key} className="form-group">
                <label>{window.translates[name]}</label>
                {content}
            </div>
        )
    }

    saveConfigs() {
        if(this.props.id) {
            axios.patch(`/configs/${this.props.id}`, this.getData());
        } else {
            axios.post(`/configs/`, this.getData());
        }
        window.location.href = '/configs';
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12 col-md-4 offset-md-4">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                name="name"
                                value={this.state.name}
                                className="form-control"
                                onChange={this.handleChangeTextInput('name')}
                                required
                            />
                        </div>
                        <ImageLoader
                            onChange={(logo) => this.setState({logo})}
                            label="Chat Logo"
                            default='/img/default_chat_logo.svg'
                            value={this.state.logo}
                        />
                        {this.state.hasLive &&
                            [<ImageLoader
                                onChange={(default_operator_img) => this.setState({default_operator_img})}
                                label="Default operator image"
                                default='/img/default_operator_img.svg'
                                value={this.state.default_operator_img}
                            />,
                            <AudioLoader
                                onChange={(id) => this.setState({message_notification_id: id})}
                                label="Message Notification"
                                default='/audio/notification.mp3'
                                value={this.state.message_notification}
                            />]
                        }
                    </div>
                </div>
                <div className="row">
                    {this.getStyle()}
                    <div className="col-xl-3 col-lg-6">
                        <div className="colors-menu">
                            <ul>
                                {ButtonConfigsItems.map((param) => {
                                    const {key: mainMenu, name, items} = param;
                                    return <li
                                        key={mainMenu}
                                    >
                                        <div className="menu-item" onClick={this.openMenuClicker(mainMenu)} >{name}</div>
                                        {
                                            this.state.menu === mainMenu &&
                                            <ul>
                                                {
                                                    items.map((item) => {
                                                        const {key, name} = item;
                                                        return (
                                                            <li
                                                                onClick={this.openMenuClicker(mainMenu, key)}
                                                                key={key}
                                                                className={`sub-menu-item ${this.state.submenu === key  ? 'active' : ''}`}
                                                            >
                                                                {name}
                                                            </li>)
                                                    })
                                                }
                                            </ul>
                                        }
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        {this.getCurrentItems(ButtonConfigsItems).map((item) => {
                            return this.renderField(item);
                        })}
                    </div>
                    <div className="col-xl-5 col-lg-12 d-flex align-items-end">
                        <div className="position-relative d-flex justify-content-center align-items-center" style={{width: '100%', height: '100px'}}>
                            <a className="chat-btn show hover-element" onClick={this.openMenuClicker('button', 'colors')}>
                                <div className="img-icon show" dangerouslySetInnerHTML={{__html: IMG_ICON}}></div>
                            </a>
                        </div>
                    </div>
                </div>
                <br/>
                <hr/>
                <div className="row">
                    <div className="col-xl-3 col-lg-6">
                        <div className="colors-menu">
                            <ul>
                                {ChatConfigsItems.map((param) => {
                                    const {key: mainMenu, name, items} = param;
                                    return <li
                                        key={mainMenu}
                                    >
                                        <div className="menu-item" onClick={this.openMenuClicker(mainMenu)} >{name}</div>
                                            {
                                                this.state.menu === mainMenu &&
                                                <ul>
                                                    {
                                                        items.map((item) => {
                                                            const {key, name} = item;
                                                            return (
                                                                <li
                                                                    onClick={this.openMenuClicker(mainMenu, key)}
                                                                    key={key}
                                                                    className={`sub-menu-item ${this.state.submenu === key  ? 'active' : ''}`}
                                                                >
                                                                    {name}
                                                                </li>)
                                                        })
                                                    }
                                                </ul>
                                            }
                                    </li>
                                })}
                            </ul>
                        </div>
                    </div>
                    <div className="col-xl-4 col-lg-6">
                        {this.getCurrentItems(ChatConfigsItems).map((item) => {
                            return this.renderField(item);
                        })}
                    </div>
                    <div className="col-xl-5 col-lg-12 d-flex justify-content-center">
                        {this.renderChatWindow()}
                    </div>
                </div>
                <button onClick={this.saveConfigs} className="mt-4 btn btn-primary pull-right text-uppercase">Save</button>
            </div>
        );
    }

    getStyle() {
        return <style>
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

						.chat-btn .img-icon,
						.chat-btn .img-icon svg {
						    width: ${~~(this.state.size/2)}px;
						    height: ${~~(this.state.size/2)}px;
						    position: absolute;
						}

						.chat-btn {
							width: ${(this.state.size - 2)}px;
							height: ${(this.state.size - 2)}px;
							border-color: ${this.state.main_color};
							background-color: ${this.state.secondary_color};
							bottom: ${(this.state.size/10+10)}px;
							${this.state.position.value}: ${(this.state.size/10+10)}px;
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

                        .chat-window .cw-content .messages .message-item .time {
                        	color: ${this.state.window_content_color};
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
    }

    getFirstFromSate(key) {
        const value = this.state[key];
        return value[Object.keys(value)[0]] || '';
    }

    renderChatWindow() {
        return <div className="chat-window show">
            <div className="cw-header">
                <div onClick={this.openMenuClicker('header', 'top_header')} className="hover-element top-header d-flex justify-content-space-between align-items-center">
                    <div className="d-flex align-items-center">
                        <div className="logo">
                            <img src={this.state.logo ? `/storage/${this.state.logo.path}` : '/img/default_chat_logo.svg'}/>
                        </div>
                        <div className="name">{this.getFirstFromSate('header_title')}</div>
                    </div>
                    <div className="d-flex justify-content-space-between align-items-center">
                        <a>
                            <div className="icon" dangerouslySetInnerHTML={{__html: FULL_SCREEN_ICON}}/>
                        </a>
                        <a>
                            <div className="icon" dangerouslySetInnerHTML={{__html: CLOSE_ICON}}/>
                        </a>
                    </div>
                </div>
                <div onClick={this.openMenuClicker('header', 'bottom_header')} className="hover-element bottom-header d-flex justify-content-space-between align-items-center">
                    <div>
                        <a className="chat-select">
                            <div className="d-flex align-items-center">
                                <div className="flip-container">
                                    <div className="flipper">
                                        {this.state.hasLive ?
                                            <div className="front">
                                                <div className="icon">
                                                    <img src={this.state.default_operator_img ? `/storage/${this.state.default_operator_img.path}` : '/img/default_operator_img.svg'}/>
                                                </div>
                                                <img className="click" src="" alt=""/>
                                                <span
                                                    className="click-to shake">{this.getFirstFromSate('click_to_live')}</span>
                                            </div>
                                            :
                                            <div className="front">
                                                <div className="icon"
                                                     dangerouslySetInnerHTML={{__html: BOT_ICON}}></div>
                                                <img className="click" src="" alt=""/>
                                            </div>
                                        }
                                        <div className="back">
                                            <div className="icon"></div>
                                            <img className="click" src="" alt=""/>
                                        </div>
                                    </div>
                                </div>
                                <div className="sevice-name">
                                    <span>{this.getFirstFromSate('bot')}</span>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div>
                        <div>
                            <a className="social-dropdown">
                                <div className="social-icon"
                                     dangerouslySetInnerHTML={{__html: FACEBOOK_ICON}}></div>
                            </a>
                            <div className="social-dropdown-menu show hover-element"  onClick={this.openMenuClicker('header', 'bottom_header')}>
                                <a className="social-item">
                                    <div className="social-icon"
                                         dangerouslySetInnerHTML={{__html: FACEBOOK_ICON}}></div>
                                </a>
                                <a className="social-item">
                                    <div className="social-icon"
                                         dangerouslySetInnerHTML={{__html: WHATSAPP_ICON}}></div>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="show">
                <div className="cw-content hover-element" onClick={this.openMenuClicker('content', 'main')}>
                    <div className="c-content">
                        <div className="operator-message">
                            <div className="image-block">
                                <div className="image d-flex">
                                    <div className="d-flex align-items-center justify-content-center"
                                         dangerouslySetInnerHTML={{__html: BOT_ICON}}/>
                                </div>
                            </div>
                            <div className="messages">
                                <div className="message-item">
                                    <div className="message hover-element" onClick={this.openMenuClicker('content', 'bot_message')}>
                                        <div>
                                            <p>Message text 1</p>
                                        </div>
                                        <div className="select">
                                            <label className="button hover-element" onClick={this.openMenuClicker('content', 'bot_message_btn')}>
                                                <input name="id" type="checkbox" value="1"/>
                                                button 1
                                            </label>
                                            <label className="button hover-element" onClick={this.openMenuClicker('content', 'bot_message_btn')}>
                                                <input name="id" type="checkbox" value="2"/>
                                                button 2
                                            </label>
                                            <label className="button hover-element" onClick={this.openMenuClicker('content', 'bot_message_btn')}>
                                                <input name="id" type="checkbox" value="3"/>
                                                button 3
                                            </label>
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
                                    <div className="message hover-element" onClick={this.openMenuClicker('content', 'user_message')}>Message text 2</div>
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
                                    <div className="d-flex align-items-center justify-content-center"
                                         dangerouslySetInnerHTML={{__html: BOT_ICON}}/>
                                </div>
                            </div>
                            <div className="messages">
                                <div className="message-item">
                                    <div className="message hover-element" onClick={this.openMenuClicker('content', 'bot_message')}>Message text 3</div>
                                    <div className="time">14:01</div>
                                </div>
                            </div>
                        </div>
                        <div className="user-message">
                            <div className="messages">
                                <div className="message-item">
                                    <div className="time">14:02</div>
                                    <div className="message hover-element" onClick={this.openMenuClicker('content', 'user_message')}>Message text 4</div>
                                </div>
                            </div>
                            <div className="image-block">
                                <div className="image">
                                </div>
                            </div>
                        </div>
                        <p className="welcome-message">Text example</p>
                    </div>
                    <div className="c-footer">
                        <div>
                            <textarea
                                placeholder="Start typing here...UA"
                                className="user-input hover-element"
                                onClick={this.openMenuClicker('content', 'user_input')}
                            >
                            </textarea>
                            <button type="button" className="send-button hover-element" onClick={this.openMenuClicker('content', 'user_send_btn')}>
                                <div dangerouslySetInnerHTML={{__html: SEND_ICON}}></div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className="cw-footer d-flex justify-content-space-between align-items-flex-end hover-element" onClick={this.openMenuClicker('footer', 'main')}>
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
        </div>;
    }
}
