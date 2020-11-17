// puppeteer作用
// 1、生成页面PDF
// 2、抓取SPA单页应用
// 3、自动提交表单、进性UI测试、键盘输入等
let puppeteer = require('puppeteer')

async function testPuppeteer() {
  //puppeteer.launch实例开启浏览器
  //可以传入一个options对象，可以配置为无界面浏览器，也可以配置为有界面浏览器
  //无界面浏览器性能更高，有界面浏览器一般用于调试开发使用
  let options = {
    headless:false,
    defaultViewport: {
      width: 1920,
      height: 1080
    }
  }
  //使用有界面方式开启浏览器
  let browser = await puppeteer.launch(options)

  //打开一个新的页面
  let page = await browser.newPage()

  //访问百度
  await page.goto('https://www.dytt8.net/index.htm')

  //$$eval函数使得我们的回调函数可以运行在浏览器中，并且可以通过浏览器的方式进行输出
  page.$$eval('a',(elements) => {
    elements.forEach((item,i) => {
      console.log(item.innerHTML)
    })
  })
  //浏览器可以监听控制台的输出
  /* page.on('console',function(eventMsg){
    console.log(eventMsg.text())
  }) */
  //通过点击页面进行跳转，$和$$返回的是elementHandle对象，可对该对象进行点击等操作
  let input = await page.$('.searchl .formhue')
  console.log(input)
  //光标聚焦
  await input.focus()
  //往输入框输入信息
  await page.keyboard.type("海王")
  await page.$eval('.bd3rl .search',(element)=>{
    element.addEventListener('click',(event)=> {
      event.cancelBubble = true;
    })
  })
  //点击按钮
  let btn = await page.$('.searchr input[name="Submit"]')
  btn.click()
}

testPuppeteer()


//page常用
/* 1、page.goto(url)  打开指定网站
2、page.screenshot 当前页面截图
3、page.$(selector)  获取单个元素，底层调用document.querySelector()
4、page.$$(selector) 获取一组元素，底层调用document.querySelectorAll()
5、page.$eval(selector,function()) 匹配到的第一个元素传给函数
6、page.$$eval(selector,function()) 匹配到的一组元素传给函数 */