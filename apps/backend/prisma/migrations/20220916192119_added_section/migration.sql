/*
  Warnings:

  - You are about to drop the column `branchId` on the `AppointmentGroup` table. All the data in the column will be lost.
  - Added the required column `name` to the `AppointmentGroup` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sectionId` to the `AppointmentGroup` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "AppointmentGroup" DROP CONSTRAINT "AppointmentGroup_branchId_fkey";

-- AlterTable
ALTER TABLE "AppointmentGroup" DROP COLUMN "branchId",
ADD COLUMN     "description" TEXT NOT NULL DEFAULT '',
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "sectionId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "Section" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT NOT NULL DEFAULT '',
    "branchId" INTEGER NOT NULL,

    CONSTRAINT "Section_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Section" ADD CONSTRAINT "Section_branchId_fkey" FOREIGN KEY ("branchId") REFERENCES "Branch"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AppointmentGroup" ADD CONSTRAINT "AppointmentGroup_sectionId_fkey" FOREIGN KEY ("sectionId") REFERENCES "Section"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
