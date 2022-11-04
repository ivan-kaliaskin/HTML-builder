let fs = require('fs')

let reader = fs.createReadStream('01-read-file/text.txt')

reader.on('data', function(chunk){
    console.log(chunk.toString())
})
