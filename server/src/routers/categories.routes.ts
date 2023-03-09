import { Router } from 'express'
import { getCategories, postCategory, updateCategory, deleteCategory } from '../controllers/categories'
import { uploadFile } from '../middlewares/uploads'
import { categoriesCheck } from '../validators/categories'
import { userMiddleWhere } from '../middlewares/userMiddlewere'

const router = Router()


router.post('/post/admin', categoriesCheck(), userMiddleWhere, postCategory)
router.get('/get', getCategories)
router.delete('/delete/admin/:id', userMiddleWhere, deleteCategory)
router.put('/put/admin/:id', categoriesCheck(), userMiddleWhere, updateCategory)

export default router