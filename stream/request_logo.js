const http = require('http');
const request = require('request'); // npm install request
const path = require("path");
const fs = require('fs');
const basePath = path.join(__dirname, '..');

http
    .createServer((req, res)=>{
        /*fs.readFile(basePath+'/buffer/git.png', (err, data)=>{
            if (err) {
                res.end('file not exist');
            } else {
                var base64Image = data.toString('base64');
                res.writeHead(200, {'Content-Type': "text/html"});
                res.end('<img src="data:image/png;base64,'+ base64Image + '"/>');
            }
        })*/
        //fs.createReadStream(basePath+'/buffer/git.png').pipe(res);
        request('http://static.mukewang.com/static/img/common/logo.png?t=2.4').pipe(res);
    })
    .listen(3000);