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


//router
import routerProduct from './routers/product.router.js';
import routerCategory from './routers/category.router.js';
import routerComon from './routers/comon.router.js';

app.use('/product',routerProduct);
app.use('/category',routerCategory);
app.use('/',routerComon);

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