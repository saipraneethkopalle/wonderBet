const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const matchSchema = new mongoose.Schema({
    userId:{type:Number,unique:true,required:true},
    userName:{type:String,required:true},
    userShortCut:{type:String,required:true},
},{ timestamps: true })

matchSchema.index({ userId: 1});
matchSchema.plugin(uniqueValidator);
module.exports = mongoose.model('userLevel', matchSchema);