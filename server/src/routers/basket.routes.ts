import {Router} from 'express'
import { getBasket, postBasket, deleteBasket} from '../controllers/basket'
import { userMiddleWhere } from '../middlewares/userMiddlewere'
const router = Router()



router.post( '/post',postBasket)
router.get('/get', getBasket)
router.delete('/delete/:id', userMiddleWhere, deleteBasket)

export default router