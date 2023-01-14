import { NextFunction, Request, Response } from "express"
import { ErrorHandle } from "../../error/error";
import postgres from "../../utils/postgres";
import { allLikes, CREATE_LIKE, DELETE_Like } from "./model";

export const likeGet = async (req: Request, res: Response, next: NextFunction) => {
    try {
        const likes = await allLikes()
        if (likes) {
            res.json({
                data: likes,
                status: 200
            })
        }
    } catch (error) {
        console.log(error);
    }
}
export const Create_like = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req
        const {  productId } = req.body
        if (typeof userId === 'string') {
            console.log(productId);
            if (typeof productId === 'string') {
               const newLike = await postgres.fetchOne(CREATE_LIKE, userId, productId)
               return res.json({
                status: 201,
                data: newLike
               })
            }

        }else{
            throw new Error('Ineternal Error')
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}

export const deleteLike = async(req: Request, res: Response, next: NextFunction) => {
    try {
       
        const {  productId } = req.params
        if (typeof productId === 'string') {
            console.log(productId);
               const deletedLike = await postgres.fetchOne(DELETE_Like, productId)
               return res.status(200).json({
                status: 200,
                message: 'Deleted successfully'
               })

        }else{
            throw new Error('Ineternal Error')
        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}