const express = require('express');

const color=require("colors");

const path=require("path");





const {createServer}= require('http');
const {Server} = require('socket.io');



//npm init
const app = express();

//create express server to row server;
const httpServer = createServer(app);

//create socket server
const io=new Server(httpServer);


app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname, "client.html"));
})

io.
//server listen
httpServer.listen(5050,()=>{
    console.log("server is running on port 5050".bgCyan.black);
})