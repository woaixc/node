//路径相关模块path
let path = require('path')
console.log(path)

//获取路径信息的扩展名
let ext = path.extname('https://www.bilibili.com/a.jpg')
console.log(ext)

//获取绝对路径,
let info1 = path.resolve('a.txt')
//resolve也可以用作拼接
let info3 = path.resolve('a.txt','b.txt')
console.log(info1)

//获取当前执行目录的完整路径
console.log(__dirname)

//join拼接目录
let info2 = path.join(__dirname,'a.txt')
console.log(info2)

//获取当前执行文件
console.log(__filename)