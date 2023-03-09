import { client } from "../routers/prismaclient.routes";

export async function typesByCatId(categories_id:number){
   try {
    return  await client.types.findMany({ where: { categoriesId: categories_id } })
   } catch (error) {
    console.error("Error with service typesByCatId type " + error)
   } 
}

export async function writeType(name:string, img:string, categories_id: number){
   try {
    return  await client.types.create({ data: { name: name, img: img, categoriesId: Number(categories_id) } })
   } catch (error) {
    console.error("Error with service writeType type " + error)
   } 
}
export async function findTypeById(id: number){
   try {
    return await client.types.findUnique({where:{id}})
   } catch (error) {
    console.error("Error with service findTypeById  type " + error)
   } 
}
export async function putType(id:number, name:string, img: string ){
  try {
    return  await client.types.update({where:{id}, data:{name, img}})
  } catch (error) {
    console.error("Error with service putType type " + error)
  }
}
export async function putType1(id:number, name:string, img: string, categories_id: number ){
   try {
    return await client.types.update({where:{id}, data:{name:name, img:img, categoriesId: categories_id}})
   } catch (error) {
    console.error("Error with service putType1 type " + error)
   } 
}
export async function removeType(id: number){
   try {
    return await client.types.delete({where:{id}})
   } catch (error) {
    console.error("Error with service removeType type " + error)
   } 
}
export async function allTypesGet(){
   try {
    return await client.types.findMany()
   } catch (error) {
    console.error("Error with service allTypesGet type " + error)
   } 
}