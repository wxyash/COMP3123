const writeData = function (filename, data, loopcount) {
    const fs = require('fs')
    const file = fs.createWriteStream('./' + filename)
        for (let i = 0; i <= loopcount; i++) {
            file.write(data + '\n')
        }
    file.end()
}
module.exports = {
    writeData: writeData
}