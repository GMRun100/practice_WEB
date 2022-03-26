var fs=require("fs");

//01.打开文件
fs.open("D:\\01.learn\\practice\\node\\02.文件系统\\hello2.txt","w",function (err,fd) {

    //console.log(arguments);  //可以用来调试回调函数有几个参数

    if(!err)
    {
        fs.write(fd,"异步方式写入文件",function () {
            //console.log(arguments);
            if(!err)
            {
                fs.close(fd);
            }

        })
    }

});