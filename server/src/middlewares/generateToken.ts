import jwt from 'jsonwebtoken'
import { sec } from './config';

export function generateAccessToken(id:number, role:string){
    const payload = {
        id,
        role
    }

    return jwt.sign(payload, sec.secret, {expiresIn: "24h"})   
}
export function generateUserIdToken(id:number){
    const payload = {
        id
    }

    return jwt.sign(payload, sec.secret, {expiresIn: "24h"})   
}


