'use strict'

var mongoose = require('mongoose');

var schema = mongoose.Schema();

//<< Esquema del modelo u Estructura Objeto del modelo "album"
var songSchema = schema({
    number: Number,
    name: String,
    duration: String,
    file: String,
    album: {type: schema.ObjectId, reference: "Album"}
})
//>>

module.exports = mongoose.model('Song', songSchema);