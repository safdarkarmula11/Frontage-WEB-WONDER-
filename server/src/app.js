import express from "express";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/auth.routes.js";
import eraRoutes from "./routes/era.routes.js";
import dinosaurRoutes from "./routes/dinosaur.routes.js";

const app = express();
app.use("/uploads", express.static(path.resolve("uploads")));
/* ===========================
   Global Middleware
=========================== */

app.use(cors());

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

/* ===========================
   Root Route
=========================== */

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "JurassicVerse API is running.",
  });
});

/* ===========================
   API Routes
=========================== */

app.use("/api/auth", authRoutes);

app.use("/api/eras", eraRoutes);

app.use("/api/dinosaurs", dinosaurRoutes);

/* ===========================
   404
=========================== */

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

export default app;