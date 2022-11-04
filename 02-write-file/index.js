const fs = require('fs')
const readline = require('readline')
const path = require('path');
const { stdin, stdout, exit } = require('process');

// readline.emitKeypressEvents(process.stdin)
// if(process.stdin.isTTY) process.stdin.setRawMode(true)

console.log('Hello')

fs.writeFile("filename.txt", '', function(err){
    if (err) {
        console.log(err);
    }
});

const writebleStream = fs.createWriteStream(path.join(__dirname, 'filename.txt'))

stdin.on('data', (chunk)=>{
    if(chunk.toString().trim() === 'exit'){
        stdout.write('Поток прекращён. Гуд лак!')
        exit()
    }
    writebleStream.write(chunk)
})

process.on('SIGINT', ()=>{
    stdout.write('Поток прекращён. Гуд лак!')
    exit()
})