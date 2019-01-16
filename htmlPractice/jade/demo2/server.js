var http = require('http')
var jade = require('jade')

http.createServer(function (req, res) {
  res.writeHead(200, {
    'Content-Type': 'text/plain'
  })

  // compile
  var fn = jade.compile('div #{course}', {})
  var html = fn({
    course: 'jade.compile'
  })

  // render
  var html = jade.render('div #{course}', {
    course: 'jade.render'
  })

  // renderFile
  var html = jade.renderFile('index.jade', {
    course: 'jade.renderFile',
    pretty: true
  })
  res.end(html)
}).listen(1337, '127.0.0.1')
console.log('server run at 127.0.0.1:1337')