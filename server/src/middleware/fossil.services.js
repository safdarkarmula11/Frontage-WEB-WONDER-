import prisma from "../config/prisma.js";

export function getAllFossilFinds() {
  return prisma.fossilFind.findMany({
    orderBy: { createdAt: "desc" },
    include: {
      user: { select: { id: true, name: true } },
      dinosaur: { select: { id: true, name: true } },
    },
  });
}

export function getFossilFindById(id) {
  return prisma.fossilFind.findUnique({
    where: { id: Number(id) },
  });
}

export function createFossilFind(data) {
  return prisma.fossilFind.create({
    data,
    include: {
      user: { select: { name: true } },
      dinosaur: { select: { id: true, name: true } },
    },
  });
}

export function deleteFossilFind(id) {
  return prisma.fossilFind.delete({
    where: { id: Number(id) },
  });
}