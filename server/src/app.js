import express from "express";
import cors from "cors";

import eraRoutes from "./routes/era.routes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Virtual Dino Museum API",
  });
});

app.use("/api/eras", eraRoutes);

export default app;