// core modules - http, https, fs, path, os

const http = require('http');

const server = http.createServer((req,res)=>{
    // console.log(req.headers)
    // process.exit()

    let url = req.url
    if(url==="/"){
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>')
        res.write('<head><title>Message</title></head>')
        res.write('<body><form action="/message" method="POST"><input type="text" name="msg"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>')
    res.write('<head><title>My First Node Program</title></head>')
    res.write('<body><h1>Hello from Node js Server</h1></body>')
    res.write('</html>')
    res.end()
})



server.listen(3000)


