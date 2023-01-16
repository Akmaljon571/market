import { NextFunction, Request, Response } from "express";
import { ErrorHandle } from "../../error/error";
import { categoris, categoryId } from "../../validation/joi";
import { MODEL_CATEGORY_DELETE, MODEL_CATEGORY_GET, MODEL_CATEGORY_POST, MODEL_CATEGORY_PUT,} from "./model";

const CATEGORY_GET =  async(req:Request, res:Response, next:NextFunction) => {
  try {
   const categoris = await  MODEL_CATEGORY_GET()
   .catch(error => next(new ErrorHandle(error as any, 400)));
res.status(200).json({
   data: categoris
});
  } catch (error) {
   
  }
};

const CATEGORY_POST =  async(req:Request, res:Response, next:NextFunction)=>  {
    try {
        const { error, value } = categoris.validate(req.body);
        if (error) {
            next(new ErrorHandle(error.message, 400));
        }
        const { category_title } = value;
        const category = await  MODEL_CATEGORY_POST(category_title)
            .catch(error => next(new ErrorHandle(error.message, 400)));
        res.send(category);
    }
    catch (error) {
        console.log(error);
        throw new ErrorHandle(error as any, 400);
    }
}
const CATEGORY_PUT =  async(req:Request, res:Response, next:NextFunction) => {
    try {
        const { error, value } = categoryId.validate(req.params);
        if (error) {
            throw next(new ErrorHandle(error as any, 400));
        }
        const { error: erro, value: val } = categoris.validate(req.body);
        if (erro) {
            throw next(new ErrorHandle(erro as any, 400));
        }
        const { category_id } = value;
        const { category_title } = val;
        const category = await MODEL_CATEGORY_PUT(category_id, category_title)
            .catch(error);
        res.send(category);
    }
    catch (error) {
        console.log(error);
        throw new ErrorHandle(error as any, 400);
    }
}
const CATEGORY_DELETE = async(req:Request, res:Response, next:NextFunction) =>  {
    try {
        const { error, value } = categoryId.validate(req.params);
        if (error) {
            throw next(new ErrorHandle(error as any, 400));
        }
        const { category_id } = value;
        
        const category = await  MODEL_CATEGORY_DELETE(category_id)
            .catch(error => next(new ErrorHandle(error as any, 400)));
        res.status(200).json({
            status:200,
            data:category
        });
    }
    catch (error) {
        console.log(error);
        throw new ErrorHandle(error as any, 400);
    }
}

export {CATEGORY_DELETE, CATEGORY_GET, CATEGORY_POST, CATEGORY_PUT}



