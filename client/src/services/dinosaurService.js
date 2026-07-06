import { get, post, put, del } from "./api";

export function getAllDinosaurs() {
  return get("/dinosaurs");
}

export function getFeaturedDinosaurs() {
  return get("/dinosaurs/featured");
}

export function getDinosaurById(id) {
  return get(`/dinosaurs/${id}`);
}

export function createDinosaur(data, token) {
  return post("/dinosaurs", data, token, true);
}

export function updateDinosaur(id, data, token) {
  return put(`/dinosaurs/${id}`, data, token, true);
}

export function deleteDinosaur(id, token) {
  return del(`/dinosaurs/${id}`, token);
}