import { Router } from "express";
import { likeGet } from "./like";

export default Router()
    .get("/get", likeGet)