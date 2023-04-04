import axios from "axios";
import { registerStore } from "../storage/storeages";
import type { Basket } from "../types/types";
import { postBasket } from "./basket.api";
 
const url = `http://localhost:9090/stroyapi`

export async function registerUser(name:string, username:string, password:string){
    try {
        const user = {
            name,
            username,
            password
        }
        const account = await axios.post(url + `/user/regisratsion`, user)
        if(account.data.newUser != undefined){
            alert(`${account.data.newUser.name} Registred in site`)
        }
        registerStore.set(account.data.newUser)
       const  userId: number = account.data.newUser.id
       const  userName: string = account.data.newUser.name
       await postBasket(userName, userId)
    } catch (err:any) {
        alert(err.message);
        return null
    }
}

export async function loginUser(username:string, password:string){
    try {
        const user = await axios.get(url + `/user/login?username=${username}&password=${password}`)
        if(user.data.message === "All rihgt"){
            alert(`You are login in site`)
        }
        return user.data

    } catch (err:any) {
        alert(err.message);
        return null
    }
}