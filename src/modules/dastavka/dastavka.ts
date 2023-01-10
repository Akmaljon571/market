import { Request, Response, NextFunction } from "express";
import Jwt from "jsonwebtoken";
import { ErrorHandle } from "../../error/error";
import jwt from "../../utils/JWT"
import postgres from "../../utils/postgres";
import { db_dastavkaGet } from "./model";

export const dastavkaGet = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { auth_token } = req.headers

        if (typeof auth_token === "string") {
            const userId = jwt.verify(auth_token)
            console.log(userId)
            if (typeof userId === "string") {
                const allProduct = postgres.fetchAll(db_dastavkaGet, userId)
                
                res.json({
                    data: allProduct
                })
            } 
        } else {
            throw new ErrorHandle("Not Token", 401)
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}