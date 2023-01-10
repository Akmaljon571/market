import { NextFunction, Request, Response } from "express"
import { allLikes } from "./model";

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