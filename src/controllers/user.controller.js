import User from '../models/user.model.js';

export function getList(req,res){
    User.find()
        .then(data=>{
            res.json(data)
        })
        .catch((err)=>{
            res.json({message: err})
        })
}

export function getById(){
    
}

export function insert(req, res){
    const data = req.body;
    console.log(data);
    if(data!={}){
        User.create(data)
            .then(newData=>{
                res.json({
                    message: "Thêm thành công",
                    data: newData
                })
            })
            .catch(err=>{
                res.json({message: err})
            })
    }
}

export function update(){
    
}

export function remove(){
    
}