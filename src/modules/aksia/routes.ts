import { Router } from "express";
import { AKSIA_DELETE, AKSIA_GET, AKSIA_POST, AKSIA_PUT } from "./aksia";




const router = Router()

router.get("/get", AKSIA_GET)
router.post("/post/:product_id", AKSIA_POST)
router.put("/put/:aksia_id", AKSIA_PUT)
router.delete("/delete/:aksia_id", AKSIA_DELETE)






export default router























