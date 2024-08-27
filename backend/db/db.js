import mongoose from "mongoose";
import 'dotenv/config'
const connectDB= async()=>{
  await mongoose.connect(process.env.DB_URL)
  .then(()=>{
    console.log("DB connected sucessfully")
  })
}



export {connectDB}