const http = require('http')
const fs = require('fs')

http.createServer(function (request, response) {
  console.log('request come', request.url)

  if (request.url === '/') {
    const html = fs.readFileSync('test.html', 'utf8')
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end(html)
  }

  if (request.url === '/script.js') {
    
    const etag = request.headers['if-none-match']
    const Modified = request.headers['if-modified-since']
    // if (Modified === '123') {
    //   console.log(111111)
    //   response.writeHead(304, {
    //     'Content-Type': 'text/javascript',
    //     'Cache-Control': 'max-age=2000000, no-cache',
    //     'Last-Modified': '123',
    //     'Etag': '777'
    //   })
    //   response.end('console.log(1111111)')
    // }
    if (etag === '777') {
      console.log(222222)
      response.writeHead(304, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=2000000, no-cache',
        'Last-Modified': '123',
        'Etag': '777'
      })
      response.end('console.log(222222)')
    } else {
      console.log(333333)
      response.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=2000000, no-cache',
        'Last-Modified': '123',
        'Etag': '777'
      })
      response.end('console.log("script loaded twice")')
    }
  }
}).listen(8888)

console.log('server listening on 8888')