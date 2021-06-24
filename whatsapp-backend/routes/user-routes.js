import { Router } from "express";

// controller 
import { newUser } from "../controllers/user-controller.js"
const router = Router()
router.post("/new", newUser)



export default router