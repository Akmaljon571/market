import { NextFunction, Request, Response } from "express"
import JWT from "../../utils/JWT";
import postgres from "../../utils/postgres";
import { allLikes, CREATE_LIKE } from "./model";

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
        const { auth_token, productId } = req.body
        if (typeof auth_token === 'string') {

            const userId = JWT.verify(auth_token)

            if (typeof userId === 'string') {
               const newLike = await postgres.fetchOne(CREATE_LIKE, userId, productId)
               return res.json({
                status: 201,
                data: newLike
               })
            }

        }
    } catch (error) {
        console.log(error);
        next(error)
    }
}