const http = require('https');
var fs = require('fs')

var options = {
    key: fs.readFileSync('ssh_key.pem'), // 秘钥
    cert: fs.readFileSync('ssh_vert.pem') // 证书
}

https
    .createServer(options, (req, res)=>{
        res.writeHead(200);
        res.end('Hello Node');
    })
    .listen(3000);