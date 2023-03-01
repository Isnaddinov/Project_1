/*
  Warnings:

  - You are about to drop the column `userId` on the `basket` table. All the data in the column will be lost.
  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "basket" DROP CONSTRAINT "basket_userId_fkey";

-- DropIndex
DROP INDEX "basket_userId_key";

-- AlterTable
ALTER TABLE "basket" DROP COLUMN "userId";

-- DropTable
DROP TABLE "user";
