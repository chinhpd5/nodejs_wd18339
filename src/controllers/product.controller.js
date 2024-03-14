const productList = [
    { id: 1, name: "product1", price: 300 },
    { id: 2, name: "abc", price: 300 },
    { id: 3, name: "abc", price: 300 }
]

import Product from '../models/product.model.js';
// [GET] /product
export function index(req, res) {
    Product.find()
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
    const product = productList.find(item => item.id == id);
    if (product)
        res.send(product);
    else
        res.send("Không tìm thấy sản phẩm")
}
//[POST] /product
export function insert(req, res) {
    const data = req.body;
    if (data) {
        productList.push(data)
    }
    res.send(productList);
}
//[PUT] /product/:id
export function update(req, res) {
    //b1: lấy id
    const id = req.params.id;
    //b2: lấy data
    const data = req.body;
    //b3: kiểm tra data có tồn tại
    if (data != {}) {
        // có dữ liệu
        //b4: lấy index của sản phẩm theo id
        if (id > 0) {
            const index = productList.findIndex(item => item.id == id);
            if (index >= 0) {
                productList[index] = data;
                res.send(productList);
            } else {
                res.send("không tìm thấy dữ liệu")
            }
        }
    } else {
        res.send("Không nhận được dữ liệu")
    }
    //kiểm index
    // thay thế data mới vào data cũ
    // gửi lại array productList
}
//[DELETE] /product/:id
export function remove(req,res){
    //b1: lấy id
  const id = req.params.id;
  // const isCheck = productList.some(item => item.id == id);
  const index = productList.findIndex(item=> item.id ==id);

  if(index>=0){
    productList.splice(index,1);
    res.send(productList)
  }
  else{
    res.send('Không tìm thấy sản phẩm cần xóa')
  }
  //b2: kiểm tra id của sản phẩm đó có tồn tại hay k
  //b3: xóa
}