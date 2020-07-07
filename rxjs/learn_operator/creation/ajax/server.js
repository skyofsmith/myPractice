const http = require('http');

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,POST,HEAD,OPTIONS',
        'Access-Control-Allow-Headers': 'X-PINGOTHER, Content-Type',
        'Content-Type': 'application/json'
    });
    res.end('{ "success": true, "data": {} }');
});

server.listen(8090, () => {
    console.log('server start at http://localhost:8090')
});
