import { get } from "./api";

/**
 * Get all eras
 */
export async function getAllEras() {
  const result = await get("/eras");
  return result.data;
}

/**
 * Get era by slug
 */
export async function getEraBySlug(slug) {
  const result = await get(`/eras/${slug}`);
  return result.data;
}