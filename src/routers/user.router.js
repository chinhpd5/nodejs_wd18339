import {getList,getById,insert,update,remove} from '../controllers/user.controller.js';
import express from 'express'
const router = express.Router();

// danh sách user
router.get('/',getList);

// get theo id
router.get('/:id',getById);

// thêm mới user
router.post('/',insert);

//chỉnh sửa
router.put('/:id',update)

// xóa
router.delete('/:id',remove)

export default router;
