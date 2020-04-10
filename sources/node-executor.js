const http = require('http');
http.createServer(function(req, res){
    if (req.method === 'POST') {
        let body = '';
        req.on('data', chunk => {
            body += chunk.toString(); // convert Buffer to string
        });
        req.on('end', () => {

            let requestData = JSON.parse(body);
            requestData.handler;

            let data = (new Function('response', 'variables', requestData.handler))(requestData.data || {}, requestData.variables);
            res.end(JSON.stringify(data));
        });
    }
    // res.end("Hello world!");
}).listen(3000);