const http = require("http");
http.createServer(function(req, res) {
    if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on("end", () => {
            let requestData = JSON.parse(body);

            const extra = requestData.extra || {};
            let data = {};
            try {
                data = new Function(...Object.keys(extra), "variables", "globalVariables", requestData.handler)(
                    ...Object.values(extra),
                    requestData.variables,
                    requestData.globalVariables,
                );
            } catch (e) {
                //do nothing
            }

            res.end(JSON.stringify(data));
        });
    }
}).listen(3001);
