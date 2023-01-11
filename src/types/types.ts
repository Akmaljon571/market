export interface findUser {
    user_id: string
    user_name: string
    user_mail: string
    user_phone: string
    user_password: string
}

declare global {
    namespace Express {
        export interface Request {
            userId: string
        }
    }
}

declare global {
    namespace Express {
        export interface Request {
            result: {
                id?: string
                name?: string
                mail?: string
                phone?: string
                password?: string 
                title?: string
            }
        }
    }
}