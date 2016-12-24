var app=require('express')();
var http=require('http').Server(app);
var io = require('socket.io')(http);

app.get('/',function(req,res){

//res.send('<h1>Hello World</h1>');
res.sendFile(__dirname + '/index.html')

});

io.on('connection',function(socket){
    console.log('ok')
    socket.on('chat message',function(msg){
    io.emit('chat message',msg);
    console.log(msg)
    });
});
http.listen(3000,function(){
    console.log('listening on 3000');
});