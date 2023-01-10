import { Request, Response, NextFunction } from "express"
import { getLikes } from "./model"
import JWT from "../../utils/JWT"

export const getUserLikes = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { auth_token } = req.headers
        if (typeof auth_token === 'string') {

            const userId = JWT.verify(auth_token)

            if (typeof userId === 'string') {
               const likes = await getLikes(userId)
            }

        }
    } catch (error) {
        
    }
}