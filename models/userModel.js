const mongoose=require('mongoose')

const User=mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        
    },
    phone:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    role:{
        type: Number,
        default:0
    },


},{
    collection:"users",
    timestamps:true
})

module.exports=mongoose.model("users",User)