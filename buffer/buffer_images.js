const path = require("path");
const fs = require('fs');

const filePath = path.join(__dirname);
// 读取文件数据到buffer对象中
fs.readFile(filePath+'/git.png', (err, origin_buffer)=>{
    console.log(Buffer.isBuffer(origin_buffer));

    if (err){
        console.log(err);
    } else {
        fs.writeFile(filePath+'/git_buffer.png', origin_buffer, (err)=>{
            if (err) console.log(err);
        });

        //var base64Image = new Buffer(origin_buffer).toString('base64');
        var base64Image = origin_buffer.toString('base64');
        console.log(base64Image);

        var decodedImage = new Buffer(base64Image, 'base64');

        console.log(Buffer.compare(origin_buffer, decodedImage));

        fs.writeFile(filePath + '/git_decoded.png', decodedImage, (err)=>{
            if (err) console.log(err);
        })
    }
})