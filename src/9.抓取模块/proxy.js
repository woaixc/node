let axios = require('axios')

axios.get('https://www.fabiaoqing.com/',
  {
    proxy: {
    host: '123.163.117.59',
    port: 9999,
  }
}).then(res => {
  console.log(res)
}).catch(err => {
  console.log(err)
})