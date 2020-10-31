let os = require('os')

let cpus = os.cpus()
console.log(cpus)
console.log(os.arch())
console.log(os.totalmem())
console.log(os.platform())