import bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const password = await bcrypt.hash("admin123", 10);

  await prisma.user.upsert({
    where: {
      email: "admin@jurassicverse.com",
    },
    update: {},
    create: {
      name: "Administrator",
      email: "admin@jurassicverse.com",
      password,
      role: "admin",
    },
  });

  console.log("✅ Admin user created");
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });