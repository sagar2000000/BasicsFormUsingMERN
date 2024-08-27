
import express from 'express'
import registerController from '../controllers/registerController.js'
import loginController from '../controllers/loginController.js'
const userRouter = express.Router()

userRouter.post("/login",loginController)


userRouter.post("/register",registerController)
export default userRouter;