import { client } from "../routers/prismaclient.routes"

export async function allBanner(){
    try {
        return await client.banner.findMany()
    } catch (error) {
        console.error("Error with service allBanner " + error)
    }
}
export async function writeBanner(img:string, title:string){
    try {
        return await client.banner.create({data:{img:img, title:title}})
    } catch (error) {
        console.error("Error with service writeBanner " + error)
    }
}

export async function findBanner(id:number){
    try {
        return await client.banner.findUnique({where:{id:id}})
    } catch (error) {
        console.error("Error with service findBanner " + error)
    }
}
export async function upadateBanner(id: number, img: string, title:string){
    try {
        return await client.banner.update({where:{id:id}, data:{img:img, title:title}})
    } catch (error) {
        console.error("Error with service upadateBanner " + error)
    }
}
export async function removeBanner(id:number){
    try {
        return await client.banner.delete({where:{id:id}})
    } catch (error) {
        console.error("Error with service removeBanner " + error)
    }
}