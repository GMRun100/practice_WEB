/*
文件的读取可以有如下方式：
  1.异步文件读取
  2.简单文件读取
  3.流式文件读取

 */

const fs = require('fs')

//读取文件
// fs.readFile('D:\\01.learn\\practice\\node\\02.文件系统\\input.txt', 'utf8' , (err, data) => {
//     if (err) {
//         console.error(err)
//         return
//     }
//     console.log(data.toString());
// })


//读取图片
fs.readFile('D:\\01.learn\\practice\\node\\02.文件系统\\1寸-DSC_6777-郭猛.jpg', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    //console.log(data);
    //将读取到的图片输出
    fs.writeFile('D:\\01.learn\\practice\\node\\02.文件系统\\1寸-DSC_6777-郭猛_output.jpg', data, err => {
        if (err) {
            console.error(err);
            return;
        }
        //文件写入成功。
        console.log("文件写入成功");
    })
})