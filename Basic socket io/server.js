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


//load client
app.use('/',(req,res)=>{

    res.sendFile(path.join(__dirname,"client.html"))

})

io.on("connection",(socket)=>{
    console.log("socket is connected".bgGreen.black);
    socket.on("message",(msg)=>{
        console.log(msg);
    })
    socket.on('disconnect',()=>{
        console.log("socket is disconnected".bgRed.black);
    })
});

//npm listen
httpServer.listen(5050,()=>{
    console.log("server is running on port 5050".bgCyan.black);
})