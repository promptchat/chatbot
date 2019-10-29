HelpChatWidget = {
    init: function(options) {
            var selector = options.options.selector;

            var d=document.createElement("div");
            if(selector) {
              document.querySelector(selector).appendChild(d);

            } else {
                var style = document.createElement("style");
                var configs = options.options || {};
                var position = configs.position || 'right';
                style.innerHTML = "  #help-button-wrapper {\n" +
                    "        position: fixed;\n" +
                    "        z-index: 999999;\n" +
                    "        "+position+": 0;\n" +
                    "        bottom: 0;\n" +
                    "    }";
                d.style.width = "0";
                d.style.height = "0";

                d.id = "help-button-wrapper";
                document.body.appendChild(style,document.head);
                document.body.insertBefore(d,document.body.getElementsByTagName("*")[0])

            }
            var html = document.getElementsByTagName('html')[0]
            var isMobile = html.clientWidth <= 500 || html.clientHeight <= 500;

            const overflow = document.body.style.overflow;



            var iframe = document.createElement("iframe");
            iframe.style = "width:100%; height:100%; border:none";
            var src = '&isMobile=' + isMobile;
            var url = window.location.href;
            if(options.company && options.agent) {
                iframe.src = host + "/frame/" + options.company + "/" + options.agent + '?embed='+(+!!selector)+'&hostUrl=' + encodeURIComponent(url) + src
            } else {
                iframe.src = host + "/create-widget/?config=" + encodeURIComponent(JSON.stringify(options)) + src
            }
            iframe.dataset.url = window.location.href;
            iframe.allow = 'geolocation';

            d.appendChild(iframe);

            window.addEventListener("message", receiveMessage, false);

            function receiveMessage(event)
            {
                if (event.origin !== host)
                    return;
                var message = JSON.parse(event.data);

                var action = message.event;
                var data = message.data;

                if(message.agent !== options.agent) {
                    return;
                }
                switch (action) {
                    case "resize":
                        if(data.height) {
                            d.style.height = data.height
                        }
                        if(data.width) {
                            d.style.width = data.width
                        }
                        d.style.right = null;
                        d.style.left = null;
                        d.style.bottom = null;
                        if(!selector) {
                            document.body.style.overflow = overflow
                        }
                        break;

                    case "full-screen":
                        d.style.height = "100%";
                        d.style.width = "100%";
                        d.style.right = "0";
                        d.style.left = "0";
                        d.style.bottom = "0";
                        if(!selector) {
                            document.body.style.overflow = 'hidden'
                        }

                        break;
                }
            }
    }
}

