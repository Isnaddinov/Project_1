import { client } from "../routers/prismaclient.routes";

export async function productByTypeId(type_id: number){
   try {
    return await client.products.findMany({ where: { typesId: type_id } })
   } catch (error) {
    console.error("Error with get product service by type_id " + error);  }
}
export async function findProductById(id: number){
   try {
    return await client.products.findUnique({ where: { id: id } })
   } catch (error) {
    console.error("Error with get product service by id " + error);  }
}
export async function findProductByName(name: string){
   try {
    return await client.products.findMany({ where: { name: name } })
   } catch (error) {
    console.error("Error with search product service by name " + error);  }
}
export async function writeProduct(name: string, img: string, price: number, desc: string, discount: number, type_id: number){
   try {
    return await client.products.create({ data:{name:name, img:img, price:price, desc:desc, discount:discount, typesId:type_id} })
   } catch (error) {
    console.error("Error with write product service " + error);  }
}
export async function putProduct(id:number, name: string, img: string, price: number, desc: string, discount: number){
   try {
    return await client.products.update({ where:{id:id}, data:{name:name, img:img, price:price, desc:desc, discount:discount} })
   } catch (error) {
    console.error("Error with put product service " + error);  }
}
export async function putProduct1(id:number, name: string, img: string, price: number, desc: string, discount: number, type_id: number){
   try {
    return await client.products.update({ where:{id:id}, data:{name:name, img:img, price:price, desc:desc, discount:discount, typesId:type_id} })
   } catch (error) {
    console.error("Error with put product service 1 " + error);  }
}
export async function removeProdcut(id: number){
    try {
       return await client.products.delete({where:{id:id}}) 
    } catch (error) {
        console.error("Error with remove product service " + error);}
}
export async function allProductsGet(){
    try {
     return await client.products.findMany()
    } catch (error) {
     console.error("Error with get All product " + error);  }
 }