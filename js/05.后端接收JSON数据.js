const express=require('express');
var bodyParser = require('body-parser');
const server=express();
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());
server.listen(3000);
server.post('/json',function(req,res){
    //cros资源共享
    //res.header("Access-Control-Allow-Origin", "*");//所有站点都可以访问该资源
    //res.header("Access-Control-Allow-Headers", "X-Requested-With");
    //res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
    //res.header("X-Powered-By",' 3.2.1')
    //res.header("Content-Type", "application/json;charset=utf-8");
    res.send("ok").end();
    console.log(req.body);
    console.log(JSON.parse(req.body.da)[0].name)
})