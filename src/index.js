// const express = require('express')
// const { engine } = require('express-handlebars')
// const path = require('path');

import express from 'express';
import {engine} from 'express-handlebars';
import path,{dirname} from 'path';

import { fileURLToPath } from 'url';


const app = express()
const port = 3000

app.use(express.json());

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'/views'));

const productList =[
  {id:1,name:"product1", price:300},
  {id:2,name:"abc", price:300},
  {id:3,name:"abc", price:300}
]


app.get('/', (req, res) => {
  res.render('home',{name:"chinhpd"})
})

app.get('/product',(req,res)=>{
    res.render('product',{data: productList})
    // const query = req.query;
    // console.log(query);
    // //map, filter, reduce, some, every
    // const findProduct=  productList.filter(product => {
    //   return product.name.includes(query.name)
    // } )

    // if(findProduct.length)
    //   res.send(findProduct)
    // else
    //   res.send(productList)
})

app.get('/product/:id',(req,res)=>{
  let id = req.params.id;
  const product = productList.find(item => item.id == id);
  if(product)
    res.send(product);
  else
    res.send("Không tìm thấy sản phẩm")
})

app.post('/product',(req,res)=>{
  const data = req.body;
  if(data){
    productList.push(data)
  }
  res.send(productList);
})
// sửa dữ liệu
app.put('/product/:id',(req,res)=>{
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

app.delete('/product/:id',(req,res)=>{
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



app.get('/category',(req,res)=>{
  res.send('category')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})





// b1

// npm init -y

// tạo index.js

//npm i express

//chạy node index.js

// cài đặt nodemon: restart server khi save
// npm i nodemon --save-dev

// thêm "start": "nodemon src/index.js" 
//vào script của file package.json

// để chạy: npm start