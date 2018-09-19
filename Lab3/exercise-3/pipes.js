var request = require('request')
var writer = require('../exercise-2/writer')
var fs = require('fs')
request('http://www.google.com', function (error, res, body) {
    // console.log('Body: ', body)
    writer.writeData('output.html', body, 1)
})
