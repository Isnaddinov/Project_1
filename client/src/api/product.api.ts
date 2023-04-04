 import axios from "axios";
 import { productsStore, searchProductStore, discountProductStore } from "../storage/storeages";
 
 const url = `http://localhost:9090/stroyapi`

  export async function getProductsByTypeId(id:number){
    try {
      const products = await axios.get(url + `/products/getbytypeid/${id}`)
       productsStore.set(products.data.products)
    } catch (err:any) {
      alert(err.message);
      return null
    }
  }

  export async function getProductsBySearch(product:string){
   try {
    const products = await axios.get(url + `/getbysearch?name=${product}`)
    searchProductStore.set(products.data.products)
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
