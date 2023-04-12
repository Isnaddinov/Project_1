import axios from "axios";
import { basketStorage } from "../storage/storeages";


const url = `http://localhost:9090/stroyapi`

export async function postBasket(name:string, userId:number){
    try {
        const basket = { 
            name,
            userId
        }
        const newBasket = await axios.post(url + `/basket/post`, basket)
        
    } catch (err:any) {
        alert(err.message);
        return null
        
    }
}

export async function getBasket(token:string){
    try {
       const basket = await axios.get(url + `/basket/get?token=${token}`)
    
     return  basketStorage.set(basket.data.loginBasket)
     
    } catch (err:any) {
        alert("Foydalanuvchi avtorizatsiya qilmagan");
        return null
    }
}