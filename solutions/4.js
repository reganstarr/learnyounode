var fs = require('fs')

fs.readFile(process.argv[2], function doneReading(err, buffer) {
	var string = buffer.toString()
	var array = string.split('\n')
	console.log(array.length - 1)
})