const fs = require('fs');


const srcDir = `04-copy-directory/files`;
const destDir = `04-copy-directory/files-copy`;

fs.readdir(srcDir, { withFileTypes: true }, (err, files) => {
    if (err) {
        console.log(err)
    } else {
        fs.mkdir(destDir, function () {
            files.forEach((file) => {
                fs.copyFile(srcDir + '/' + file.name, destDir + '/' + file.name, () => {
                })
            })
        })

    }
})

