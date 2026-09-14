import jwt from 'jsonwebtoken'

const verification = async (req,res,next)=>{
    try {
        let {token} = req.cookies
        if(!token){
            console.log("token issue")
            return res.status(400).json({message:"token not available"})
        }
        let verifyToken = await jwt.verify(token,process.env.JWT_SECRET)
        if(!verifyToken){
            return res.status(401).json({message:"Invalid Token"})
        }
        console.log(verifyToken)
        req.userId = verifyToken.id
        next()
    } catch (error) {
        return res.status(500).json({message:"is auth error"})
    }
}

export default verification