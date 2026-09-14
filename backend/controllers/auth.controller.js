import genToken from "../config/token.js"
import User from "../models/user.model.js"
import bcrypt from 'bcryptjs'
import dotenv from 'dotenv'
dotenv.config()

export const signUp = async(req,res)=>{
    try {
        let {firstName,lastName,userName,email,password} = req.body
        const existEmail = await User.findOne({email:email})
        if(existEmail){
            return res.status(400).json({message:"email already exist"})
        }
        const existUserName = await User.findOne({userName:userName})
        if(existUserName){
            return res.status(400).json({message:"userName already exist"})
        }
        if(password.length<8) return res.status(400).json({message:"password must be atleast 8 characters"})
        let hashedPassword = await bcrypt.hash(password,10)

        const user = await User.create({
            firstName,
            lastName,
            userName,
            email,
            password:hashedPassword
        })
        let token = await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENVIRONMENT==="production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(201).json(user)
    } catch (error) {
        res.status(500).json({message:`Internal SignUp Error: ${error}`})
    }
}
export const Login = async (req,res)=>{
    try {
        let {email,password} = req.body
        const user = await User.findOne({email:email})
        if(!user){
            return res.status(400).json({message:"user does not exist"})
        }

        const verifyPassword = await bcrypt.compare(password,user.password)
        if(!verifyPassword) return res.status(400).json({message:"Incorrect Password"})
        let token = await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            secure:process.env.NODE_ENVIRONMENT==="production",
            sameSite:"strict",
            maxAge:7*24*60*60*1000
        })
        return res.status(200).json(user)
    } catch (error) {
        console.log(error)
        res.status(500).json({message:`Internal Login Error: ${error}`})
    }
}

export const Logout = async(req,res)=>{
    try {
        res.clearCookie("token")
        return res.status(200).json({message:"successfully Logged out"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message:`Internal Login Error: ${error}`})
    }
}