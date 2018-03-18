'use strict'

var mongoose = require('mongoose');

//<< Esquema del modelo u Estructura Objeto del modelo "album"
var schema = mongoose.Schema();

var almbumSchema = schema({
    title: String,
    description: String,
    year: Number,
    image: String,
    artist: {type: schema.ObjectId, reference: 'Artist'}
})
//>>

module.exports = mongoose.model('Album', almbumSchema);
