const http = require('http');

http.createServer((req, res) => {// 创建服务器
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.write('Hello NodeJS');
    res.end();
}).listen(3000);