//练习使用文件系统

var fs=require("fs");

//01.打开文件
var fd=fs.openSync("D:\\01.learn\\practice\\node\\02.文件系统\\hello.txt","w");
console.log(fd);

//02.向文件中写入内容
var number = fs.writeSync(fd, "fs文件被修改了")

fs.closeSync(fd);