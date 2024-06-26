//npm i multer
import multer from "multer";
import path from 'path'

const storage = multer.diskStorage({
    // khai báo nơi lưu trữ file
    destination: (req,file,callback)=>{
        callback(null,'src/uploads')
    },
    filename: (req, file,callback)=>{
        // console.log(file);
        const filename = Date.now() + path.extname(file.originalname);
        req.body.image = filename;
        callback(null,filename);
    }
})

export const upload = multer({storage: storage})


const MuliStorage = multer.diskStorage({
    // khai báo nơi lưu trữ file
    destination: (req,file,callback)=>{
        callback(null,'src/uploads')
    },

    filename: (req, file,callback)=>{
        // console.log(file);
        req.body.images = req.body.images || [];
        const filename = Date.now() + path.extname(file.originalname);
        req.body.images.push(filename)
        callback(null,filename);
    }
})

export const MultiUpload = multer({storage: MuliStorage})

