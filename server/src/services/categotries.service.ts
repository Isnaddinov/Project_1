import { client } from "../routers/prismaclient.routes";

export async function getAllCategories() {
    try {
        return await client.categories.findMany()
    } catch (error) {
        console.error("Error with service get All Categories " + error);
    }
}
export async function writeCategory(name: string) {
    try {
        return await client.categories.create({ data: { name: name } })
    } catch (error) {
        console.error("Error with service write Category " + error);
    }
}
export async function putCategory(id: number, name: string) {
    try {
       return await client.categories.update({ where: { id: id }, data: { name: name } })
    } catch (error) {
        console.error("Error with service write Category " + error);
    }
}
export async function removeCategory(id:number) {
    try {
       return await client.categories.delete({ where: { id: id } })
    } catch (error) {
        console.error("Error with service write Category " + error);
    }
}
export async function findCategoryById(categories_id: number) {
    try {
     return await client.categories.findMany({where:{id:categories_id}})
    } catch (error) { console.error("Error with getbyId category " + error) } }