import { ErrorHandle } from "../../error/error";
import postgres from "../../utils/postgres";
import { QUERY_DELETE, QUERY_GET, QUERY_POST, QUERY_PUT } from "./query";

const MODEL_CATEGORY_GET =async () => {
    try {
        const categoris = await postgres.fetchAll(QUERY_GET);
        return categoris;
    }
    catch (error) {
        console.log(error);
        throw new ErrorHandle("Bad Request", 401);
    }
}

const MODEL_CATEGORY_POST =async (category_title:string) =>  {
    try {
        const categoris = await  postgres.fetchOne(QUERY_POST, category_title);
        return categoris;
    }
    catch (error) {
        console.log(error);
        throw new ErrorHandle("Bad Request", 401);
    }
}
const MODEL_CATEGORY_PUT = (category_id:string, category_title:string) =>{
    try {
        const category = postgres.fetchOne(QUERY_PUT, category_title, category_id);
        return category;
    }
    catch (error) {
        console.log(error);
        throw new ErrorHandle("Bad Request", 401);
    }
}
const MODEL_CATEGORY_DELETE = async (category_id:string) => {
    try {
        const category = await postgres.fetchOne(QUERY_DELETE, category_id);
        return category;
    }
    catch (error) {
        console.log(error);
        throw new ErrorHandle("Bad Request", 401);
    }
}



export  {MODEL_CATEGORY_GET, MODEL_CATEGORY_POST, MODEL_CATEGORY_PUT, MODEL_CATEGORY_DELETE}
