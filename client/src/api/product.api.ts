 import axios from "axios";
 import { productsStore, searchProductStore, discountProductStore, getBasketProductsStorage } from "../storage/storeages";
import type { Products } from "../types/types";
 
 const url = `http://localhost:9090/stroyapi`;

  let proArray:Products[] =[]

 export function basketing (){
    getBasketProductsStorage.set(proArray)
 }

 

  export async function getProductsByTypeId(id:number){
    try {
      const products = await axios.get(url + `/products/getbytypeid/${id}`)
      return  productsStore.set(products.data.products)
      
    } catch (err:any) {
      alert(err.message);
      return null
    }
  }

  export async function getProductsBySearch(product:string){
   try {
    const products = await axios.get(url + `/products/getbysearch?name=${product}`)
    return searchProductStore.set(products.data.products)

   } catch (err:any) {
    alert(err.message);
    return null
   }
  }
  export async function getProductsByDiscount(){
    try {
      const products = await axios.get(url + `/products/get/discount`)
    discountProductStore.set(products.data.discountProducts)
    } catch (err:any) {
      alert(err.message);
      return null
    }
  }
  export async function getProductsById(id:number){
    try {
      const products = await axios.get(url + `/products/getbyid/${id}`)
       proArray.push(products.data.product)
    
      if(products.data.product){
        return alert("Tovar savatga tashlandi")
       }
      
    } catch (err:any) {
      alert(err.message);
      return null
    }
  }
