import { Router } from 'express';
import products from './products';

export default Router().get('/get', products.GET).post('/post', products.POST);
