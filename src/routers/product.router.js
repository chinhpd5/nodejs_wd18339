import express from 'express'
const router = express.Router();
import {index, getById} from '../controllers/product.controller.js'

//Lấy danh sách
router.get('/',index);
//lấy sản phẩm theo id
router.get('/:id',getById);
//thêm mới sản phẩm
router.post('/',(req,res)=>{
  const data = req.body;
  if(data){
    productList.push(data)
  }
  res.send(productList);
})
// sửa sản phẩm
router.put('/:id',(req,res)=>{
  //b1: lấy id
  const id = req.params.id;
  //b2: lấy data
  const data = req.body;
  //b3: kiểm tra data có tồn tại
  if(data != {}){
    // có dữ liệu
    //b4: lấy index của sản phẩm theo id
    if(id > 0){
      const index = productList.findIndex(item=> item.id ==id);
      if(index >= 0){
        productList[index] = data;
        res.send(productList);
      }else{
        res.send("không tìm thấy dữ liệu")
      }
    }
  }else{
    res.send("Không nhận được dữ liệu")
  }
  //kiểm index
  // thay thế data mới vào data cũ
  // gửi lại array productList
})
//xóa sản phẩm
router.delete('/:id',(req,res)=>{
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

})

export default router;