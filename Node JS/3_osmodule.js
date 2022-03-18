const os = require('os')
console.log(os.freemem()/1e+9)
console.log(os.homedir()) // home dir
console.log(os.hostname()) //device(laptop ) name
console.log(os.arch()) // x64
console.log((os.cpus())) 
console.log((os.cpus()).length) 
console.log((os.platform())) 
console.log((os.release())) 
console.log((os.endianness())) 
// console.log((os.EOL())) 
console.log((os.totalmem()/1e+9)) 
console.log((os.type())) 
console.log((os.uptime())) 
console.log((os.userInfo())) 

