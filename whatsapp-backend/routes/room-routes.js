import { Router } from "express";

// auth middleware 
import authorization from "../middleware/authorization-middleware.js";
import { chatRoom, getMessageRoom } from "../controllers/room-controller.js";
const router = Router()

router.get("/", authorization, getMessageRoom)
router.post("/chat", authorization, chatRoom)
export default router