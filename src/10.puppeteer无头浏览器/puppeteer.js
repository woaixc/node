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
  page.goto('http://www.baidu.com')

}

testPuppeteer()


//page常用
/* 1、page.goto(url)  打开指定网站
2、page.screenshot 当前页面截图
3、page.$(selector)  获取单个元素，底层调用document.querySelector()
4、page.$$(selector) 获取一组元素，底层调用document.querySelectorAll()
5、page.$eval(selector,function()) 匹配到的第一个元素传给函数
6、page.$$ eval(selector,function()) 匹配到的一组元素传给函数 */