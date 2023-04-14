import { Router } from "express";
import { delteItem, postItem } from "../controllers/item";

const router = Router()

router.post('/post', postItem)
router.delete('/delete/:id', delteItem )

export default router