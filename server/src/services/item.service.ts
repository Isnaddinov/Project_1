import { log } from "console";
import { client } from "../routers/prismaclient.routes";

export async function writeItem(name: string, img: string, price: number, desc: string, count:number, discount: number, orderId:number){
   try {
     return await client.item.createMany({data:{name:name, img:img, price: price,  desc:desc, count:count, discount:discount, orderId:orderId}})
   } catch (error) {
        console.error("Error with service writeCount " + error);
   }
}

export async function findItemById(id:number){
    try {
        return await client.item.findUnique({where:{id:id}})
    } catch (error) {
        console.error("Error with service find by id " + error);
    }
}

export async function removeItem(id:number){
    try {
        return await client.item.delete({where:{id:id}})
    } catch (error) {
        console.log("Error with service remove by id");
    }
}