import { findUser } from './../types/types';
import { NextFunction, Request, Response } from "express"
import { ErrorHandle } from "../error/error"
import JWT from "../utils/JWT"
import postgres from '../utils/postgres';

export default async (req: Request, res: Response, next: NextFunction) => {
    try {
        const { auth_token } = req.headers

        if (typeof auth_token === "string") {
            const userId = JWT.verify(auth_token)

            if (typeof userId === 'string') {
                const admin: findUser | undefined = await postgres.fetchOne <findUser | undefined>(`SELECT * from users where user_id = $1`, userId)
                
                if (admin) {
                    if (admin.user_mail === 'admin@gmail.com') {
                        next()
                    } else {
                        throw new ErrorHandle('Siz Admin emassiz 2', 401)
                    }
                } else {
                    throw new ErrorHandle('Siz Admin emassiz 1', 401)
                }
            } else {
                throw new ErrorHandle('Not Token', 401)
            }
        } else {
            throw new ErrorHandle('Not Token', 401)
        }
    } catch (error) {
        console.log(error)
        next(error)
    }
}