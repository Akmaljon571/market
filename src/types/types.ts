import { Request } from 'express';


declare global {
    namespace Exoress {
        export interface Request {
            userId: string
        }
    }
}