import { get, post, del } from "./api";

export function getAllFossilFinds() {
  return get("/fossils");
}

export function submitFossilFind(formData, token) {
  return post("/fossils", formData, token, true);
}

export function deleteFossilFind(id, token) {
  return del(`/fossils/${id}`, token);
}