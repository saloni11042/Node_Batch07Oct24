
const http = require('http');

const express = require('express');

const app = express();
app.use((req, res, next)=>{
    console.log("Middleware")
    next()
})
app.use((req, res, next)=>{
    console.log("Middleware2")
})


const server = http.createServer(app);

server.listen(5000);