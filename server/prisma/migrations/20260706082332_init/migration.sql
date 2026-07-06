-- CreateTable
CREATE TABLE `Era` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `slug` VARCHAR(191) NOT NULL,
    `duration` VARCHAR(191) NOT NULL,
    `climate` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `bannerImage` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    UNIQUE INDEX `Era_name_key`(`name`),
    UNIQUE INDEX `Era_slug_key`(`slug`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Dinosaur` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `eraId` INTEGER NOT NULL,
    `name` VARCHAR(191) NOT NULL,
    `scientificName` VARCHAR(191) NOT NULL,
    `diet` VARCHAR(191) NOT NULL,
    `height` VARCHAR(191) NOT NULL,
    `length` VARCHAR(191) NOT NULL,
    `weight` VARCHAR(191) NOT NULL,
    `speed` VARCHAR(191) NOT NULL,
    `habitat` VARCHAR(191) NOT NULL,
    `image` VARCHAR(191) NOT NULL,
    `description` TEXT NOT NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `updatedAt` DATETIME(3) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Dinosaur` ADD CONSTRAINT `Dinosaur_eraId_fkey` FOREIGN KEY (`eraId`) REFERENCES `Era`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
