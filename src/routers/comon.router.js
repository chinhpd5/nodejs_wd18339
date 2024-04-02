import express from 'express'
const router = express.Router();
import {upload,MultiUpload} from '../middleware/upload.js'
import {Upload as uploadToDB} from '../controllers/common.controller.js'

router.get('/', (req, res) => {
    res.send('home')
})

router.get('/tintuc', (req, res) => {
    res.send('tin tức')
})

router.post('/upload',upload.single("image"),uploadToDB)
router.post('/multiupload',MultiUpload.array('images'),()=>{})

export default router;