import { Router } from "express";
import validation from "../../middleWare/validation";
import verifyToken from "../../middleWare/verifyToken";
import { createDastavkaSchema } from "../../validation/joi";
import { dastavkaGet, dastavkaPost } from "./dastavka";

export default Router()
    .get('/get', verifyToken, dastavkaGet)
    .post('/post', verifyToken, validation(createDastavkaSchema), dastavkaPost)