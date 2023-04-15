 import axios from "axios";
 import { productsStore, searchProductStore, discountProductStore, getBasketProductsStorage, orderStorage } from "../storage/storeages";
import type { Item, Order, Products } from "../types/types";
 
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

  export async function saveItems() {
try {
  
  let orders:Order[] = []
  let orderId:number = orders[0].id
  let itemsArr:Products[] = []

  orderStorage.subscribe((order) => {
    orders = order
 })

  getBasketProductsStorage.subscribe((products) => {
    itemsArr = products 
  })
  
  

  itemsArr.forEach(function(product){
    delete Object(product).id, delete Object(product).typesId, Object(product).orderId = orderId
  })
} catch (error) {
  console.error("Error with saveItems " + error);
  
}
  }