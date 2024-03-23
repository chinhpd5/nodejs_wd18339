import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';

export function getList(req,res){
    const nameString = req.query.name;
    const filter ={};
    if(nameString)
        filter.name = nameString

    User.find(filter)
        .then(data=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json({message: err})
        })
}

export function getById(){
    
}

// [POST] user/signup
export async function signup(req, res){
    
    try {
        //lấy data
        const data = req.body;

        //kiểm tra user theo username
        const userExist = await User.findOne({email: data.email});

        if(userExist)
            return res.status(400).json({message: `Đã tồn tại email: ${data.email}`});

        //Mã hóa mật khẩu
        const passwordHashed = await bcryptjs.hash(data.password, 10);
        // console.log(passwordHashed);

        // Gán lại mật khẩu sau khi đã mã hóa
        data.password = passwordHashed

        // thêm vào cơ sở dữ liệu
        const userSuccess = await User.create(data);

        if(userSuccess){
            // ẩn đi password đã mã hóa
            userSuccess.password = undefined;
            res.status(201).json({
                message: "Thêm tài khoản thành công",
                data: userSuccess
            })
        }
    } catch (error) {
        res.status(500).json({message: error})
    }


}

export function update(){
    
}

export function remove(){
    
}