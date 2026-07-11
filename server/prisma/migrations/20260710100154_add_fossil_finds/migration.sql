-- CreateTable
CREATE TABLE `FossilFind` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `userId` INTEGER NOT NULL,
    `dinosaurId` INTEGER NULL,
    `image` VARCHAR(191) NOT NULL,
    `note` TEXT NOT NULL,
    `location` VARCHAR(191) NULL,
    `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `FossilFind` ADD CONSTRAINT `FossilFind_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `FossilFind` ADD CONSTRAINT `FossilFind_dinosaurId_fkey` FOREIGN KEY (`dinosaurId`) REFERENCES `Dinosaur`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;
