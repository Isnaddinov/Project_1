import axios from "axios";
import { typesStore } from "../storage/storeages";

const url = `http://localhost:9090/stroyapi`

export async function getTypesId(id:number){
    try {
        const types = await axios.get(url + `/types/get/${id}`)
        typesStore.set(types.data.types)
    } catch (err:any) {
        alert(err.message);
        return null
    }
}
