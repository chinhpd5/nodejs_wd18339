import User from '../models/user.model.js';
import bcryptjs from 'bcryptjs';
import jwt from 'jsonwebtoken'
import 'dotenv/config'

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
        if(data.password && data.password != ""){
            // kiểm tra độ dài của password
            if(data.password.length <6)
                return res.json({message: "Password cần tối thiểu 6 kí tự"});

            const passwordHashed = await bcryptjs.hash(data.password, 10);
            // Gán lại mật khẩu sau khi đã mã hóa
            data.password = passwordHashed
        }

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
        console.log(error);
        res.status(500).json({message: error})
    }
}
// [POST] user/signin
export async function signin(req,res){
    // lấy data
    const data = req.body;
    // kiểm tra username có tồn tại hay không
    const userExist = await User.findOne({email: data.username});

    if(!userExist)
        return res.status(400).json({message: `Sai tài khoản`});

    // kiểm tra mật khẩu
    const isCheck = await bcryptjs.compare(data.password, userExist.password)

    if(!isCheck)
        return res.status(400).json({message: `Sai mật khẩu`});

    //sau khi đăng nhập thành công
    // tạo token từ thư viên jwt
    const token = jwt.sign({ name: userExist.name, username: userExist.email }, process.env.KEY_SECRET, { expiresIn: "30m" })

    // console.log(token);
    if(token){
        userExist.password = undefined;
        res.status(201).json({
            message: "Đăng nhập thành công",
            data: userExist,
            token
        })
    }

}

export function update(){
    
}

export function remove(){
    
}