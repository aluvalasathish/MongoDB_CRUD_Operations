const mongoose = require('mongoose');

const admin = mongoose.Schema({
    email:{type:String,require:true},
    password:{type:String,require:true}
})
module.exports = mongoose.model('admin',admin);