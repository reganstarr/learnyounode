var http = require('http')
var url = require('url')
var portNumber = Number(process.argv[2])

function parsetime (time) {
  return {
    hour: time.getHours(),
    minute: time.getMinutes(),
    second: time.getSeconds()
  }
}

function unixtime (time) {
	return {unixtime: time.getTime()}
}

var server = http.createServer(function (request, response) {
  var parsedUrl = url.parse(request.url, true)
  var time = new Date(parsedUrl.query.iso)
  var formattedTime

  if (/^\/api\/parsetime/.test(request.url))
    formattedTime = parsetime(time)
  else if (/^\/api\/unixtime/.test(request.url))
    formattedTime = unixtime(time)

  if (formattedTime) {
    response.writeHead(200, {'Content-Type': 'application/json'})
    response.end(JSON.stringify(formattedTime))
  } 
  else {
    response.writeHead(404)
    response.end()
  }
})
server.listen(portNumber)