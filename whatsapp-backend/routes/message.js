import { Router } from "express";

// importing controllers 
import { createNewMessage } from "../controllers/message.js";
const router = Router()

router.post("/new", createNewMessage)

export default router;