import { Router } from "express";

// controller 
import { auth } from "../controllers/user-controller.js"
const router = Router()
router.post("/new", auth)



export default router