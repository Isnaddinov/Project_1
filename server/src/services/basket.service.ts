import { client } from "../routers/Prismaclient.routes";

export async function getByUserId(id:number){
    try {
        return await client.basket.findUnique({where:{userId:id}})
     
    } catch (error) {
        console.error("Errro with service get basket " + error);}
}
export async function findBasketByUserId(id:number){
    const find = await client.basket.findUnique({where:{userId:id}, select:{id:true}})
    return find?.id
}

export async function WriteBasket(id:number){
    try {
        return await client.basket.create({ data:{userId:id}});
        
    } catch (error) {
        console.error("Errro with service write basket " + error);}
}
export async function basketDelete(id:number){
    try {
        return await client.basket.delete({where:{id:id}})
        
    } catch (error) {
        console.error("Errro with service write basket " + error);}
}
export async function findBasketById(id:number){
    try {
        return await client.basket.findUnique({where:{id}})
        
    } catch (error) {
        console.error("Errro with service findBasketbyId basket " + error);}
    
}
 