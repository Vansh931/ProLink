import express from 'express'
import verification from '../middlewares/isAuth.js'
import {getCurrentUser} from '../controllers/user.controller.js'
const userRouter = express.Router()
userRouter.get("/currentuser",verification,getCurrentUser)



export default userRouter