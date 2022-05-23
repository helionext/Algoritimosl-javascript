const fs = require('fs');
const path = require('path');


const DELETE_ARQUIVOS = ['.git', '.gitignore', 'node_modules', 'package-lock.json', 'package.json', 'main.js']
const allFiles = []



fs.readdir(__dirname,(err, files) => {
    if(err) return console.error(err)

    allFiles.push(...files)
})

    



setTimeout(() => {
    for (let i = 0; i < allFiles.length; i++) {
    
        for (let j = 0; j < DELETE_ARQUIVOS.length; j++) {
            if(allFiles[i] === DELETE_ARQUIVOS[j]) delete allFiles[i]
        }
    }
}, 1000)


setTimeout(() => {
    console.log(allFiles)

}, 2000)
