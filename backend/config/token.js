import jwt from 'jsonwebtoken'

const genToken = async(id)=>{
    try {
        let token = jwt.sign({id},process.env.JWT_SECRET,{
            expiresIn: `7d`
        })
        return token
    } catch (error) {
        console.log(`Internal Token Error: ${error}`)
    }
}

export default genToken