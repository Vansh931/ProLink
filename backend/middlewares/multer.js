import multer from 'multer'
import path from 'path'
const storage = multer.diskStorage({
    destination:(req,file,callBack)=>{
        callBack(null,"./public")
    },
    filename:(req,file,callBack)=>{
        const  extension= path.extname(file.originalname)
        const uniqueName = `${Date.now()}-${Math.random()*1e9}${extension}`
        callBack(null,uniqueName)
    }
})
const upload = multer({storage})


export default upload