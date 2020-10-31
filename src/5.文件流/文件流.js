let fs = require('fs')

//创建写入流
let ws = fs.createWriteStream('a.txt',{flag: 'a+',encoding: 'utf-8'})

//监听文件打开事件
/* ws.on('open',()=>{
  console.log("文件打开了")
})
 */
/* ws.on('ready',() => {
  console.log('文件写入已准备')
})
 */
//监听文件关闭事件
/* ws.on('close',()=>{
  console.log('文件关闭了')
}) */

//ws.write('你是不是傻？')

//ws.end()


//创建读取流
let rs = fs.createReadStream('hello.txt')


/* rs.on('open',() => {
  console.log('读取的文件已打开')
}) */

/* rs.on('close', () => {
  console.log('读取的文件已关闭')
  ws.end()
  rs.end()
}) */



/* //监听每一批流入的数据
rs.on('data', (chunk) => {
  console.log(chunk.toString())
  ws.write(chunk)
}) */

//管道流，直接将读取流读取到的数据传输到写入流
rs.pipe(ws)

//注意：
//同一时间读取流和写入流无法操作同一文件