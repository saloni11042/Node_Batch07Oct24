const bodyParser = require('body-parser')

const express = require('express');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.get('/add-product',(req, res, next)=>{
   
    res.send('<form method="POST" action="/product"><input name="title" type="text"><button type="submit">Add Product</button></form>')
    
})

app.post('/product',(req, res, next)=>{
    console.log(req.body)
    // res.redirect('/')
    res.send('<h1>Form Submitted</h1>')
    
})

app.use('/',(req, res, next)=>{
    res.send('<h1>Hello Everyone</h1>')
    
})

app.listen(3000)