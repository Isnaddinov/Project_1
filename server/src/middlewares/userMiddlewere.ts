import jwt from 'jsonwebtoken'
import { NextFunction, Request, Response } from "express";
import { sec } from './config';



export async function userMiddleWhere(req: Request, res: Response, next: NextFunction) {
    try {
        const token = req.headers.authorization?.split(' ')[1]

        if (!token) {
            return res.status(403).json({ message: "Foydalanuvchi Avtorizatsidan o'tmagan" })
        }

        const { role } = Object(jwt.verify(token, sec.secret))

        let hasRole = false

        if (role === "admin") {
            hasRole = true
        }

        if (!hasRole) {
            return res.status(403).json({ message: "Foydalanuvchiga Ruxsat yo'q" })

        }

        next()

    } catch (error) {

        return res.status(403).json({ message: "Foydalanuvchi Avtorizatsidan o'tmagan" })

    }
}