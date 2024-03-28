import express from 'express'
const router = express.Router();
import {addCart,getCartByUser} from '../controllers/cart.controller.js'

//Lấy danh sách
// router.get('/',index);
router.post('/',addCart)
router.get('/user/:id',getCartByUser)


export default router;