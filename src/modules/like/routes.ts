import { Router } from "express";
import verifyToken from "../../middleWare/verifyToken";
import { Create_like, deleteLike, likeGet } from "./like";

export default Router()
    .get("/get", likeGet)
    .post('/createLike',verifyToken, Create_like)
    .delete('/deleteLike/:productId', deleteLike)