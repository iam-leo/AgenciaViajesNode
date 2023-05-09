//const express = require('express'); //common js
import express from "express"; //Agregar al package.json el "type": "module"

import router from "./routes/index.js";

const app = express();

//Definir el puerto
const port = process.env.PORT || 4000;

//Habilitar pug
app.set('view engine', 'pug');

//Agregar router
app.use('/', router)

app.listen(port, ()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`)
});

