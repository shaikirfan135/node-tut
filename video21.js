const express = require('express');
const path = require('path');

const app = express();
const publicDirPath = path.join(__dirname, 'public');

console.log("publicDirPath", publicDirPath);

app.use(express.static(publicDirPath));

app.listen(5000);