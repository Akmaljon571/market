import { Router } from "express";
import { dastavkaGet } from "./dastavka";

export default Router()
    .get('/get', dastavkaGet)