'use strict'

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/player-js', (err, res) => {
    if (err) {
        throw err;
    } else {
        console.log('Conexión establecida base de datos');
    }
});