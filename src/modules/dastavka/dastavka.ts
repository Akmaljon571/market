import { Request, Response, NextFunction } from "express";
import { ErrorHandle } from "../../error/error";
import postgres from "../../utils/postgres";
import { db_dastavkaGet } from "./model";

export const dastavkaGet = (req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req

        const allProduct = postgres.fetchAll(db_dastavkaGet, userId)
        
        res.json({
            data: allProduct
        })


    } catch (error) {
        console.log(error)
        next(error)
    }
}