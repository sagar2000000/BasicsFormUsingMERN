import bcrypt from 'bcrypt'
import User from '../models/usermodel.js';
import jwt from 'jsonwebtoken'

const  registerController = async (req,res)=>{


   const createToken=(id)=>{
      return jwt.sign({id},process.env.JWT_SECRET)
      }
try {

  const {fullname,email,password,phonenumber}= req.body;
  console.log(fullname,email,password)
  const salt=await bcrypt.genSalt(10)
  const hashedPassword= await bcrypt.hash(password,salt);
   const newUser =  new User({fullname,email,password:hashedPassword,phonenumber})
    await newUser.save()
    const token=createToken(newUser._id)
     return res.json({success:true,token})
     
     
    
} catch (error) {
   return res.json({success:false,message:"User registration unsucessful"})
}
}


export  default registerController