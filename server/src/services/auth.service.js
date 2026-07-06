import prisma from "../config/prisma.js";

/**
 * Find user by email
 */
export async function findUserByEmail(email) {
  return prisma.user.findUnique({
    where: {
      email,
    },
  });
}

/**
 * Find user by ID
 */
export async function findUserById(id) {
  return prisma.user.findUnique({
    where: {
      id: Number(id),
    },
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

/**
 * Create user
 */
export async function createUser(data) {
  return prisma.user.create({
    data,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

/**
 * Update user
 */
export async function updateUser(id, data) {
  return prisma.user.update({
    where: {
      id: Number(id),
    },
    data,
    select: {
      id: true,
      name: true,
      email: true,
      role: true,
      createdAt: true,
      updatedAt: true,
    },
  });
}

/**
 * Delete user
 */
export async function deleteUser(id) {
  return prisma.user.delete({
    where: {
      id: Number(id),
    },
  });
}