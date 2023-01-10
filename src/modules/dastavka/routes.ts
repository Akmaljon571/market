import { Router } from "express";
import verifyToken from "../../middleWare/verifyToken";
import { dastavkaGet } from "./dastavka";

export default Router()
    .get('/get', verifyToken ,dastavkaGet)