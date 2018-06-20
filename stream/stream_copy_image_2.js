const path = require("path");
const fs = require('fs');

basePath = path.join(__dirname, '..');

const readStream = fs.createReadStream(basePath+'/buffer/git.png');
const writeStream = fs.createWriteStream(basePath+'/stream/stream_copy_image.png');

// 输入流有数据传入时，输出流同时输出
readStream.on('data', (chunk)=>{
    // 防止因读写速度差异造成缓冲区溢出
    if (writeStream.write(chunk) === false) { // 数据还在缓存区即未完全被writeStream输出
        console.log('still cached');
        readStream.pause(); // 暂停输入
    }
})

writeStream.on('drain', ()=>{
    console.log('data drains');
    readStream.resume();// 继续输入
})

readStream.on('end', ()=>{
    writeStream.end();
})

