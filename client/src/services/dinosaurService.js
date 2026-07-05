import API_URL from "./api";

export async function getFeaturedDinosaurs() {
  const response = await fetch(`${API_URL}/dinosaurs/featured`);
  return await response.json();
}