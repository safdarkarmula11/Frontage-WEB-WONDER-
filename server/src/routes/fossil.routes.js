import { Router } from "express";

import {
  getFossilFinds,
  addFossilFind,
  removeFossilFind,
} from "../controllers/fossil.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { uploadFossilImage } from "../middleware/upload.middleware.js";
import { createFossilFindSchema } from "../validations/fossil.validation.js";

const router = Router();

/*
 * GET /api/fossils — public gallery
 */
router.get("/", getFossilFinds);

/*
 * POST /api/fossils — any logged-in user
 */
router.post(
  "/",
  authenticate,
  uploadFossilImage.single("image"),
  validate(createFossilFindSchema),
  addFossilFind
);

/*
 * DELETE /api/fossils/:id — owner or admin
 */
router.delete("/:id", authenticate, removeFossilFind);

export default router;