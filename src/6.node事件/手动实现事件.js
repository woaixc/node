let fs = require('fs')

fs.readFile('a.txt',{flag: 'r',encoding: 'utf-8'},(err,data) => {
  if(err){
    console.log(err)
  }else{
    console.log(data)
    //触发自定义事件事件
    xcEvent.emit('fileSuccess',data)
  }
})

//自己封装一个自定义事件生成器，手写的订阅和发布
xcEvent = {
  //存放事件和事件对应的函数
  event: {
    //fileSuccess:[fn,fn,fn]
  },
  //向event中添加自定义事件及函数
  on: function(eventName,eventFn){
    if(this.event[eventName]){
      this.event[eventName].push(eventFn)
    }else{
      this.event[eventName] = []
      this.event[eventName].push(eventFn)
    }
  },
  //触发事件并传入数据
  emit:function(eventName,eventMsg){
    if(this.event[eventName]){
      this.event[eventName].forEach(itemFn => {
        //执行事件
        itemFn(eventMsg)
      });
    }
  }
}

//添加自定义事件
xcEvent.on('fileSuccess',(data) => {
  console.log('事件1')
})
xcEvent.on('fileSuccess',(data) => {
  console.log('事件2')
})
xcEvent.on('fileSuccess',(data) => {
  console.log('事件3')
})