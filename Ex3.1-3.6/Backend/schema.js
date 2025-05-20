// creating schema for phonebook
const mongoose = require('mongoose')
const { Schema } = mongoose

const phonebook = new Schema({
    name: {
        type: String,
        minLength:3,
        required:true
    },
    number: {
        type: String
    }
})

module.exports = mongoose.model('phonebooks', phonebook)