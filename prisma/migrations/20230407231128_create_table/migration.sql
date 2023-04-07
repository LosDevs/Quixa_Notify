-- CreateTable
CREATE TABLE "problema" (
    "id" SERIAL NOT NULL,
    "titulo" TEXT NOT NULL,
    "longitude" TEXT NOT NULL,
    "latitude" TEXT NOT NULL,
    "endereco" TEXT NOT NULL,
    "tipo_problema" TEXT NOT NULL,
    "nivel_gravidade" INTEGER NOT NULL,
    "votacao" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "problema_pkey" PRIMARY KEY ("id")
);
