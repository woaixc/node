let events = require('events')
let fs = require('fs')
//创建事件触发器对象
let eve = new events()

//创建事件监听
eve.on('eventA',(data) => {
  console.log(data)
  console.log('起飞')
})

fs.readFile('a.txt',(err,data) => {
  if(data){
    //触发事件
    eve.emit('eventA','xiecong')
  }
})