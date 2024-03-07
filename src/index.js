const express = require('express')
const app = express()
const port = 3000

const productList =[
  {id:1,name:"product1", price:300},
  {id:2,name:"product2", price:300},
  {id:3,name:"product3", price:300}
]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/product',(req,res)=>{
    const query = req.query;
    console.log(query);

    res.send(productList)
})

app.get('/product/:id',(req,res)=>{
  let id = req.params.id;
  const product = productList.find(item => item.id == id);
  if(product)
    res.send(product);
  else
    res.send("Không tìm thấy sản phẩm")
})

app.get('/category',(req,res)=>{
  res.send('category')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

// npm init -y

// tạo index.js

//npm i express

//chạy node index.js

// cài đặt nodemon: restart server khi save
// npm i nodemon --save-dev

// thêm "start": "nodemon src/index.js" 
//vào script của file package.json

// để chạy: npm start