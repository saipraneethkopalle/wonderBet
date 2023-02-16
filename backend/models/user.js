const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const matchSchema = new mongoose.Schema({
    userName:{type:String,unique:true,required:true},
    password:{type:String,required:true},
    userRole:{type:String,required:true},
    isActive:{type:Boolean,default:true}
},{ timestamps: true })

matchSchema.index({ isActive: 1, userName: 1});
matchSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', matchSchema);