import { Router } from "express";
import { deleteCount, getCount, postCount } from "../controllers/count";

const router = Router()

router.post('/post', postCount)
router.get('/get', getCount ) 
router.delete('/delete/:id', deleteCount )

export default router