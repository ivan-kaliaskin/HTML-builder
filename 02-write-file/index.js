const fs = require('fs')
const readline = require('readline')
const path = require('path');
const { stdin, stdout, exit } = require('process');


console.log('Hello')

fs.writeFile("filename.txt", '', function (err) {
    if (err) {
        console.log(err);
    }
});

const writebleStream = fs.createWriteStream('02-write-file/filename.txt')

stdin.on('data', (chunk) => {
    if (chunk.toString().trim() === 'exit') {
        stdout.write('Поток прекращён. Гуд лак!')
        exit()
    } else {
        writebleStream.write(chunk)
    }
})

process.on('SIGINT', () => {
    stdout.write('Поток прекращён. Гуд лак!')
    exit()
})