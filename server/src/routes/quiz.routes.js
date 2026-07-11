import { Router } from "express";

import {
  getQuiz,
  submitQuiz,
  getQuizLeaderboard,
} from "../controllers/quiz.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

/*
 * GET /api/quiz — requires login (any role)
 */
router.get("/", authenticate, getQuiz);

/*
 * POST /api/quiz/submit — requires login
 */
router.post("/submit", authenticate, submitQuiz);

/*
 * GET /api/quiz/leaderboard — public
 */
router.get("/leaderboard", getQuizLeaderboard);

export default router;