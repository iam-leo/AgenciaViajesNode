//const express = require('express'); //common js
import express from "express"; //Agregar al package.json el "type": "module"
import router from "./routes/index.js";
import db from "./config/db.js";

const app = express();

//Conectar DB
db.authenticate()
    .then( () => console.log('DB connected'))
    .catch( e => console.log(e))

//Definir el puerto
const port = process.env.PORT || 4000;

//Habilitar pug
app.set('view engine', 'pug');

//Obtener año actual
app.use((req, res, next) => {
    const year = new Date()

    res.locals.currentYear = year.getFullYear();
    res.locals.nombrePagina = "Mundo Aventura"
    next();
});

//Agregar body parser para leer datos de formularios
app.use(express.urlencoded({extended: true}));

//Definir carpeta public
app.use(express.static('public'));

//Agregar router
app.use('/', router)

app.listen(port, ()=>{
    console.log(`El servidor está funcionando en el puerto ${port}`)
});

