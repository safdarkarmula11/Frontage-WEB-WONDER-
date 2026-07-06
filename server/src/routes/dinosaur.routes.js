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

const router = Router();

/* Public */

router.get("/", getDinosaurs);

router.get("/featured", getFeatured);

router.get("/:id", getDinosaur);

/* Protected */

router.post("/", authenticate, addDinosaur);

router.put("/:id", authenticate, editDinosaur);

router.delete("/:id", authenticate, removeDinosaur);

export default router;