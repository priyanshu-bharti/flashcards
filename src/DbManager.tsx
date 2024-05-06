import { get, set, values } from "idb-keyval"

export enum DB_KEYS{
    SAVE_DECK='save_deck'
}
export async  function saveToDB<T>(key:DB_KEYS,value:T){
   return await set(key,value)
}
export async function getFromDB<T>(key:DB_KEYS):Promise<T>{
    return get(key) as T
}