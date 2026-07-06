import { Router } from "express";

import {
  getDinosaurs,
  getFeatured,
  getDinosaur,
  addDinosaur,
  editDinosaur,
  removeDinosaur,
} from "../controllers/dinosaur.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { authorizeAdmin } from "../middleware/admin.middleware.js";
import upload from "../middleware/upload.middleware.js";

const router = Router();

/* Public */

router.get("/", getDinosaurs);

router.get("/featured", getFeatured);

router.get("/:id", getDinosaur);

/* Protected */

router.post(
  "/",
  authenticate,
  authorizeAdmin,
  upload.single("image"),
  addDinosaur
);

router.put(
  "/:id",
  authenticate,
  authorizeAdmin,
  upload.single("image"),
  editDinosaur
);

router.delete(
  "/:id",
  authenticate,
  authorizeAdmin,
  removeDinosaur
);

export default router;