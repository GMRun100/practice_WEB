//练习mongoose的使用

//01.引入
var mongoose = require('mongoose');

//02.建立数据库并建立连接
mongoose.connect('mongodb://localhost/mongoose_test');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));

//03.监听是否打开
db.once('open', function() {
    // we're connected!
    console.log("打开成功");
});

//04.建立约束
var stuSchema = mongoose.Schema({
    name: String,
    age:Number,
    gender:{
            type:String,
            default:"female"
    },
    address:String,
});


//05.建立模型,就相当于建立collection
var stuModel = mongoose.model('students', stuSchema);

//06.创建文档
stuModel.create(
    {
            name: "bgj",
    age:18,
    address:"huaguoshan",
    },
    function (err) {
    if(!err)
    {
        console.log("插入成功！")
    }
    }
)
