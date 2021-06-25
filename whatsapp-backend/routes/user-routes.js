import { Router } from "express";

// controller 
import { auth } from "../controllers/user-controller.js"
const router = Router()
router.post("/auth", auth)



export default router