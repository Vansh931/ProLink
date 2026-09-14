import express from 'express'
import dotenv from 'dotenv'
import connectDb from './config/db.js'
import authRouter from './routes/auth.route.js'
import userRouter from './routes/user.routes.js'
import cookieParser from 'cookie-parser'
import cors from 'cors'
dotenv.config()
const app = express();
const port = process.env.PORT;
app.use(express.json())
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))
app.get("/",(req,res)=>{
    res.json({message:"hello"});
})
app.use(cookieParser())
app.use("/api/auth",authRouter)
app.use("/api/user",userRouter)
app.listen(port,()=>{
    connectDb()   
    console.log("server started")
})