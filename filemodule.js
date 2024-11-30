const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'curd');
const filePath = `${dirPath}/demo.txt`;

// fs.writeFileSync(filePath, 'This file is created under curd folder');

// fs.readFile(filePath, 'utf8',(err, item) => {
//     console.log(item);
// });

// fs.appendFile(filePath, 'adding more context to the curd file', (err) => {
//     if(!err) {
//         console.log('file is updated')
//     }
// })

// fs.rename(filePath, `${dirPath}/newdemo.txt`, (err) => {
//     if(!err) {
//         console.log('file renamed');
//     }
// });

// fs.unlinkSync(`${dirPath}/newdemo.txt`);