import express from "express";
import cors from "cors";
import path from "path";
import authRoutes from "./routes/auth.routes.js";
import eraRoutes from "./routes/era.routes.js";
import dinosaurRoutes from "./routes/dinosaur.routes.js";
import quizRoutes from "./routes/quiz.routes.js";
import fossilRoutes from "./routes/fossil.routes.js";

const app = express();
app.use("/uploads", express.static(path.resolve("uploads")));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.status(200).json({
    success: true,
    message: "JurassicVerse API is running.",
  });
});

app.use("/api/auth", authRoutes);
app.use("/api/eras", eraRoutes);
app.use("/api/dinosaurs", dinosaurRoutes);
app.use("/api/quiz", quizRoutes);
app.use("/api/fossils", fossilRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: "Route not found.",
  });
});

app.use((err, req, res, next) => {
  if (err?.name === "MulterError" || err?.message?.includes("images are allowed")) {
    return res.status(400).json({
      success: false,
      message: err.message,
    });
  }

  console.error(err);

  res.status(500).json({
    success: false,
    message: "Something went wrong on our end.",
  });
});

export default app;