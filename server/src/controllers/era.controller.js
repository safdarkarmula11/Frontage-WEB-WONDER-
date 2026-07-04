import { getAllEras } from "../services/era.service.js";

export async function getEras(req, res) {
  try {
    const eras = await getAllEras();

    res.status(200).json(eras);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch eras",
    });
  }
}