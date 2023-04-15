const mongoose = require('mongoose');

const Schema = new mongoose.Schema({
    Name:{type:String , require:true},
    Email:{type:String , require:true},
    Password:{type:String , require:true},
}, { collection: 'User' })

const model = mongoose.model('UserSchema', Schema);

module.exports = model;