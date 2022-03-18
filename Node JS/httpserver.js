const http = require('http')
const port = process.env.port;
const server = http.createServer((req,res)=>{
    res.statusCode= 200;
    res.setHeader('content-type', 'text/html')
    res.end('<h1> This is PrajTech</h1> <p> hey this is me</p>'); 
})