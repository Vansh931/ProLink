import {v2 as cloudinary} from 'cloudinary'
import fs from 'fs'
const uploadOnCloudinary = async(fileLocation)=>{
    cloudinary.config({
        cloud_name:process.env.CLOUDINARY_CLOUD_NAME,
        api_key:process.env.CLOUDINARY_API_KEY,
        api_secret:process.env.CLOUDINARY_API_SECRET
    })
    try {
        if(!fileLocation){
            return null
        }
        const uploader = await cloudinary.uploader.upload(fileLocation)
        fs.unlinkSync(fileLocation)
        return uploader.secure_url
    }
    catch (error) {
        fs.unlinkSync(fileLocation)
        console.log(error);
    }
}

export default uploadOnCloudinary