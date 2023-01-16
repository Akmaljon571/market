import Joi from 'joi';

// Autharization
export const registerJoi = Joi.object({
	username: Joi.string().min(2).max(64).required(),
	email: Joi.string().required(),
	phone: Joi.string().min(13).max(13).required(),
	password: Joi.string().min(4).max(8).required(),
}).required();
// Ended Autharization

// Products
export const productsJoi = Joi.object({
	username: Joi.string().min(2).max(64).required(),
	email: Joi.string().required(),
	phone: Joi.string().min(13).max(13).required(),
	password: Joi.string().min(4).max(8).required(),
}).required();
// Ended Products
