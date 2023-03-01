import {PrismaClient} from "@prisma/client";

export const client =  new PrismaClient

function connect(){
 if(!client.$connect()){
    console.error("Error wtih connect database ");}
}
connect()