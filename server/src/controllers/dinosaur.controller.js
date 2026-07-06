import {
  getAllDinosaurs,
  getFeaturedDinosaurs,
  getDinosaurById,
  createDinosaur,
  updateDinosaur,
  deleteDinosaur,
} from "../services/dinosaur.service.js";

export async function getDinosaurs(req, res) {
  try {
    const dinosaurs = await getAllDinosaurs();

    res.status(200).json({
      success: true,
      data: dinosaurs,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch dinosaurs.",
    });
  }
}

export async function getFeatured(req, res) {
  try {
    const dinosaurs = await getFeaturedDinosaurs();

    res.status(200).json({
      success: true,
      data: dinosaurs,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch featured dinosaurs.",
    });
  }
}

export async function getDinosaur(req, res) {
  try {
    const dinosaur = await getDinosaurById(req.params.id);

    if (!dinosaur) {
      return res.status(404).json({
        success: false,
        message: "Dinosaur not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: dinosaur,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch dinosaur.",
    });
  }
}

export async function addDinosaur(req, res) {
  try {
    const dinosaur = await createDinosaur(req.body);

    res.status(201).json({
      success: true,
      message: "Dinosaur created successfully.",
      data: dinosaur,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create dinosaur.",
    });
  }
}

export async function editDinosaur(req, res) {
  try {
    const dinosaur = await updateDinosaur(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Dinosaur updated successfully.",
      data: dinosaur,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update dinosaur.",
    });
  }
}

export async function removeDinosaur(req, res) {
  try {
    await deleteDinosaur(req.params.id);

    res.status(200).json({
      success: true,
      message: "Dinosaur deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete dinosaur.",
    });
  }
}