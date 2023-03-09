import {Router} from 'express'
import { postProducts, updateProducts, deleteProducts, getAllProducts, 
    getProductbyId, getProductsbyTypeId, getSearchProduct } from '../controllers/products'
import { uploadFile } from '../middlewares/uploads'
import { productsCheck } from '../validators/products'
import { userMiddleWhere } from '../middlewares/userMiddlewere'
const router = Router()


router.post('/post/admin',  uploadFile(), userMiddleWhere, productsCheck(), postProducts)
router.get('/getbytypeid/:id', getProductsbyTypeId)
router.get('/getbyid/:id', getProductbyId)
router.get('/getbysearch', getSearchProduct)
router.get('/getall/admin', userMiddleWhere, getAllProducts)
router.put('/put/admin/:id',  uploadFile(), userMiddleWhere, productsCheck(), updateProducts)
router.delete('/delete/admin/:id', userMiddleWhere, deleteProducts)

export default router