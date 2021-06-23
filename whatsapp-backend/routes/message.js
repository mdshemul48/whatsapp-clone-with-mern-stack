import { Router } from "express";

// importing controllers 
import { createNewMessage, syncNewMessage } from "../controllers/message.js";



const router = Router()

router.get("/sync", syncNewMessage)
router.post("/new", createNewMessage)


export default router;