const path = require("path");
const fs = require('fs');
const basePath = path.join(__dirname, '..');

fs.createReadStream('1.mp4').pipe(fs.createWriteStream('1-pipe.mp4'));