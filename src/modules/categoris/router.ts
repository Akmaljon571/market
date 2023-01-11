import { Router } from "express";
import { CATEGORY_GET } from "./categoris";

const router = Router()

router.get("/categoris/get", CATEGORY_GET)

export default router







