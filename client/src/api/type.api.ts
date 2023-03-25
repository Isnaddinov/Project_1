import axios from "axios";
import { typesStore } from "../storage/storeages";
export async function getTypesId(id:number){
    const types = await axios.get(`http://localhost:9090/stroyapi/types/get/${id}`)
    typesStore.set(types.data.types)
}
