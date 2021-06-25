import { Router } from "express";

// auth middleware 
import authorization from "../middleware/authorization-middleware.js";
import { chatRoom } from "../controllers/room-controller.js";
const router = Router()

router.post("/chat", authorization, chatRoom)
export default router