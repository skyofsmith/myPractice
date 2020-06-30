const http2 = require('http2');
const fs = require('fs');
const path = require('path');

const server = http2.createSecureServer({
  key: fs.readFileSync(path.resolve(__dirname, '../ssl/key.pem')),
  cert: fs.readFileSync(path.resolve(__dirname, '../ssl/cert.pem'))
});
server.on('error', (err) => console.error(err));
const fileCache = {}
server.on('stream', (stream, headers) => {
  const {[':method']: method, [':path']: address} = headers;
  let body = '';
  let contentType = '';
  let status = 200;
  switch (method) {
    case 'GET':
      let url = '';
      const [p, q] = address.split('?');
      if (p === '/') {
        url = 'index.html';
      } else {
        url = p;
      }
      const fPath = path.join(__dirname, '../public', url);
      const state = fs.statSync(fPath);
      if (state) {
        if (fileCache[fPath]) {
          body = fileCache[fPath];
        } else {
          console.log('read from disk: ', fPath);
          body = fs.readFileSync(fPath);
          fileCache[fPath] = body;
        }
      } else {
        status = 404;
      }
      if(p.endsWith('html')) {
        contentType = 'text/html; charset=utf-8';
      } else if (p.endsWith('js')) {
        contentType = 'text/javascript; charset=utf-8';
      } else if (p.endsWith('png')) {
        contentType = 'image/png';
      }
      break;
    default:
      status = 404;
  }
  // 流是一个双工流。
  stream.respond({
    'content-type': contentType,
    ':status': status
  });
  stream.end(body, 'utf-8');
});

server.listen(8443);