const path = require("path");
const fs = require('fs');

basePath = path.join(__dirname, '..');
console.log(basePath);
const source = fs.readFileSync(basePath+'/buffer/git.png');
fs.writeFileSync(basePath+ '/stream/stream_copy_image.png', source);