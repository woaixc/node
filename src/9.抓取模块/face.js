let cheerio = require('cheerio')
let axios = require('axios')
let fs = require('fs')
let path = require('path')
let puppeteer = require('puppeteer')

// 编写发表情网页的爬虫
// 1、先进行网页html分析
// 2、找到分类列表

function face () {
  let url = "https://www.fabiaoqing.com/bqb/lists"
  axios.get(url).then(res => {
    // console.log(res)
    let $ = cheerio.load(res.data)
    $('#bqblist .bqba').each((i,element) => {
      let href = $(element).attr('href')
      getDetail(href);
    })
  })
}


async function getDetail (url) {
  try{
    let imgUrl = 'https://www.fabiaoqing.com' + url
    let browser = await puppeteer.launch({headless:false})
    let page = await browser.newPage()
    await page.goto(imgUrl)
    await page.$$eval('.bqpp .bqbppdetail',(elements => {
      console.log(111112)
      elements.each((i,element) => {
        element.getAttribute('src')
        let ext = path.parse(src).txt
      })
      axios.get(src,{responseType:'stream'}).then(res => {
        console.log(res)
        let ws = fs.createWriteStream('./img/title/1'+ext)
        res.data.pipe(ws)
      }).catch(err => {
        
      })
    }))

    /* let faceList = await axios.get(imgUrl)
    //console.log(faceList)

    let $ = cheerio.load(faceList.data)
    
    $('.bqpp .bqbppdetail').each((i,element) => {
      let src = $(element).attr('src')
      let ext = path.parse(src).txt
      //let title = $(element).text()
      console.log(src)
      axios.get(src,{responseType:'blob'}).then(res => {
        console.log(res)
        let ws = fs.createWriteStream('./img/title/1'+ext)
        res.data.pipe(ws)
      }).catch(err => {
        
      })
    }) */
  }catch(e){

  }
}

face()