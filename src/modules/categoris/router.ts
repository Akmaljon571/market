import { Router } from "express";
import { CATEGORY_DELETE, CATEGORY_GET, CATEGORY_POST, CATEGORY_PUT } from "./categoris";
const router = Router();

router.get("/get", CATEGORY_GET);
router.post("/post", CATEGORY_POST);
router.put("/put/:category_id", CATEGORY_PUT);
router.delete("/delete/:category_id", CATEGORY_DELETE);


export default router





