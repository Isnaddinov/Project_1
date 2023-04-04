import {Router} from 'express'
import { regisratsion, login, getUsers } from '../controllers/user'
import {check} from 'express-validator'
import { userMiddleWhere } from '../middlewares/userMiddlewere'
import { loginCheck } from '../validators/users'

const router = Router()

router.post('/regisratsion', loginCheck(), regisratsion)
router.get('/login',login)
router.get('/auth/admin', userMiddleWhere ,getUsers)

export default router
