import { NextFunction, Request, Response } from "express"
import { ErrorHandle } from "../../error/error";
import { aksiaId, aksia_Jo, categoryId_Joi } from "../../validation/joi";
import { MODEL_AKSIA_DELETE, MODEL_AKSIA_GET, MODEL_AKSIA_POST, MODEL_AKSIA_PUT } from "./model";

const AKSIA_GET = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const aksia = await  MODEL_AKSIA_GET()
        .catch(error => next(new ErrorHandle(error.message as any, 400)))
        console.log(aksia);
        console.log('aksia');
        res.status(200).json({
            data:aksia
        })
    } catch (error) {
        console.log(error);
        throw next(new ErrorHandle(error as any, 400))
        
    }
}
const AKSIA_POST = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const {error, value} = aksia_Jo.validate(req.body)
        if(error) {
            throw next(new ErrorHandle(error.message as any, 400 ))
        }
        const {foiz} = value
        const {error:erro, value:val} = categoryId_Joi.validate(req.params)
        if(erro) {
            throw next(new ErrorHandle(erro.message as any, 400 ))
        }
        const {product_id} = val
        const aksia = await MODEL_AKSIA_POST(foiz,product_id)
        .catch(error => next(new ErrorHandle(error.message as any, 400))) 
        res.status(200).json({
            data:aksia
        })
    } catch (error) {
        console.log(error);
        throw next(new ErrorHandle(error as any, 400))
        
    }
}
const AKSIA_PUT = async (req:Request, res:Response, next:NextFunction) => {
    try {
        const {error, value} = aksia_Jo.validate(req.body)
        if(error) {
            throw next(new ErrorHandle(error.message as any, 400 ))
        }
        
        const {error:erro, value:val} = aksiaId.validate(req.params)
        if(erro) {
            throw next(new ErrorHandle(erro.message as any, 400 ))
        }
        const {aksia_id} = val
        const {foiz} = value
        const aksia = await MODEL_AKSIA_PUT(foiz, aksia_id)
        .catch(error => next(new ErrorHandle(error.message as any, 400)))
        res.status(200).json({
            data:aksia
        })
    } catch (error) {
        console.log(error);
        throw next(new ErrorHandle(error as any, 400))
        
    }
}
const AKSIA_DELETE = async (req:Request, res:Response, next:NextFunction) => {
    try {
        console.log(req);
        const {error, value} = aksiaId.validate(req.params)
        if(error) {
            throw next(new ErrorHandle(error.message as any, 400 ))
        }
        console.log(value);
        
        
        const {aksia_id} = value
        console.log(value);
        console.log(aksia_id);
        
        const aksia = await  MODEL_AKSIA_DELETE(aksia_id)
        .catch(error => next(new ErrorHandle(error.message as any, 400)))
        res.status(200).json({
            data:aksia
        })
    } catch (error) {
        console.log(error);
        throw next(new ErrorHandle(error as any, 400))
        
    }
}

export {AKSIA_GET, AKSIA_POST, AKSIA_PUT, AKSIA_DELETE}








