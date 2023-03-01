/*
  Warnings:

  - A unique constraint covering the columns `[userId]` on the table `basket` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "basket" ADD COLUMN     "userId" INTEGER;

-- CreateTable
CREATE TABLE "user" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "role" TEXT NOT NULL DEFAULT 'user',

    CONSTRAINT "user_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "basket_userId_key" ON "basket"("userId");

-- AddForeignKey
ALTER TABLE "basket" ADD CONSTRAINT "basket_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE SET NULL ON UPDATE CASCADE;
