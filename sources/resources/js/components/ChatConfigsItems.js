export const TYPE_COLOR = 1;
export const TYPE_FONT_SIZE = 2;
export const TYPE_FONT_FAMILY = 3;
export const TYPE_INPUT = 4;
export const TYPE_SELECT = 5;
export const TYPE_TRANSLATE = 6;

const POSITION_VARIANTS = ['left', 'right'].map((position) => ({ value: position, label: position }));

export default  [
    {
        key: "header",
        name: "Header",
        items: [
            {
                key: "top_header",
                name: "Top Header",
                items: [
                    {
                        key: "window_header_bg",
                        name: "header_background",
                        type: TYPE_COLOR
                    },
                    {
                        key: "window_header_color",
                        name: "header_text_color",
                        type: TYPE_COLOR
                    },
                    {
                        key: "window_header_fs",
                        name: "header_font_size",
                        type: TYPE_FONT_SIZE
                    },
                    {
                        key: "window_header_ff",
                        name: "header_font_family",
                        type: TYPE_FONT_FAMILY
                    },
                    {
                        key: "header_title",
                        name: "header_title",
                        type: TYPE_TRANSLATE
                    }
                ]
            },
            {
                key: "bottom_header",
                name:"Bottom Header",
                items: [
                    {
                        key: "window_sub_header_bg",
                        name: "sub_header_background",
                        type: TYPE_COLOR
                    },
                    {
                        key: "window_sub_header_color",
                        name: "sub_header_text_color",
                        type: TYPE_COLOR
                    },
                    {
                        key: "dropdown_bg",
                        name: "dropdown_bg",
                        type: TYPE_COLOR
                    },
                    {
                        key: "bot",
                        name: "bot",
                        type: TYPE_TRANSLATE
                    },
                    {
                        key: "click_to_live",
                        name: "click_to_live",
                        type: TYPE_TRANSLATE
                    },
                    {
                        key: "live",
                        name: "live",
                        type: TYPE_TRANSLATE
                    },
                    {
                        key: "click_to_bot",
                        name: "click_to_bot",
                        type: TYPE_TRANSLATE
                    }
                ]
            }
        ]
    },
    {
        key: "content",
        name: "Content",
        items: [
            {
                key: "main",
                name: "Main",
                items: [
                    {
                        key: "window_content_bg",
                        name: "content_background",
                        type: TYPE_COLOR
                    },
                    {
                        key: "window_content_color",
                        name: "content_text_color",
                        type: TYPE_COLOR
                    },
                    {
                        key: "window_content_fs",
                        name: "content_font_size",
                        type: TYPE_FONT_SIZE
                    },
                    {
                        key: "window_content_ff",
                        name: "content_font_family",
                        type: TYPE_FONT_FAMILY
                    }
                ]
            },
            {
                key: "bot_message",
                name: "Bot or operator message",
                items: [
                    {
                        key: "chat_answer_bg",
                        name: "chat_answer_background",
                        type: TYPE_COLOR
                    },
                    {
                        key: "chat_answer_color",
                        name: "chat_answer_text_color",
                        type: TYPE_COLOR
                    },
                    {
                        key: "chat_answer_fs",
                        name: "chat_answer_message_font_size",
                        type: TYPE_FONT_SIZE
                    },
                    {
                        key: "chat_answer_ff",
                        name: "chat_answer_message_font_family",
                        type: TYPE_FONT_FAMILY
                    },
                    {
                        key: "welcome_live_chat_text",
                        name: "welcome_live_chat_text",
                        type: TYPE_TRANSLATE
                    }
                ]
            },
            {
                key: "bot_message_btn",
                name: "Bot message buttons",
                items: [
                    {
                        key: "chat_answer_btn_bg",
                        name: "chat_answer_button_background",
                        type: TYPE_COLOR
                    },
                    {
                        key: "chat_answer_btn_color",
                        name: "chat_answer_button_text_color",
                        type: TYPE_COLOR
                    },
                    {
                        key: "chat_answer_btn_fs",
                        name: "chat_message_button_font_size",
                        type: TYPE_FONT_SIZE
                    },
                    {
                        key: "chat_answer_btn_ff",
                        name: "chat_message_button_font_family",
                        type: TYPE_FONT_FAMILY
                    }
                ]
            },
            {
                key: "user_message",
                name: "User message",
                items: [
                    {
                        key: "chat_message_bg",
                        name: "chat_message_background",
                        type: TYPE_COLOR
                    },
                    {
                        key: "chat_message_color",
                        name: "chat_message_text_color",
                        type: TYPE_COLOR
                    },
                    {
                        key: "chat_message_fs",
                        name: "chat_message_font_size",
                        type: TYPE_FONT_SIZE
                    },
                    {
                        key: "chat_message_ff",
                        name: "chat_message_font_family",
                        type: TYPE_FONT_FAMILY
                    }
                ]
            },
            {
                key: "user_input",
                name: "User input",
                items: [
                    {
                        key: "input_placeholder_text_color",
                        name: "input_placeholder_text_color",
                        type: TYPE_COLOR
                    },
                    {
                        key: "input_bg_color",
                        name: "input_bg_color",
                        type: TYPE_COLOR
                    },
                    {
                        key: "input_text_color",
                        name: "chat_input_text_color",
                        type: TYPE_COLOR
                    },
                    {
                        key: "input_text_fs",
                        name: "input_text_font_size",
                        type: TYPE_FONT_SIZE
                    },
                    {
                        key: "input_text_ff",
                        name: "input_text_font_family",
                        type: TYPE_FONT_FAMILY
                    }
                ]
            },
            {
                key: "user_send_btn",
                name: "User send button",
                items: [
                    {
                        key: "input_send_btn_bg",
                        name: "input_send_btn_bg",
                        type: TYPE_COLOR
                    },
                    {
                        key: "input_send_btn_color",
                        name: "chat_input_send_button_color",
                        type: TYPE_COLOR
                    }
                ]
            }
        ]
    },
    {
        key: "footer",
        name: "Footer",
        items: [
            {
                key: "main",
                name: "Main",
                items: [
                    {
                        key: "window_footer_bg",
                        name: "footer_background",
                        type: TYPE_COLOR
                    },
                    {
                        key: "window_footer_color",
                        name: "footer_text_color",
                        type: TYPE_COLOR
                    },
                    {
                        key: "window_footer_fs",
                        name: "footer_font_size",
                        type: TYPE_FONT_SIZE
                    },
                    {
                        key: "window_footer_ff",
                        name: "footer_font_family",
                        type: TYPE_FONT_FAMILY
                    },
                    {
                        key: "window_footer_icon_color",
                        name: "footer_icon_color",
                        type: TYPE_COLOR
                    }
                ]
            }
        ]
    }
]

export const ButtonConfigsItems = [
    {
        key: "button",
        name: "Button",
        items: [
            {
                key: "colors",
                name: "Colors",
                items: [
                    {
                        key: "main_color",
                        name: "button_icon_color",
                        type: TYPE_COLOR
                    },
                    {
                        key: "secondary_color",
                        name: "button_background",
                        type: TYPE_COLOR
                    }
                ]
            },
            {
                key: "settings",
                name:"Settings",
                items: [
                    {
                        key: "size",
                        name: "size",
                        type: TYPE_INPUT
                    },
                    {
                        key: "auto_open_time",
                        name: "auto_open_time",
                        type: TYPE_INPUT
                    },
                    {
                        key: "position",
                        name: "position",
                        type: TYPE_SELECT,
                        variants: POSITION_VARIANTS
                    }
                ]
            }
        ]
    }
];