const http = require('http');
const fs = require('fs');


const hostname = '127.0.0.1';
const port = 3000;

var js;
var css;
var html;

fs.readFile('boxy.css', function(err, data) {
    css = data;
});

fs.readFile('boxy.js', function(err, data) {
    js = data;
});

fs.readFile('boxy.html', function(err, data) {
    html = data;
})

const server = http.createServer((req, res) => {
    switch (req.url)
    {
        case "/boxy.css":
            res.writeHead(200, {"Content-type": "text/css"});
            res.write(css);
            break;
        case "/boxy.js":
            res.writeHead(200, {"Content-type": "text/js"});
            res.write(js);
            break;
        default:
            res.writeHead(200, {"Content-type": "text/html"});
            res.write(html);
            break;
    }
    res.end();
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});