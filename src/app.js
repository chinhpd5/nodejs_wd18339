import express from 'express';
import {engine} from 'express-handlebars';
import path,{dirname} from 'path';
import { fileURLToPath } from 'url';
import mongoose from 'mongoose';
import 'dotenv/config'

const app = express()
const port = process.env.PORT

//connect MongoDB
mongoose.connect(process.env.CONNECTION_STRING_MONGODB)
  .then(() => console.log('Connected!'));

// nhận dữ liệu khi post
app.use(express.json());



//View - đường dẫn tuyệt đối
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
app.use(express.static(path.join(__dirname,'uploads')));

//
// view
// app.engine('hbs', engine({extname: '.hbs'}));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname,'/views'));
//

//router
import routerProduct from './routers/product.router.js';
import routerCategory from './routers/category.router.js';
import routerComon from './routers/comon.router.js';
import routerUser from './routers/user.router.js'
import routerCart from './routers/cart.router.js'
import checkAuth from './middleware/auth.js';

app.use('/product',checkAuth,routerProduct);
app.use('/category',checkAuth,routerCategory);
app.use('/cart',checkAuth,routerCart);
app.use('/user',routerUser);
app.use('/',routerComon);
//

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})