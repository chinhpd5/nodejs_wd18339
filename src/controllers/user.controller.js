import User from '../models/user.model.js';

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

export function insert(req, res){
    const data = req.body;
    if(data!={}){
        User.create(data)
            .then(newData=>{
                res.json({
                    message: "Thêm thành công",
                    data: newData
                })
            })
            .catch(err=>{
                res.status(500).json({message: err})
            })
    }
}

export function update(){
    
}

export function remove(){
    
}