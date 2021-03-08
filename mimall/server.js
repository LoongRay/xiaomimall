//CORS实现跨域
// 服务器脚本

// 1.引入express
const express = require('express');

//90端口的服务,将当前目录作为http服务
var app1 = express();
app1.use(express.static(__dirname));
app1.listen(90);

//91端口的服务,返回数据
var app2 = express();
app2.get("/" ,function(req,res){
    //服务端修改响应头实现CORS跨域
    res.header('Access-Control-Allow-Origin','*');//'*'指任意域都能访问
    res.send("你好!");
})
app2.listen(91);

