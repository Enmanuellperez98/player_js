'use strict'

//<<Cargando modulos
var express = require('express');
var bodyParser = require('body-parser');
//>>

var app = express();

//<<Cargando rutas
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());
//>>

//<<Gestionando rutas
    //<<Estado del servicio
    app.get('/estado',function(request, response){
        response.status(200).send({message:'Activo'});
    });
    //>>
    

//>>

module.exports = app;