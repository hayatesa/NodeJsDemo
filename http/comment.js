var http = require('http')
var querystring = require('querystring')

var postData = querystring.stringify({
    'content': '期待下一期的课程',
    'cid': 348
})
var options = {
    hostname: 'www.imooc.com',
    port: 80,
    path: '/course/docoment',
    method: 'POST',
    headers: {
        'Accept': 'application/json, text/javascript, */*; q=0.01',
        'Accept-Encoding': 'gzip, deflate, br',
        'Accept-Language': 'zh-CN,zh;q=0.9,en-US;q=0.8,en;q=0.7,vi;q=0.6',
        'Connection': 'keep-alive',
        'Content-Length': postData.length,
        'Cookie': 'imooc_uuid=9f816f91-f023-458f-a80f-ba83481c5511; imooc_isnew_ct=1526373645; imooc_isnew=2; IMCDNS=0; loginstate=1; apsid=djODcxMjRiODk1NjEyNzI4ZTI2Mjk1NTUyNDhkZWYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANDc2MjQxMQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAzNTg3MzkzMDNAcXEuY29tAAAAAAAAAAAAAAAAAAAAADE2YmY0ODZkMGVkNDhjZWEwNGQxNzI0ZTE5ZGQ4NWExMfUoWzH1KFs%3DZj; last_login_username=358739303%40qq.com; mc_channel=bdqdkj; mc_marking=5931f8e07e353edf2b94a098f44a062c; cninfo=bdqdkj-5931f8e07e353edf2b94a098f44a062c; PHPSESSID=gse7vqm6ttiuuj8n9vu0g6vkt1; Hm_lvt_f0cfcccd7b1393990c78efdeebff3968=1529410818,1529461018,1529463985; Hm_lpvt_f0cfcccd7b1393990c78efdeebff3968=1529472914; cvde=5b29b90cae994-56',
        'DNT': '1',
        'Host': 'www.imooc.com',
        'Referer': 'https://www.imooc.com/note/348?sort=last&page=1',
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/67.0.3396.87 Safari/537.36',
        'X-Requested-With': 'XMLHttpRequest'
    }
}

var req = http.request(options, (res) => {
    console.log('Status: ' + res.statusCode);
    console.log('headers: ' + JSON.stringify(res.headers));
    res.on('data', (chunk) => {
        console.log(Buffer.isBuffer(chunk));
        console.log(typeof  chunk)
    });
    res.on('end', () => {
        console.log('评论完毕');
    })
}).on('error', (e) => {
    console.log('Error: ' + e.message);
})

req.write(postData);
req.end();