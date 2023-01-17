import { NextFunction, Request, Response } from 'express';
import { allProducts } from './model.js';

export default {
	GET: async (req: Request, res: Response, next: NextFunction) => {
		res.json(await allProducts());
	},
};
