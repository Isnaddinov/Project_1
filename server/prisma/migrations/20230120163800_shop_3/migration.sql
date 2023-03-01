/*
  Warnings:

  - Added the required column `email` to the `types` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "types" ADD COLUMN     "email" TEXT NOT NULL;
