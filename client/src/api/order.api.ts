import axios from "axios";
import { basketStorage, orderStorage } from "../storage/storeages";
import type { Basket } from "../types/types";


export async function postOrder(name:string, surname:string, phone:string, viloyat:string, tuman:string, 
    shahar:string, aniq_adress: string, umummiybahosi: number) {
    try {
        let baskets:Basket[] = []
        basketStorage.subscribe((basket) => {
            baskets = basket
        })
        const basketId:number = baskets[0].id

        const send = {
            name, 
            surname, 
            phone, 
            viloyat, 
            tuman, 
            shahar, 
            aniq_adress, 
            umummiybahosi, 
            basketId
        }
        const order = await axios.post(`http://localhost:9090/stroyapi/order/post`, send)
        orderStorage.set(order.data.orders)
    } 
    catch (err:any) {
        alert(err.message);
        return null
    }
}