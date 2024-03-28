import express from 'express'
const router = express.Router();
import {index, getById,insert,update,remove,getProductByCateId} from '../controllers/product.controller.js'
import checkAuth from '../middleware/auth.js';

//Lấy danh sách
router.get('/',index);
//lấy sản phẩm theo id
router.get('/:id',getById);
//thêm mới sản phẩm
router.post('/',insert)
// sửa sản phẩm
router.put('/:id',update)
//xóa sản phẩm
router.delete('/:id',remove)
//lấy danh sách sản phẩm theo danh mục
router.get('/category/:id',getProductByCateId)

export default router;