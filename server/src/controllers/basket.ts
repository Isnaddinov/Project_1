import { Request, Response } from "express";
import { Basket } from "../types/types";
import jwt from 'jsonwebtoken'
import { SEC_KEY } from "../routers/prismaclient.routes";
import { basketDelete, findBasketById, getByUserId, WriteBasket } from "../services/basket.service";
import { findUserById } from "../services/user.service";
import { generateUserIdToken } from "../middlewares/generateToken";

export async function getBasket(req: Request, res: Response) {

    try {
        //Eslatma! frontend query zaprosda token  dab yibarganmiz
        const { token } = req.query
        const { id } = Object(jwt.verify(String(token), SEC_KEY))
        const user = await findUserById(id)
        if (!user) { return res.status(400).json({ message: "User not found" }) }
        const loginBasket = await getByUserId(id)
        return res.status(200).json({ message: "Basket got ", loginBasket })
    } catch (error) {
        res.status(400).json({ message: "Error get basket" + error })
    }

}
export async function postBasket(req: Request, res: Response) {
    try {
        const body: Basket = req.body
        const {name, userId } = body
        const  {id} = Object(jwt.verify(userId, SEC_KEY))
        const basket = await WriteBasket(name, id)
        if(!basket){return res.status(400).json({ message: "One Basket for One user" })}
        const user_id = generateUserIdToken(Number(basket.userId))
        const newBasket = {id:basket.id, name:basket.name, userId:userId }
        return res.status(200).json({ message: "Basket writed ", newBasket})
    } catch (error) {
        res.status(400).json({ message: "Error post basket" + error })
    }
}

export async function deleteBasket(req: Request, res: Response) {
    try {
        const id = +req.params.id
        const findBasket = await findBasketById(id)
        if (!findBasket) { return res.status(400).json({ message: "Basket not found" }) }
        const basket = await basketDelete(id)
        res.status(200).json({ message: "Basket has deleted", basket })
    } catch (error) {
        res.status(400).json({ message: "Error with delete basket" + error })
    }
}