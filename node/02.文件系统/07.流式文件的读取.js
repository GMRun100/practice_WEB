//练习流式文件的读取

var fs=require("fs");

var rs=fs.createReadStream("D:\\01.learn\\practice\\node\\02.文件系统\\music.mp3");

var ws=fs.createWriteStream("D:\\01.learn\\practice\\node\\02.文件系统\\music_output.mp3");

//方法一：将读入流的文件直接输出到输出流  此方法是利用了pipe函数
//rs.pipe(wr);


//方法二：将读入流的文件直接输出到输出流
//此方法利用监听等手段
rs.once("open",function () {
    console.log("读取文件流打开了");
})

rs.once("close",function () {
    console.log("读取文件流关闭了");
    //数据读写完毕，关闭可写流
    ws.end();
})

ws.once("open",function () {
    console.log("写入文件流打开了");
})

ws.once("close",function () {
    console.log("写入文件流关闭了");
})


//如果要读取可读流中的数据，必须要为可读流绑定一个data事件，data事件绑定完毕，他会自动开始读取数据
rs.on("data",function (data) {
    //将可读流中读到的数据写入到可写流中，
    ws.write(data);
})







