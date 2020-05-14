HelpChatWidget = {
    host: "",
    init: function(options) {
            const host = this.host;
            var selector = options.options.selector;
            var position = options.options.position;
            var iframe = document.createElement("iframe");

            var itemHeight = 0;
            var itemWidth = 0;

            iframe.style = "border:none; bottom:0; width:0; height:0;  position: fixed; z-index: 9999;";

            var setIframeAsSize =function(){
                iframe.style.height = itemHeight  + 'px';
                iframe.style.width = itemWidth  + 'px';

                if(position === 'left') {
                    iframe.style.right = 'unset';
                    iframe.style.left = '0';
                } else {
                    iframe.style.right = '0';
                    iframe.style.left = 'unset';
                }
                sendIsEnoughSize();
            };

            var sendIsEnoughSize = function() {

                if(window.innerHeight < itemHeight ||
                    window.innerWidth < itemWidth) {
                    iframe.contentWindow.postMessage('sizeIsNotEnough', '*')
                } else {
                    iframe.contentWindow.postMessage('sizeEnough', '*')
                }
            };

            window.onresize = sendIsEnoughSize

            var url = window.location.href;

            iframe.src = host + "/frame/" + options.company + "/" + options.agent + '?embed='+(+!!selector)+'&hostUrl=' + encodeURIComponent(url)

            iframe.dataset.url = window.location.href;
            iframe.allow = 'geolocation';

            if(selector) {
                document.querySelector(selector).appendChild(iframe);
            } else {
                document.body.insertBefore(iframe,document.body.getElementsByTagName("*")[0])
            }

            window.addEventListener("message", receiveMessage, false);

            function receiveMessage(event)
            {
                if (event.origin !== host)
                    return;
                var message = JSON.parse(event.data);

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
                }
            }
    }
}

