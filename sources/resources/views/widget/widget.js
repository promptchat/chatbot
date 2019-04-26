HelpChatWidget = {
    init: function(options) {
            var d=document.createElement("div");
            var style = document.createElement("style");
            var configs = options.options || {};
            var position = configs.position || 'right';
            style.innerHTML = "  #help-button-wrapper {\n" +
                "        position: fixed;\n" +
                "        z-index: 999999;\n" +
                "        "+position+": 10px;\n" +
                "        bottom: 10px;\n" +
                "    }"

            var isMobile = document.body.clientWidth <= 500 || document.body.clientHeight <= 500

            const overflow = document.body.style.overflow

            d.style.width = "0"
            d.style.height = "0"
            d.id = "help-button-wrapper"
            document.body.insertBefore(d,document.body.getElementsByTagName("*")[0])
            document.body.appendChild(style,document.head)
            var iframe = document.createElement("iframe")
            iframe.style = "width:100%; height:100%; border:none"
            var src = '&isMobile=' + isMobile;
            var url = window.location.href;
            if(options.company && options.agent) {
                iframe.src = host + "/frame/" + options.company + "/" + options.agent + '?hostUrl=' + encodeURIComponent(url) + src
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
                        document.body.style.overflow = overflow
                        break;

                    case "full-screen":
                        d.style.height = "100%";
                        d.style.width = "100%";
                        d.style.right = "0";
                        d.style.left = "0";
                        d.style.bottom = "0";
                        document.body.style.overflow = 'hidden'
                        break;
                }
            }
    }
}

