//练习通过引入模块的方式进行数据库的相关操作
//引入连接模块
require(".././tools/conn_mongo");

//引入模型
var student=require(".././models/students");


student.find({gender:"male"},"name -_id",function(err,docs){
    console.log(docs);
})

