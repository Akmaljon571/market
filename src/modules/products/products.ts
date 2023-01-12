import { NextFunction, Request, Response } from 'express';
import postgres from '../../utils/postgres.js';
import { allProducts } from './model.js';

export default {
	GET: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const allProduct = postgres.fetchAll(allProducts);

			console.log(allProduct);

			res.json(await allProduct);
		} catch (error) {
			next(error);
		}
	},
};
