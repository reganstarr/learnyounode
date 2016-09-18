var net = require('net')
var portNumber = Number(process.argv[2])

function addLeadingZero(number) {
	if (number < 10) {
		return '0' + number
	}
	else {
		return number
	}
}

function now() {
	var now = new Date()
	return now.getFullYear() + '-' + addLeadingZero(now.getMonth() + 1) + '-' + addLeadingZero(now.getDate()) + ' ' + addLeadingZero(now.getHours()) + ':' + addLeadingZero(now.getMinutes())
}

var server = net.createServer(function (socket) {
	socket.end(now() + '\n')
})

server.listen(portNumber)