const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');

const port = 3000;

//Static files
app.use(express.static('public'));

//Template engine
app.use(expressLayouts)
app.set('layout','./layouts/main')
app.set('view engine', 'ejs');

//Routes
app.use('/',require('./routes/customer'));

//Handle 404
app.get('*',(req,res)=>{
    res.status(404).render('404');
})

//Express listen
app.listen(port,()=>{
    console.log('Server is listen')
})
