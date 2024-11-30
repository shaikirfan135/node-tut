// console.log(process.argv[2])
// run using node ./processmodule.js Irfan 100

const fs = require('fs');
//const input= process.argv;
//fs.writeFileSync(input[2], input[3]);
//run node .\processmodule.js resume.txt 'My Java Resume'

const input = process.argv;

if(input[2] == 'add') {
    console.log('Adding File ', input[3]);
    fs.writeFileSync(input[3], input[4]);
    console.log('File Created Successfully.');
} else if(input[2] == 'del'){
    console.log('Deleting File ', input[3])
    fs.unlinkSync(input[3]);
    console.log('File Deleted Successfully.');
} else {
    console.log('Invalid Input.');
}
//node .\processmodule.js add resume.txt 'Hi This is Irfan, I have 13Yrs of Experience in Java and Related Technologies.' 
//node .\processmodule.js del resume.txt         
