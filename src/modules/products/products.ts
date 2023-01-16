import { NextFunction, Request, Response } from 'express';
import { any } from 'joi';
import { ErrorHandle } from '../../error/error.js';
import { allProducts, createProduct } from './model.js';

export default {
	GET: async (req: Request, res: Response, next: NextFunction) => {
		res.json(await allProducts());
	},

	POST: async (res: Response, req: Request, next: NextFunction) => {
		try {
			// interface products {
			// 	title: String;
			// 	price: String;
			// 	color: String;
			// 	img: String;
			// 	category_id: String;
			// }

			const { title, price, color, img, category_id } = req.result;

			const newProducts = await createProduct(title, price, color, img, category_id).catch(() => {
				throw new ErrorHandle('Error', 503);
			});

			res.status(201).json({
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
