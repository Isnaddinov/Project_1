import { Request, Response } from "express";
import { allUsersGet, findUserByUsername, postUser } from "../services/user.service";
import { generateAccessToken } from "../middlewares/generateToken";
import { validationResult } from "express-validator";
import { User } from "../types/types";
import bcrypt from 'bcrypt';

export async function regisratsion(req: Request, res: Response) {
    try {
        const errorsv = validationResult(req) 
        if(!errorsv.isEmpty()){
            const{errors} = Object(errorsv)
            const {msg} = errors[0]
            return res.status(400).json({message: msg})
        }
        const body:User = req.body
        const {name, username, password, role} = body
        const candidate = await findUserByUsername(username)
        if(candidate){
           return res.status(400).json({message: 'This username already busy'}) } 
        const User = await postUser(name, username, password, role)
        const token =  generateAccessToken(Number(User?.id), String(User?.role))
        const newUser = {id:token, name:User?.name, username: User?.username, password: User?.password, role: User?.role}
        return res.status(200).json({message: 'User writed', newUser})
    } catch (error) {
        console.error(error);
        res.status(400).json({message: 'Error registratsion' + error})
    }

}
export async function login(req: Request, res: Response) {
    try {
        const body:User = req.body
        const {username, password, role} = body
        const user = await findUserByUsername(username) 
        if(!user){
          return  res.status(400).json({message: `Bunday ${username} usernameli foydalanuvchi topilmadi `})
        }
        const validPassword = bcrypt.compareSync(password, user.password)
        if(!validPassword){
            return res.status(400).json({mesaage: 'Parol xato kiritilgan'})
        }
        const token = generateAccessToken(user.id,user.role)
        return res.status(200).json({message: "All rihgt", token})
    } catch (error) {
        console.error("Login Error" + error);
    }
}


export async function getUsers(req: Request, res: Response) {
    try {
        const Allusers = await allUsersGet()
        res.status(200).json({ message: "All right connection", Allusers})
    } catch (error) {
        console.error("Error auth " + error); 
    }
}

