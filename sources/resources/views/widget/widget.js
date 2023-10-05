HelpChatWidget = {
    host: "",
    init: function(options) {
        const host = this.host;
        var selector = options.options.selector;
        var position = options.options.position;
        var iframe = document.createElement("iframe");

        var itemHeight = 0;
        var itemWidth = 0;

        iframe.style = "border:none; bottom:0; width:0; height:0; z-index: 9999;" + (selector ? "" : "position: fixed");
        iframe.allowFullscreen = true;
        var setIframeAsSize = function() {
            iframe.style.height = itemHeight + "px";
            iframe.style.width = itemWidth + "px";

            if (position === "left") {
                iframe.style.right = "unset";
                iframe.style.left = "0";
            } else {
                iframe.style.right = "0";
                iframe.style.left = "unset";
            }
            sendIsEnoughSize();
        };

        var sendIsEnoughSize = function() {
            if (window.innerHeight < itemHeight || window.innerWidth < itemWidth) {
                postMessageToChatBox("sizeIsNotEnough");
            } else {
                postMessageToChatBox("sizeEnough");
            }
        };

        function postMessageToChatBox(type, params) {
            iframe.contentWindow.postMessage(JSON.stringify({ type: type, params: params }), "*");
        }

        window.onresize = sendIsEnoughSize;

        var url = window.location.href;

        iframe.src =
            host +
            "/frame/" +
            options.company +
            "/" +
            options.integration +
            "?embed=" +
            +!!selector +
            "&hostUrl=" +
            encodeURIComponent(url);

        iframe.dataset.url = window.location.href;
        iframe.allow = "geolocation";

        if (selector) {
            document.querySelector(selector).appendChild(iframe);
        } else {
            document.body.insertBefore(iframe, document.body.getElementsByTagName("*")[0]);
        }

        window.addEventListener("message", receiveMessage, false);

        function receiveMessage(event) {
            if (event.origin !== host) return;
            var message = typeof event.data === "string" ? JSON.parse(event.data) : event.data;

            var action = message.event;

            switch (action) {
                case "resize":
                    itemHeight = message.height;
                    itemWidth = message.width;
                    setIframeAsSize();
                    break;
                case "full-screen":
                    iframe.style.height = "100%";
                    iframe.style.width = "100%";
                    break;
                case "wait-cookie": {
                    const cookies = document.cookie.match(new RegExp(`(^| )_pcht_cuid=([^;]+)`));
                    let cookie = cookies && cookies[2];
                    postMessageToChatBox("auth", { auth: cookie });
                    break;
                }
                case "ready": {
                    const defaultVariables = options.options.defaultVariables;
                    if (defaultVariables && Object.keys(defaultVariables).length) {
                        postMessageToChatBox("setVariables", defaultVariables);
                    }

                    if (options.options.quietTrigger) {
                        postMessageToChatBox("postMessage", {
                            message: null,
                            payload: "quiet",
                            trigger: options.options.quietTrigger,
                        });
                    }
                }
            }
        }
        window.chatOpen = function(message) {
            postMessageToChatBox("open");
        };
        window.chatSendMessage = function(message) {
            postMessageToChatBox("postMessage", { message: message });
        };
        window.setClientVariables = function(variables) {
            postMessageToChatBox("setVariables", variables);
        };
        window.chatTriggerEvent = function(message, trigger, payload) {
            postMessageToChatBox("postMessage", {
                message: message,
                payload: payload,
                trigger: trigger,
            });
        };
    },
};
