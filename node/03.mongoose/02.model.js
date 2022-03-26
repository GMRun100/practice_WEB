//练习model对象的使用
//01.引入
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
// stuModel.create(
//     {
//         name: "猪八戒",
//         age:18,
//         gender:"male",
//         address:"高老庄",
//     },
//     {
//         name: "唐僧",
//         age:26,
//         gender:"male",
//         address:"女儿国",
//     },
//     {
//         name: "孙悟空",
//         age:16,
//         gender:"male",
//         address:"花果山",
//     },
//     {
//         name: "沙和尚",
//         age:47,
//         gender:"male",
//         address:"流沙河",
//     },
//     function (err) {
//         if(!err)
//         {
//             console.log("插入成功！")
//         }
//     }
// )



//删除操作
// stuModel.deleteMany({gender:"female"},function (err) {
//     if(!err)
//     {
//         console.log("删除成功！");
//     }
// })

//model的插入操作
// stuModel.insertMany([
//             {
//         name: "蜘蛛精",
//         age:16,
//         gender:"female",
//         address:"蜘蛛洞",
//     }
//     ],function (err) {
//
//     if(!err)
//     {
//         console.log("插入成功！");
//     }
//     }
// )

//查找操作
// stuModel.find({gender:"male"},   //查询的条件
//     "name age -_id",         //投影  需要获取的字段
//     {skip:2,limit:1},          //查询选项  skip limit
//     function (err,docs) {
//     console.log(docs);
// })


//更新操作
// stuModel.updateOne({name:"唐僧"},{$set:{age:88}},function (err) {
//     if(!err)
//     {
//         console.log("更新成功");
//     }
//
// });

//记数操作
stuModel.count({gender:"female"},function (err,count) {
    if(!err)
    {
        console.log("本次共查询到"+count+"个");
    }

})




