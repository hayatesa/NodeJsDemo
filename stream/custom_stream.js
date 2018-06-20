const stream = require('stream');
const util = require('util');

function ReadStream() {
    stream.Readable.call(this);
}

util.inherits(ReadStream, stream.Readable);

ReadStream.prototype._read = function () {
    this.push('I');
    this.push('Love ');
    this.push('NodeJs\n');
    this.push(null);
}

function  WriteStream() {
    stream.Writable.call(this);
    this._cached = new Buffer('');
}

util.inherits(WriteStream, stream.Writable);

WriteStream.prototype._write = function (chunk, encode, cb) {
    console.log(chunk.toString());
    cb();
}

function TransformStream() {
    stream.Transform.call(this);
}

util.inherits(TransformStream, stream.Transform);

TransformStream.prototype._transform = function (chunk, encode, cb) {
    this.push(chunk);
    cb();
}
TransformStream.prototype._flush = function (cb) {
    this.push('Oh Yeah!');
    cb();
}

const rs = new ReadStream();
const ws = new WriteStream();
const ts = new TransformStream();

rs.pipe(ts).pipe(ws);