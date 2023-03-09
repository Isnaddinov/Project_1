import {PrismaClient} from "@prisma/client";
import dotenv from 'dotenv'
 dotenv.config()
export const SEC_KEY = process.env.SECRET_KEY!
export const PORT = process.env.PORT!

export const client =  new PrismaClient

function connect(){
 if(!client.$connect()){
    console.error("Error wtih connect database ");}
}
connect()