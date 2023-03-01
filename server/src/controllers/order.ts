import { Request, Response } from "express";
import { Order } from "../types/types";
import {validationResult} from "express-validator"
import { findOrderByBasketId, removeOrder, writeOrder } from "../services/order.service";

export async function getOrderfoByBaseketId(req: Request, res: Response) {
    try {
        const basket_id:number = +req.params.id
        const order = await findOrderByBasketId(basket_id)
        if(!order){return res.status(400).json({message: "Order not found By Id"})}
        return res.status(200).json({message: "User_info got", order})
    } catch (error) {
        res.status(400).json({message: "Error with writing Order " + error})
    }
}

export async function postOrder(req: Request, res: Response) {
    try {
        const body:Order = req.body
        
        const {name, surname, phone, viloyat, tuman, shahar, aniq_adress, umummiybahosi, productsId, status, basketId} = body
        const order:Order = {
            name, 
            surname, 
            phone, 
            viloyat, 
            tuman, 
            shahar, 
            aniq_adress, 
            umummiybahosi, 
            productsId,
            status,
            basketId
        }
        
        const errorsv = validationResult(req) 
        if(!errorsv.isEmpty()){
            const{errors} = Object(errorsv)
            const {msg} = errors[0]
            return res.status(400).json({message: msg})
        }
        const orders = await writeOrder(order)
        return res.status(200).json({message: "Order writed ", orders})
    } catch (error) {
        res.status(400).json({message: "Error with putting Order " + error})
    }
}

export async function deleteOrder(req: Request, res: Response) {
    try {
        const id:number = +req.params.id
        const findOrder = await findOrderByBasketId(id)
        if(!findOrder){return res.status(400).json({message: "Order not found By Id"})}
       const order = await removeOrder(id)    
        return res.status(200).json({message: "Order deleted", order})
    } catch (error) {
        res.status(400).json({message: "Error with deletening Order " + error})
    }
}
