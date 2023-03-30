 import axios from "axios";
 import { productsStore, searchProductStore, discountProductStore } from "../storage/storeages";
  export async function getProductsByTypeId(id:number){
    const products = await axios.get(`http://localhost:9090/stroyapi/products/getbytypeid/${id}`)
    productsStore.set(products.data.products)
  }

  export async function getProductsBySearch(product:string){
    const products = await axios.get(`http://localhost:9090/stroyapi/products/getbysearch?name=${product}`)
    searchProductStore.set(products.data.products)
  }
  export async function getProductsByDiscount(){
    const products = await axios.get(`http://localhost:9090/stroyapi/products/get/discount`)
    discountProductStore.set(products.data.discountProducts)
  }