import { get, post, put, del } from "./api";

export function getAllEras() {
  return get("/eras");
}

export function createEra(data, token) {
  return post("/eras", data, token);
}

export function updateEra(id, data, token) {
  return put(`/eras/${id}`, data, token);
}

export function deleteEra(id, token) {
  return del(`/eras/${id}`, token);
}