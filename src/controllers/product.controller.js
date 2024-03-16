const productList = [
    { id: 1, name: "product1", price: 300 },
    { id: 2, name: "abc", price: 300 },
    { id: 3, name: "abc", price: 300 }
]

import Product from '../models/product.model.js';
import Category from '../models/category.model.js';
// [GET] /product
export function index(req, res) {
    Product.find().populate('categoryId')
        .then(data =>{
            res.json(data);
        })
        .catch(()=>{
            res.json({message:"Có lỗi khi lấy dữ liệu"});
        })
}
//[GET] /product/:id
export function getById(req, res) {
    let id = req.params.id;
    if(id){
        Product.findById(id).populate('categoryId')
            .then(data=>{
                res.json(data);
            })
            .catch(()=>{
                res.json({message: "Không tìm thấy sản phẩm"})
            })
    }else{
        res.json({message:"Không nhận được id"})
    }
}
//[POST] /product
export function insert(req, res) {
    const product = req.body;
    if(product != {}){
        Product.create(product)
            .then(data=>{
                res.json(data)
            })
            .catch(()=>{
                res.json({message: "Có lỗi khi thêm sản phẩm"})
            })
    }else{
        res.json({message: "Không nhận dược dữ liệu"})
    }
}
//[PUT] /product/:id
export function update(req, res) {
    const id = req.params.id;
    // console.log(id);
    if(id){
        const productData = req.body;
        // console.log(productData);
        if(productData != {}){
            Product.findByIdAndUpdate(id,productData,{new:true})
                .then((data)=>{
                    res.json(data)
                })
                .catch(()=>{
                    res.json({message: "có lỗi khi sửa"});
                })
        }else{
            res.json({message: "Không nhận được dữ liệu"});
        }
    }else{
        res.json({message: "Không nhận được id"})
    }
}
//[DELETE] /product/:id
export function remove(req,res){
    const id = req.params.id;
    // console.log(id);
    if(id){
        Product.findByIdAndDelete(id)
            .then((data)=>{
                res.json(data);
            })
            .catch(()=>{
                res.json({message: "có lỗi khi xóa"});
            })
    }else{
        res.json({message: "Không nhận được id"})
    }
    
}