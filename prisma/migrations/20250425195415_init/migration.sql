-- CreateTable
CREATE TABLE "Video" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "path" TEXT NOT NULL,
    "duration" DOUBLE PRECISION NOT NULL,
    "size" INTEGER NOT NULL,
    "status" TEXT NOT NULL,
    "trimmedPath" TEXT,
    "subtitlePath" TEXT,
    "finalPath" TEXT,

    CONSTRAINT "Video_pkey" PRIMARY KEY ("id")
);
