'use strict'

var mongoose = require('mongoose');

//<< Esquema del modelo u Estructura Objeto del modelo "user"
var Schema = mongoose.Schema({
    name: String,
    surname: String,
    email: String,
    password: String,
    role: String,
    image: String
});
//>>

module.exports = mongoose.model('User', Schema);

