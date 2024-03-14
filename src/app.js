// const express = require('express')
// const { engine } = require('express-handlebars')
// const path = require('path');

import express from 'express';
import {engine} from 'express-handlebars';
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';

const app = express()
const port = 3000

//connect MongoDB
mongoose.connect('mongodb://127.0.0.1:27017/WD18339')
  .then(() => console.log('Connected!'));

app.use(express.json());

//View - đường dẫn tuyệt đối
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
//

// view
app.engine('hbs', engine({extname: '.hbs'}));
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname,'/views'));
//

//router

// trung gian
// import router from './routers/index.js';
// router(app);

import routerProduct from './routers/product.router.js';
import routerCategory from './routers/category.router.js';
import routerComon from './routers/comon.router.js';

app.use('/product',routerProduct);
app.use('/category',routerCategory);
app.use('/',routerComon);
//

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})