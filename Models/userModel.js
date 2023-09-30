const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({

firstName:{
    type:String,
    required:[true,'please enter your first name']
},
lastName:{
    type:String,
    required:[true,'please enter your last name']
},
email:{
    type:String,
    required:[true,'please enter your email'],
    unique:true
},
password:{
    type:String,
    required:[true,'please enter your password']
},
phone:{
    type:String,
    required:[true,'please enter your phone number']
},

})

const userModel=mongoose.model('User',userSchema)

module.exports=userModel;