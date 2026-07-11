import {
  getAllFossilFinds,
  getFossilFindById,
  createFossilFind,
  deleteFossilFind,
} from "../services/fossil.service.js";

/**
 * GET /api/fossils
 */
export async function getFossilFinds(req, res) {
  try {
    const finds = await getAllFossilFinds();

    res.status(200).json({
      success: true,
      data: finds,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to load fossil finds.",
    });
  }
}

/**
 * POST /api/fossils
 */
export async function addFossilFind(req, res) {
  try {
    if (!req.file) {
      return res.status(400).json({
        success: false,
        message: "A photo of your fossil find is required.",
      });
    }

    const data = {
      userId: req.user.id,
      image: `/uploads/fossils/${req.file.filename}`,
      note: req.body.note,
      location: req.body.location || null,
    };

    if (req.body.dinosaurId) {
      data.dinosaurId = Number(req.body.dinosaurId);
    }

    const find = await createFossilFind(data);

    res.status(201).json({
      success: true,
      message: "Fossil find submitted!",
      data: find,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to submit fossil find.",
    });
  }
}

/**
 * DELETE /api/fossils/:id
 */
export async function removeFossilFind(req, res) {
  try {
    const find = await getFossilFindById(req.params.id);

    if (!find) {
      return res.status(404).json({
        success: false,
        message: "Fossil find not found.",
      });
    }

    const isOwner = find.userId === req.user.id;
    const isAdmin = req.user.role === "admin";

    if (!isOwner && !isAdmin) {
      return res.status(403).json({
        success: false,
        message: "You can only delete your own fossil finds.",
      });
    }

    await deleteFossilFind(req.params.id);

    res.status(200).json({
      success: true,
      message: "Fossil find deleted.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete fossil find.",
    });
  }
}