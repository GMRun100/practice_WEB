//练习流式文件写入
var fs=require("fs");

//创建写入流
var ws=fs.createWriteStream("D:\\01.learn\\practice\\node\\02.文件系统\\hello4.txt");

//
ws.once("open",function () {
    console.log("写入流已创建");

})

ws.once("close",function () {
    console.log("写入流已关闭");

})

ws.write("流式文件写入1");
ws.write("流式文件写入2");
ws.write("流式文件写入3");
ws.write("流式文件写入4");
ws.write("流式文件写入5");

//关闭流
ws.end();