-- CreateTable
CREATE TABLE "Availability" (
    "id" SERIAL NOT NULL,
    "day" INTEGER NOT NULL,
    "start_time" TIMESTAMP(3) NOT NULL,
    "duration" INTEGER NOT NULL,
    "appointmentGroupId" INTEGER NOT NULL,

    CONSTRAINT "Availability_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Availability" ADD CONSTRAINT "Availability_appointmentGroupId_fkey" FOREIGN KEY ("appointmentGroupId") REFERENCES "AppointmentGroup"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
