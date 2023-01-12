import { Request, Response, NextFunction } from "express";
import { ErrorHandle } from "../../error/error";
import { findUser } from "../../types/types";
import postgres from "../../utils/postgres";
import { db_dastavkaGet, db_dastavkaPost, db_user_id } from "./model";

export const dastavkaGet = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { userId } = req

        const allProduct = await postgres.fetchAll(db_dastavkaGet, userId)
        
        res.json({
            data: allProduct
        })
    } catch (error) {
        console.log(error)
        next(error)
    }
}

export const dastavkaPost = async(req: Request, res: Response, next: NextFunction) => {
    try {
        const { city, street, distreet, home, productId, number } = req.result
        const { userId } = req

        const user_id: findUser | undefined = await postgres.fetchOne<findUser | undefined>(db_user_id, userId)

        console.log(user_id)
        if (typeof city === 'string' && typeof street === 'string' && typeof distreet === 'string' && typeof home === 'string' && typeof productId === 'object' && typeof number === 'string' && typeof user_id?.user_id === 'string') {
            const a = productId.map(async e => {
               return await postgres.fetchOne<undefined>(db_dastavkaPost, city, street, distreet, home, e, number, user_id.user_id)
            })

            console.log(a)

            res.json({
                message: 'Created',
                status: 201
            })
        } else {
            throw new ErrorHandle('Bad Request', 401)
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}

