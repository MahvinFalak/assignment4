const mongoose = require('mongoose');

const bookSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    nickname:{
        type:String,
        required:true,
    },
    dob:{
        type:String,
        required:true,
    },
    mobile:{
        type:Number,
        required:true,
    },
    insta:{
        type:String,
        required:true,
    },
    snap:{
        type:String,
        required:true,
    },
    img:{
        type:String,
        required:true,
    }
},{timestamps:false});

module.exports = mongoose.model('books', bookSchema);