//npm i multer
import multer from "multer";

const storage = multer.diskStorage({
    // khai báo nơi lưu trữ file
    destination: (req,file,callback)=>{
        callback(null,'src/uploads')
    },
    filename: (req, file,callback)=>{
        console.log(file);
        callback(null,file.originalname);
    }
})

export const upload = multer({storage: storage})


