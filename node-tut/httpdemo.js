const http = require('http');
const fn = (req, res) => {
    res.write('<h1>This is Node JS!</h1>')
    res.end();
}
http.createServer(fn).listen(4500);
