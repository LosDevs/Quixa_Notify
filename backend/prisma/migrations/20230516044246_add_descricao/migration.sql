/*
  Warnings:

  - Added the required column `descricao` to the `problema` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "problema" ADD COLUMN     "descricao" TEXT NOT NULL;
