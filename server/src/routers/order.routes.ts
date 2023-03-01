import {Router} from 'express'
import { postOrder, deleteOrder, getOrderfoByBaseketId, } from '../controllers/order'
import { orderCheck } from '../validators/order'

const router = Router()


router.post('/post', postOrder)
router.get('/get/:id', getOrderfoByBaseketId)
router.delete('/delete/:id', deleteOrder)

export default router