import eras from "../features/timeline/data/eras";

export function getAllEras() {
  return eras;
}

export function getEraBySlug(slug) {
  return eras.find((era) => era.slug === slug);
}