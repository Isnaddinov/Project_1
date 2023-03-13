import { Request, Response } from "express"
import { allBanner, findBanner, removeBanner, upadateBanner, writeBanner } from "../services/banner.service"
import { Banner } from "../types/types"
import { validationResult } from "express-validator"



export async function getBanner(req:Request, res: Response){
    try {
        const banner = await allBanner()
        res.status(200).json({message: "All banners", banner})
    } catch (error) {
        return res.status(400).json({message: 'Error with  getAllbanner ' + error})
    }
}




export async function postBanner(req:Request, res: Response){
    try {
        const errorsv = validationResult(req)
        if(!errorsv.isEmpty()){
            const {errors} = Object(errorsv)
            const {msg} = errors[0]
            return res.status(400).json({message : msg})
        }
        const body: Banner = req.body
        const img = String(req.file?.path)
        const{ title} = body
        const banner = await writeBanner(img, title)
        return res.status(200).json({message: "Banner has writed", banner})

    } catch (error) {
        return res.status(400).json({message: 'Error with write  banner' + error})
    }
}




export async function putBanner(req:Request, res: Response){
    try {
        const errorsv = validationResult(req)
        if(!errorsv.isEmpty()){
            const {errors} = Object(errorsv)
            const {msg} = errors[0]
            return res.status(400).json({message : msg})
        }
        const id:number = +req.params.id
        const find = await findBanner(id)
        if(!find){
          return  res.status(400).json({message: "Banner not found by id"})
        }
        const body: Banner = req.body
        const img = String(req.file?.path)
        const{ title} = body
        const banner = await upadateBanner(id, img, title)
        return res.status(200).json({message: "Banner has updated", banner})

    } catch (error) {
        return res.status(400).json({message: 'Error with   banner' + error})
    }
}




export async function deleteBanner(req:Request, res: Response){
    try {
        const id: number = +req.params.id
        const find = await findBanner(id)
        if(!find){
          return  res.status(400).json({message: "Banner not found by id"})
        }
        const banner = await removeBanner(id)
        return res.status(200).json({message: "Banner has deleted", banner})
    } catch (error) {
        return res.status(400).json({message: 'Error with   banner' + error})
    }
}