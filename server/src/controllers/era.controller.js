import {
  getAllEras,
  getEraBySlug,
  createEra,
  updateEra,
  deleteEra,
} from "../services/era.service.js";

/**
 * GET /api/eras
 */
export async function getEras(req, res) {
  try {
    const eras = await getAllEras();

    res.status(200).json({
      success: true,
      data: eras,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch eras.",
    });
  }
}

/**
 * GET /api/eras/:slug
 */
export async function getEra(req, res) {
  try {
    const era = await getEraBySlug(req.params.slug);

    if (!era) {
      return res.status(404).json({
        success: false,
        message: "Era not found.",
      });
    }

    res.status(200).json({
      success: true,
      data: era,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to fetch era.",
    });
  }
}

/**
 * POST /api/eras
 */
export async function addEra(req, res) {
  try {
    const era = await createEra(req.body);

    res.status(201).json({
      success: true,
      message: "Era created successfully.",
      data: era,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to create era.",
    });
  }
}

/**
 * PUT /api/eras/:id
 */
export async function editEra(req, res) {
  try {
    const era = await updateEra(req.params.id, req.body);

    res.status(200).json({
      success: true,
      message: "Era updated successfully.",
      data: era,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to update era.",
    });
  }
}

/**
 * DELETE /api/eras/:id
 */
export async function removeEra(req, res) {
  try {
    await deleteEra(req.params.id);

    res.status(200).json({
      success: true,
      message: "Era deleted successfully.",
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      message: "Failed to delete era.",
    });
  }
}