const fs = require('fs')
const fsPromises = require('node:fs/promises')
const path = require('path')

const srcDir = '05-merge-styles/styles'
const destFile = '05-merge-styles/project-dist/bundle.css'

fs.rm(destFile, () => { })

async function f() {
    try {
        const files = await fsPromises.readdir(srcDir, { withFileTypes: true });
        for (let i = 0; i < files.length; i++) {
            if (path.extname(srcDir + '/' + files[i].name) === '.css') {
                const read = await fsPromises.readFile(srcDir + '/' + files[i].name, { encoding: 'utf8' });
                const write = await fsPromises.appendFile(destFile, read)
            }
        }
    } catch (err) {
        console.error(err);
    }
}
f();