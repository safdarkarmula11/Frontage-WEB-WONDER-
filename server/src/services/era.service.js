import prisma from "../config/prisma.js";

export async function getAllEras() {
  return prisma.era.findMany({
    orderBy: {
      id: "asc",
    },
  });
}