import { Router } from "express";

import {
  getEras,
  getEra,
  addEra,
  editEra,
  removeEra,
} from "../controllers/era.controller.js";

import { authenticate } from "../middleware/auth.middleware.js";

const router = Router();

/* Public */

router.get("/", getEras);

router.get("/:slug", getEra);

/* Protected */

router.post("/", authenticate, addEra);

router.put("/:id", authenticate, editEra);

router.delete("/:id", authenticate, removeEra);

export default router;