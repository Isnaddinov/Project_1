import { Router } from "express";
import { userMiddleWhere } from "../middlewares/userMiddlewere";
import { bannerChek } from "../validators/banner";
import { deleteBanner, getBanner, postBanner, putBanner } from "../controllers/banner";
import { uploadFile } from "../middlewares/uploads";
 


const router = Router()

router.get('/get', getBanner)
router.post('/post/admin', userMiddleWhere, bannerChek(), uploadFile(), postBanner)
router.put('/put/admin/:id', userMiddleWhere, bannerChek(), uploadFile(), putBanner)
router.delete('/delete/admin/:id', userMiddleWhere,  deleteBanner)

export default router