import express from 'express'
const router = express.Router();
import {index, getById,insert,update,remove} from '../controllers/product.controller.js'

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

export default router;