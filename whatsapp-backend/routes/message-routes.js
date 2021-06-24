import { Router } from "express";

// importing controllers 
import { createNewMessage, syncNewMessage } from "../controllers/message-controller.js";
// middleware
import authorization from "../middleware/authorization-middleware.js";



const router = Router()

router.get("/sync", authorization, syncNewMessage)
router.post("/new", createNewMessage)


export default router;