const fs = require('fs')
const path = require('path')
const dirPath = path.join(__dirname, 'files')
console.log('Dir Path : ', dirPath)

for(i=0;i<5;i++) {
    fs.writeFileSync(`${dirPath}/data${i}.txt`, `This is data ${i} file` );
}

fs.readdir(dirPath, (err, items) => {
    console.log('files : ', items)
    items.forEach((item) => {
        console.log('File Name : ', item);
    })
})