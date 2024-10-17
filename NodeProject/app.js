const path = require('path')
const ejs = require(('ejs'))

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const errorController = require('./controller/errorController')

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin',adminData.routes);
app.use('/admin',adminData);
app.use(shopRoutes);

app.set('view engine','ejs');
app.set('views','views');

app.use(errorController.get404Page)

app.listen(3000);