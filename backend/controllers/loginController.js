import bcrypt from 'bcrypt'
import User from '../models/usermodel.js';
import jwt from "jsonwebtoken"
const  loginController = async (req,res)=>{

  const createToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET)
    }

try {
  const {email,password}= req.body;
  const user = await User.findOne({ email });
  if(!user){
    return res.json({success:false,message:"Invalid email"})
  }
  const match = await bcrypt.compare(password, user.password);

  if (!match){
    return res.json({success:false,message:"Incorrect email and password"});
  }
  const token=createToken(user._id)
   return res.json({success:true,token})
  
  
} catch (error) {
  console.log(error)
  res.json({success:false,message:"User login unsucessful"})
}


}
 

export  default loginController

