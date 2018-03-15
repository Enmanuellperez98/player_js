'use strict'

//<<Cargando configuraciones
var mongoose = require('mongoose'), 
    app = require('./app'),
    port = process.env.PORT || 3977;
//>>

mongoose.connect('mongodb://localhost:27017/player-js', (err, res) => {
    if (err) {
        throw err;
    } else {
        
        console.log('Conexión establecida base de datos');
        
        app.listen(port, function(){
            console.log('Servidor del APIREST escuchando en http://localhost:'+port);
        })
    }
});