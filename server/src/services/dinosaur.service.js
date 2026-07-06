import prisma from "../config/prisma.js";

/**
 * Get all dinosaurs
 */
export async function getAllDinosaurs() {
  return prisma.dinosaur.findMany({
    include: {
      era: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}

/**
 * Get featured dinosaurs
 */
export async function getFeaturedDinosaurs() {
  return prisma.dinosaur.findMany({
    where: {
      isFeatured: true,
    },
    include: {
      era: true,
    },
    orderBy: {
      name: "asc",
    },
  });
}

/**
 * Get dinosaur by ID
 */
export async function getDinosaurById(id) {
  return prisma.dinosaur.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      era: true,
    },
  });
}

/**
 * Create dinosaur
 */
export async function createDinosaur(data) {
  return prisma.dinosaur.create({
    data,
    include: {
      era: true,
    },
  });
}

/**
 * Update dinosaur
 */
export async function updateDinosaur(id, data) {
  return prisma.dinosaur.update({
    where: {
      id: Number(id),
    },
    data,
    include: {
      era: true,
    },
  });
}

/**
 * Delete dinosaur
 */
export async function deleteDinosaur(id) {
  return prisma.dinosaur.delete({
    where: {
      id: Number(id),
    },
  });
}