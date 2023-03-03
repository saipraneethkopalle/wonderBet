const mongoose = require('mongoose');
const uniqueValidator = require("mongoose-unique-validator");
const matchSchema = new mongoose.Schema({
    website:{type:String,required:true},
    email:{type:String,required:true},
    userName:{type:String,required:true,unique:true},
    userRoleId:{type:String,required:true},
    password:{type:String,required:true},
    firstName:{type:String,required:true},
    lastName:{type:String},
    phone:{type:String},
    timeZone:{type:Boolean,default:true},
    creditRef:{type:Number,default:0},
    balance:{type:Number,default:0},
    exposure:{type:Number,default:0.0},
    availBalance:{type:Number,default:0},
    refProfitLoss:{type:Number,default:0},
    userstatus:{type:String,default:'Active'}
},{ timestamps: true })

matchSchema.index({ isActive: 1, userName: 1});
matchSchema.plugin(uniqueValidator);
module.exports = mongoose.model('User', matchSchema);