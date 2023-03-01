import { Order } from './../types/types';
import { client } from './../routers/Prismaclient.routes';
export async function findOrderByBasketId(basket_id:number){
    try {
        return await client.order.findMany({where:{basketId:basket_id}})
    } catch (error) {
        console.error("Error findOrder service " + error);}
}
export async function writeOrder(order:Order ){
    try {
        return await client.order.create({data:{name:order.name, surname:order.surname, phone:order.phone,
            viloyat:order.viloyat,tuman:order.tuman, shahar:order.shahar, aniq_adress:order.aniq_adress, 
            umumiybahosi:order.umummiybahosi,products:order.productsId, status:order.status,basketId:order.basketId }})
            
    } catch (error) {
        console.error("Error write Order service " + error);}
}
export async function removeOrder(id:number){
    try {
      return await  client.order.delete({where:{id:id}})
    } catch (error) {
        console.error("Error remove Order service " + error)}
}