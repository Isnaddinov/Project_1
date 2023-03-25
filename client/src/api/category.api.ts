import axios from 'axios'
import { categoriesStore } from '../storage/storeages'

export async function getCategories(){
    const categories = await axios("http://localhost:9090/stroyapi/categories/get")
    categoriesStore.set(categories.data.categories)
}