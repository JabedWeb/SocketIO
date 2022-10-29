const express = require('express');
const color=require("colors")
const path=require("path");
const {createServer}=require("http");

const {Server}=require("socket.io");


//npm init
const app=express()

//create express server to row server;
const httpServer=createServer(app);

//create socket server
const io=new Server(httpServer);

//socket connection
io.on('connection',(socket)=>{
    console.log("client connected".bgGreen.black);
    socket.emit('testData',{
        name : "Jabed",
        age : 29,
        message : "Hello"
    })
    socket.on('disconnect',()=>{
        console.log("client disconnected".bgRed.black);
    })
})

//load client
app.use('/',(req,res)=>{

    res.sendFile(path.join(__dirname,"client.html"))
})

//npm listen
httpServer.listen(5050,()=>{
    console.log("server is running on port 5050".bgCyan.black);
})