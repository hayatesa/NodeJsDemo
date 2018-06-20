const path = require("path");
const fs = require('fs');

var readStream = fs.createReadStream(__dirname+'/stream_copy_image.png');
var n = 0; // 记录一共读了多少次
// 监听事件
readStream
    .on('data', (chunk)=>{
        n++;
        console.log('data_emits');
        console.log(Buffer.isBuffer(chunk));
        console.log(chunk.toString('base64'));

        readStream.pause();
        console.log('data pause');
        setTimeout(()=>{
            console.log('data pause end');
            readStream.resume();
        },10)
    })
    .on('readable', ()=>{
        console.log('data readable');
    })
    .on('end', ()=>{
        console.log(n);
        console.log('data ends');
    })
    .on('close', ()=>{
        console.log('data close');
    })
    .on('error', (e)=>{
        console.log('data error: ' + e);
    });