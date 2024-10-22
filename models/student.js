const mongoose = require('mongoose');

const student = new mongoose.Schema({
    studentName:{type:String,require:true},
    studentAge:{type:Number,require:true},
    studentEmail:{type:String,require:true,unique:true},
    gender:{type:String,require:true},
    mobileNumber:{type:Number},
},{timestamps:true});

module.exports = mongoose.model('student',student);

