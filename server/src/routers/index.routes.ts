import {Router} from 'express'
import userRouter from './users.routes'
import basketRouter from './basket.routes'
import categoriesRouter from './categories.routes'
import typeRouter from './types.routes'
import productRouter from './products.routes'
import orderRouter from './order.routes'
import countRouter from './counts.routes'


const router = Router()


router.use('/user', userRouter )
router.use('/basket', basketRouter )
router.use('/categories', categoriesRouter )
router.use('/types', typeRouter )
router.use('/products', productRouter )
router.use('/order', orderRouter )
router.use('/count', countRouter )

export default router


