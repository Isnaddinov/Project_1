 import axios from "axios";
 import { productsStore, searchProductStore, discountProductStore, getBasketProductsStorage } from "../storage/storeages";
import type { Item, Products } from "../types/types";
 
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

  export async function postItem(name: string, img: string, price: number, desc: string, count:number, discount: number, orderId:number){
    try {
      const send:Item = {
        name,
        img,
        price,
        desc,
        count,
        discount,
        orderId,
      }
      const item = await axios.post(url + `/item/post`, send)
    } catch (err:any) {
      alert(err.message);
      return null
    }
  }

  export async function saveItems(orderId:number) {
try {
  let itemsArr:Products[] = []
  getBasketProductsStorage.subscribe((products) => {
    itemsArr =  products 
  })
  itemsArr.forEach(function(product){
      postItem(product.name, product.img, product.price, product.desc, product.count, product.discount, orderId)
  })
} catch (error) {
  console.error("Error with saveItems " + error);
  
}
  }