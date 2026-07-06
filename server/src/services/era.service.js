import prisma from "../config/prisma.js";

/**
 * Get all eras
 */
export async function getAllEras() {
  return prisma.era.findMany({
    orderBy: {
      id: "asc",
    },
    include: {
      dinosaurs: {
        orderBy: {
          name: "asc",
        },
      },
    },
  });
}

/**
 * Get era by slug
 */
export async function getEraBySlug(slug) {
  return prisma.era.findUnique({
    where: {
      slug,
    },
    include: {
      dinosaurs: {
        orderBy: {
          name: "asc",
        },
      },
    },
  });
}

/**
 * Get era by ID
 */
export async function getEraById(id) {
  return prisma.era.findUnique({
    where: {
      id: Number(id),
    },
    include: {
      dinosaurs: {
        orderBy: {
          name: "asc",
        },
      },
    },
  });
}

/**
 * Create era
 */
export async function createEra(data) {
  return prisma.era.create({
    data,
  });
}

/**
 * Update era
 */
export async function updateEra(id, data) {
  return prisma.era.update({
    where: {
      id: Number(id),
    },
    data,
  });
}

/**
 * Delete era
 */
export async function deleteEra(id) {
  return prisma.era.delete({
    where: {
      id: Number(id),
    },
  });
}