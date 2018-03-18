'use strict'

var mongoose = require('mongoose');

//<< Esquema del modelo u Estructura Objeto del modelo "artists"
var Schema = mongoose.Schema({
    name: String,
    description: String,
    image: String
})
//>>

module.export = mongoose.model('Artist', Schema);