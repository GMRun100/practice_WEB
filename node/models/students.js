//此模块用来定义student的模型
var mongoose = require('mongoose');

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

//导出模型
module.exports=stuModel;