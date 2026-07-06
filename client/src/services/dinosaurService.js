import { get, post, put, remove } from "./api";

/**
 * Get all dinosaurs
 */
export async function getAllDinosaurs() {
  const result = await get("/dinosaurs");
  return result.data;
}

/**
 * Get featured dinosaurs
 */
export async function getFeaturedDinosaurs() {
  const result = await get("/dinosaurs/featured");
  return result.data;
}

/**
 * Get dinosaur by ID
 */
export async function getDinosaurById(id) {
  const result = await get(`/dinosaurs/${id}`);
  return result.data;
}

/**
 * Create dinosaur
 */
export async function createDinosaur(dinosaur) {
  return post("/dinosaurs", dinosaur);
}

/**
 * Update dinosaur
 */
export async function updateDinosaur(id, dinosaur) {
  return put(`/dinosaurs/${id}`, dinosaur);
}

/**
 * Delete dinosaur
 */
export async function deleteDinosaur(id) {
  return remove(`/dinosaurs/${id}`);
}