import jwt from 'jsonwebtoken'
import { SEC_KEY } from '../routers/prismaclient.routes'

export function generateAccessToken(id:number, role:string){
    const payload = {
        id,
        role
    }

    return jwt.sign(payload, SEC_KEY, {expiresIn: "24h"})   
}
export function generateUserIdToken(id:number){
    const payload = {
        id
    }

    return jwt.sign(payload, SEC_KEY, {expiresIn: "24h"})   
}



