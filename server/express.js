const express=require('express');
const path = require('path');
const app=express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '/demo.html'));
});

var server = app.listen(3000,function(){
    var host=server.address().address;
    var port=server.address().port;
    console.log('Host : http://'+host);
    console.log('Port : '+port);
});
//app.listen(3000);