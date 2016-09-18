var module = require('./6_module.js')
var folder = process.argv[2]
var extension = process.argv[3]

module(folder, extension, function (err, list) {
	if (err)
		return console.error(err)

	list.forEach(function (file) {
		console.log(file)
	})
})