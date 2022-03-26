//练习document文档方法的使用
//引入连接模块
require(".././tools/conn_mongo");
//引入模型
var student=require(".././models/students");

student.findOne({name:"唐僧"},function (err,doc) {
    if(!err)
    {
        //console.log(typeof doc);

        //练习对docs的操作
        // doc.update({$set:{age:37}},function (err) {
        //     if(!err)
        //     {
        //         console.log("修改成功！");
        //     }
        // });

        //另外一种操作对象的方法
        // doc.age=66;
        // //对doc的操作最后需要保存才会存入到数据库中
        // doc.save();

        //get方法
        //console.log(doc.get("name"));

        //set方法
        // doc.set("age",777);
        // doc.save();

        //console.log(doc.toJSON());

        console.log(typeof doc.toObject());   //将document对象转换为一个普通的JS对象

    }
});

//get()

//set()
//


//toJSON


//toObject  将document对象转换为一个普通的JS对象