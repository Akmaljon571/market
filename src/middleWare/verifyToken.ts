import { NextFunction, Request, Response } from "express"
import { ErrorHandle } from "../error/error"
import JWT from "../utils/JWT"

export default (req: Request, res: Response, next: NextFunction) => {
    const { auth_token } = req.headers

    if (typeof auth_token === "string") {
        const userId = JWT.verify(auth_token)
        return userId
    } else {
        throw new ErrorHandle('Not Token', 401)
    }
}