import { Router } from "express";
import verifyToken from "../../middleWare/verifyToken";
import { Create_like, likeGet } from "./like";

export default Router()
    .get("/get", likeGet)
    .post('/createLike', Create_like)