const http = require('http')

http.createServer(function (request, response) {
  console.log('request come', request.url)
  console.log('host',request.headers.host)
  console.log('cookie',request.headers.cookie)
  response.writeHead(200, {
    // 'Access-Control-Allow-Origin': 'http://127.0.0.1:8888',
    // 'Access-Control-Allow-Headers': 'X-Test-Cors',
    // 'Access-Control-Allow-Methods': 'POST, PUT, DELETE',
    // 'Access-Control-Max-Age': '1000'
    'Access-Control-Allow-Credentials':true
  })
  response.end('123')
}).listen(8887)

console.log('server listening on 8887')