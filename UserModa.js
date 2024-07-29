const mongoose=require("mongoose")
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    passward:{
        type:Number,
        unique:true,
        require:true
    },
    isAdmin:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
})
const userModal=mongoose.model("users",userSchema)
module.exports=userModal;