let axios = require('axios')
let fs = require('fs')

async function getPage(num){
  let url= 'http://1.staging-web.app-echo.com/api/recommend/sound-day?page=' + num
  let res = await axios.get(url)
  res.data.list.map(n => {
    let title = n.sound.name
    let mp3Url = n.sound.source 
    console.log(mp3Url)
    download(mp3Url,title)
  })
}

async function download(url,title){
  let res = await axios.get(url,{responseType:"stream"} )
  let ws = fs.createWriteStream('./music/'+title+'.mp3')
  res.data.pipe(ws)
  res.data.on('close',function(){
    ws.close()
  })
}

getPage(1)