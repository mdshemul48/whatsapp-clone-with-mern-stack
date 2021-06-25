import { Router } from "express";

import { chatRoom } from "../controllers/room-controller.js";
const router = Router()

router.post("/chat", chatRoom)
export default router