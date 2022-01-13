const express = require("express");
const app = express();
const path = require('path')
const indexRouter = require('./routers/mainRouter');


app.use(express.static('public'));

app.set('view engine', 'ejs');
app.set('views', './src/views')

app.use(indexRouter);

app.listen(3000, ()=>{ console.log('Servidor corriendo en el puerto 3000')})