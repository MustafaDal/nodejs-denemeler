var http = require('http');
var fs = require('fs');

// 404 response
function send404Response (response) {
    response.writeHead(404, {"Content-type":"text/plain"});
    response.write("Error 404: Page not Found!");
    response.end();
}

// hande a user request
function onRequest (req, res) {
    if(req.method == 'GET' && req.url == '/'){
        res.writeHead(200, {"Content-type":"text/html"});
        fs.createReadStream("./index.html").pipe(res); // pipe netti
    }
    else
        send404Response(res);
}

http.createServer(onRequest).listen(3000);
console.log("Server is now running....");