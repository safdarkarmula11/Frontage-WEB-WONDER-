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
import { validate } from "../middleware/validate.middleware.js";
import upload from "../middleware/upload.middleware.js";
import { createDinosaurSchema, updateDinosaurSchema } from "../validations/dinosaur.validation.js";

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
  validate(createDinosaurSchema),
  addDinosaur
);

router.put(
  "/:id",
  authenticate,
  authorizeAdmin,
  upload.single("image"),
  validate(updateDinosaurSchema),
  editDinosaur
);

router.delete(
  "/:id",
  authenticate,
  authorizeAdmin,
  removeDinosaur
);

export default router;