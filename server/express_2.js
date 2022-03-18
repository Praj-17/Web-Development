const express=require('express');
const { fstat } = require('fs');
const path = require('path');
const app=express();

app.get('/student', function(req, res){
   fs.readFile(__dirname+ '/student.json');
});

var server = app.listen(3000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log('Host : http://'+host);
    console.log('Port : '+port);
});
//app.listen(3000);