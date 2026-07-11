import { Router } from "express";

import {
  getEras,
  getEra,
  addEra,
  editEra,
  removeEra,
} from "../controllers/era.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";
import { authorizeAdmin } from "../middleware/admin.middleware.js";
import { validate } from "../middleware/validate.middleware.js";
import { createEraSchema, updateEraSchema } from "../validations/era.validation.js";

const router = Router();

/* Public */

router.get("/", getEras);

router.get("/:slug", getEra);

/* Protected — admin only */

router.post("/", authenticate, authorizeAdmin, validate(createEraSchema), addEra);

router.put("/:id", authenticate, authorizeAdmin, validate(updateEraSchema), editEra);

router.delete("/:id", authenticate, authorizeAdmin, removeEra);

export default router;