import { client } from "../routers/prismaclient.routes";

export async function writeCount(producId:number, counts: number, basketId:number){
   try {
     return await client.count.create({data:{productId:producId, counts:counts, basketId:basketId}})
   } catch (error) {
        console.error("Error with service writeCount " + error);
   }
}
export async function findCount(productId:number, basketId:number){
    try {
        return await client.count.findFirst({where:{productId:productId, basketId:basketId}})
    } catch (error) {
        console.error("Error with service countGet " + error);
    }
}
export async function removeCount(id:number){
    try {
        return await client.count.delete({where:{id:id}})
    } catch (error) {
        console.error("Error with service removeCount " + error);
    }
}

export async function findCountById(id:number){
    try {
        return await client.count.findUnique({where:{id:id}})
    } catch (error) {
        console.error("Error with service findCountById " + error);
    }
}