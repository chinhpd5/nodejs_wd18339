import {getList,getById,signup,update,remove,signin} from '../controllers/user.controller.js';
import express from 'express'
import checkAuth from '../middleware/auth.js';
const router = express.Router();

// danh sách user
router.get('/',checkAuth,getList);

// get theo id
router.get('/:id',checkAuth,getById);

// đăng kí
//user/signup
router.post('/signup',signup);

//đăng nhập
//user/signin
router.post('/signin',signin);

//chỉnh sửa
router.put('/:id',update)

// xóa
router.delete('/:id',remove)

export default router;
