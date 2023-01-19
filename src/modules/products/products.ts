import { NextFunction, Request, Response } from 'express';
import { ErrorHandle } from '../../error/error.js';
import postgres from '../../utils/postgres.js';
import { ALL_PRODUCTS, NEW_PRODUCT } from './model.js';

export default {
	GET: async (req: Request, res: Response, next: NextFunction) => {
		const allProducts = postgres.fetchAll(ALL_PRODUCTS);

		if ((await allProducts).length) {
			return res.status(200).json({
				data: await allProducts,
			});
		}
	},

	POST: async (req: Request, res: Response, next: NextFunction) => {
		try {
			const { title, price, color, img, category_id } = req.result;

			// const newProducts = await createProduct(title, price, color, img, category_id).catch(() => {
			// 	throw new ErrorHandle('Error', 503);

			// });

			const newProducts = await postgres
				.fetchAll(NEW_PRODUCT, title, price, color, img, category_id)
				.catch((error) => next(new ErrorHandle(error as any, 503)));
			return res.status(201).json({
				status: '201',
				message: 'Created',
				data: newProducts,
			});
		} catch (error) {
			console.log(error);
			next(error);
		}
	},
};
