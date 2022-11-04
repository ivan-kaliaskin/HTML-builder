const fs = require('fs')
const path = require('path')

fs.readdir('03-files-in-folder/secret-folder', { withFileTypes: true }, (err, files) => {
    if (err)
        console.log(err);
    else {
        files.forEach((file, index) => {
            if (!file.isDirectory()) {
                let size = 0
                const path1 = "03-files-in-folder/secret-folder/" + file.name
                const statsObj = fs.stat(path1, (err, stats) => {
                    if (err) {
                        console.log('error', err)
                    } else {
                        console.log(path.basename(path1, path.extname(path1)) + ' - ' + path.extname(path1) + ' - ' + stats.size)
                    }
                })
            }
        })
    }
})