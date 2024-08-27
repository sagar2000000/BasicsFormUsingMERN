import mongoose from "mongoose";


const userModel =  new mongoose.Schema({
  fullname:{
    required:true,
    type:String
  },
  email:{
    required:true,
    type:String,
    unique:true
    
  },
  password:{
    required:true,
    type:String
    
  },
  phonenumber:{
    required:true,
    type:Number
    
  }
},{timestamps:true})


const User = mongoose.model("User",userModel)

export default User;