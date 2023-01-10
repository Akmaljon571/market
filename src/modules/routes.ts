import { Router } from "express";
import likeRouter from "./like/routes"
import dastavkaRouter from "./dastavka/routes"

export default Router()
    .use("/like", likeRouter)
    .use("/dastavka", dastavkaRouter)