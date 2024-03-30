import express from 'express'
const router = express.Router();
import {addCart,getCartByUser,updateItem} from '../controllers/cart.controller.js'

//Lấy danh sách
// router.get('/',index);
router.post('/',addCart)
router.get('/user/:id',getCartByUser)
router.put('/:id',updateItem)

export default router;