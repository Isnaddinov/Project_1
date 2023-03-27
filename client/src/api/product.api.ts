 import axios from "axios";
 import { productsStore, searchProductStore } from "../storage/storeages";
  export async function getProductsByTypeId(id:number){
    const products = await axios.get(`http://localhost:9090/stroyapi/products/getbytypeid/${id}`)
    productsStore.set(products.data.products)
  }

  export async function getProductsBySearch(name:string){
    const products = await axios.get(`http://localhost:9090/stroyapi/products/getbysearch?name=${name}`)
    searchProductStore.set(products.data.products)
  }