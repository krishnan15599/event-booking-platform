import { Router } from "express";
import { register } from "../controllers/register.controller";
import { login } from "../controllers/login.controller";

const router = Router();

// POST /api/auth/register
router.post("/register", register);

// POST /api/auth/login
router.post("/login", login);

export default router;
