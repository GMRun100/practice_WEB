//此模块专门负责mongo数据库的连接

var mongoose = require('mongoose');

//02.建立数据库并建立连接
mongoose.connect('mongodb://localhost/mongoose_Stu');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//03.监听是否打开
db.once('open', function() {
    // we're connected!
    console.log("打开成功");
});