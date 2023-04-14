import {Router} from 'express'
import userRouter from './users.routes'
import basketRouter from './basket.routes'
import categoriesRouter from './categories.routes'
import typeRouter from './types.routes'
import productRouter from './products.routes'
import orderRouter from './order.routes'
import itemRouter from './item.routes'
import bannerRouter from './banner.routes'


const router = Router()


router.use('/user', userRouter )
router.use('/basket', basketRouter )
router.use('/categories', categoriesRouter )
router.use('/types', typeRouter )
router.use('/products', productRouter )
router.use('/order', orderRouter )
router.use('/item', itemRouter )
router.use('/banner', bannerRouter)

export default router


