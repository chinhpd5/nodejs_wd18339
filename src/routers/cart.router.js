import express from 'express'
const router = express.Router();
import {addCart} from '../controllers/cart.controller.js'

//Lấy danh sách
// router.get('/',index);
router.post('/',addCart)


export default router;