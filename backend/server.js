import express from 'express';
import 'dotenv/config';
import cors from 'cors';
import bodyParser from 'body-parser';
import { connectDB } from './db/db.js';
import userRouter from './routes/userRoute.js';
const app =express()

app.use(bodyParser.json())
app.use(cors())
 connectDB()




app.get("/",()=>{
  console.log("Hello from server")
})

app.use("/user",userRouter)


app.listen(process.env.PORT,()=>{
  console.log()
  console.log("Running on port",process.env.PORT)
})