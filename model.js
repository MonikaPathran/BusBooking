const mongoose = require('mongoose')

const Schema = mongoose.Schema({
    type: String,
    from: String,
    depart: Date,
    return: Date,
    noOfAdults: Number,
    noOfChild: Number
})

module.exports = mongoose.model('tickets',Schema)