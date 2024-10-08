const fs =require('fs');


const requestListener = (req,res)=>{
    const url = req.url;
    const method = req.method;
    if(url==="/"){
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Routing requests</title></head>')
        res.write('<body><form method="POST" action="/message"><input type="text" name="message"><button type="submit">Send</button></form></body>')
        res.write('</html>')
        return res.end()
    }
    if(url==="/message" && method==="POST"){
        const body = [];
        req.on('data',(chunk)=>{
            console.log(chunk);
            body.push(chunk)
            console.log(body);
        })
        return req.on('end',()=>{
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody)
            const message = parsedBody.split('=')[0]
            console.log(message)
            fs.writeFile('message.txt',message,()=>{
                res.statusCode= 302;
                res.setHeader('Location','/')
                return res.end()
                    });
        });
    
       
    }
        res.setHeader('Content-Type','text/html');
        res.write('<html>')
        res.write('<head><title>Routing requests</title></head>')
        res.write('<body><h1>Form has been submitted</h1></body>')
        res.write('</html>')
        res.end()
}



    module.exports = requestListener;