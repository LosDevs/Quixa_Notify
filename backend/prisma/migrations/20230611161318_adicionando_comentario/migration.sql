-- CreateTable
CREATE TABLE "comentario" (
    "id" SERIAL NOT NULL,
    "problemaId" INTEGER,
    "idusuario" INTEGER NOT NULL,
    "nome" TEXT NOT NULL,
    "comentario" TEXT NOT NULL,

    CONSTRAINT "comentario_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "comentario" ADD CONSTRAINT "comentario_problemaId_fkey" FOREIGN KEY ("problemaId") REFERENCES "problema"("id") ON DELETE SET NULL ON UPDATE CASCADE;
