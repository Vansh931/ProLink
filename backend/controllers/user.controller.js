import User from "../models/user.model.js"
export const getCurrentUser = async (req,res)=>{
    try {
        let id = req.userId
        let user = await User.findById(id).select("-password")
        if(!user){
            return res.status(404).json({message:"User Not Found"})
        }
        return res.status(200).json(user)
    } catch (error) {
        console.error("Get current user error:", error)
        return res.status(500).json({message:"get current user error",error})
    }
}