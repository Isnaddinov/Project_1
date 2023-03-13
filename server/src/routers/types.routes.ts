import {Router} from 'express'
import { postTypes, updateTypes, deleteTypes, getAllTypes, getTypesbyCat_id,  } from '../controllers/types'
import { uploadFile } from '../middlewares/uploads'
import { typesCheck } from '../validators/types'
import { userMiddleWhere } from '../middlewares/userMiddlewere'
const router = Router()



router.post('/post/admin', userMiddleWhere, typesCheck(), uploadFile(), postTypes)
router.get('/get/:id', getTypesbyCat_id)
router.get('/getall/admin', userMiddleWhere, getAllTypes)
router.put('/put/admin/:id',  uploadFile(), userMiddleWhere, typesCheck(),updateTypes)
router.delete('/delete/admin/:id',userMiddleWhere, deleteTypes)

export default router