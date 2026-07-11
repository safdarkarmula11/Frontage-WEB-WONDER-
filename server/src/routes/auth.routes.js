import { Router } from "express";

import {
  login,
  register,
  getProfile,
} from "../controllers/auth.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

/*
 * POST /api/auth/register
 */
router.post("/register", register);

/*
 * POST /api/auth/login
 */
router.post("/login", login);

/*
 * GET /api/auth/me
 */
router.get("/me", authenticate, getProfile);

export default router;