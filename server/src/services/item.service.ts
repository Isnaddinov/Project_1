
import { client } from "../routers/prismaclient.routes";
import { Item } from "../types/types";

export async function writeItem(data:Item[]){
   try {
     return await client.item.createMany({data})
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