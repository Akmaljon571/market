import { ErrorHandle } from "../../error/error";
import postgres from "../../utils/postgres";
import { QUERY_DELETE_AKSIA, QUERY_GET_AKSIA, QUERY_POST_AKSIA, QUERY_PUT_AKSIA } from "./query";

const MODEL_AKSIA_GET  = async () =>{
    try {
       const aksia = await postgres.fetchAll(QUERY_GET_AKSIA)
       return aksia 
    } catch (error) {
        console.log(error);
        throw new ErrorHandle(error as any, 400)
    }
}
const MODEL_AKSIA_POST = async (foiz:number, product_id:string) =>{
    try {
       const aksia = await postgres.fetchOne(QUERY_POST_AKSIA,product_id, foiz )
       return aksia 
    } catch (error) {
        console.log(error);
        throw new ErrorHandle(error as any, 400)
    }
}
const MODEL_AKSIA_PUT = async (foiz:number, aksia_id:string) =>{
    try {
        console.log(foiz);
        console.log(aksia_id);
        
       const aksia = await postgres.fetchOne(QUERY_PUT_AKSIA,aksia_id, foiz)
       return aksia 
    } catch (error) {
        console.log(error);
        throw new ErrorHandle(error as any, 400)
    }
}
const MODEL_AKSIA_DELETE = async (aksia_id:string) =>{
    try {
       const aksia = await postgres.fetchOne(QUERY_DELETE_AKSIA, aksia_id)
       return aksia 
    } catch (error) {
        console.log(error);
        throw new ErrorHandle(error as any, 400)
    }
}

export { MODEL_AKSIA_GET , 
     MODEL_AKSIA_POST ,
     MODEL_AKSIA_PUT ,
     MODEL_AKSIA_DELETE 
    }
















