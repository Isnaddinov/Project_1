import axios from 'axios'
import { categoriesStore } from '../storage/storeages'

const url = `http://localhost:9090/stroyapi`

export async function getCategories(){
    try {
        const categories = await axios(url + "/categories/get")
        categoriesStore.set(categories.data.categories)
        
    } catch (err:any) {
        alert(err.message);
        return null
    }
}
