import { Router } from 'express';
import validation from '../../middleWare/validation';
import { productsJoi } from '../../validation/joi';
import products from './products';

export default Router()
	.get('/get', products.GET)
	.post('/post', validation(productsJoi), products.POST);
