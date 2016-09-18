var http = require('http')
var map = require('through2-map')
var portNumber = Number(process.argv[2])

var server = http.createServer(function (req, res) {
	if (req.method !== 'POST')
		return res.end('The request method must be POST.')

	req.pipe(map(function (chunk) {
		return chunk.toString().toUpperCase()
	})).pipe(res)
})

server.listen(portNumber)