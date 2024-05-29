const http = require("http");
http.createServer(function(req, res) {
    let output = "";
    process.stdout.write = (chunk, encoding, callback) => {
        if (typeof chunk === "string") {
            output += chunk;
        }
    };

    if (req.method === "POST") {
        let body = "";
        req.on("data", (chunk) => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on("end", () => {
            let requestData = JSON.parse(body);

            output = "";

            const extra = requestData.extra || {};
            let data = {};
            let error = null;
            try {
                data = new Function("vars", `${requestData.handler}\n\nreturn ${requestData.function}(...vars)`)([
                    ...Object.values(extra),
                    requestData.variables,
                    requestData.globalVariables,
                ]);
            } catch (err) {
                const lines = err.stack.trim().split("\n");

                const errorLine = lines[0];

                const match = lines[1].match(/<anonymous>.*:(\d+):(\d+)/);
                const lineNumber = match && match[1] - 2;
                const columnNumber = match && match[2];

                error = {
                    message: errorLine,
                    lineNumber: lineNumber,
                    columnNumber: columnNumber,
                };
            }
            // eslint-disable-next-line no-control-regex
            res.end(JSON.stringify({ data, error, output: output.replace(/\u001b\[\d+m/g, "") }));
        });
    }
}).listen(3000);
