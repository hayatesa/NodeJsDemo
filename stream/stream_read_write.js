const Readable = require('stream').Readable; // 构造函数
const Writable = require('stream').Writable;

const readStream = new Readable();
const writeStream = new Writable();

readStream.push('I');
readStream.push('Love ');
readStream.push('NodeJs\n');
readStream.push(null);

writeStream._write = (chunk, encode, cb)=>{
    console.log(chunk.toString());
    cb();
}

readStream.pipe(writeStream);