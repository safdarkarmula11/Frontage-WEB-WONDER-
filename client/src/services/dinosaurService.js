import dinosaurs from "../features/exhibits/data/dinosaurs";

export function getAllDinosaurs() {
  return dinosaurs;
}

export function getDinosaursByEra(era) {
  return dinosaurs.filter((d) => d.era === era);
}

export function getDinosaurById(id) {
  return dinosaurs.find((d) => d.id === Number(id));
}