-- CreateTable
CREATE TABLE "Usuario" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "sobrenome" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "senha" TEXT NOT NULL,
    "tipodeConta" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Inscricao" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "dataInscricao" TEXT NOT NULL,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Inscricao_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "tipo" TEXT NOT NULL,
    "conteudo" TEXT NOT NULL,
    "dataPublicacao" TEXT NOT NULL,
    "autorId" INTEGER NOT NULL,
    "comunidadeId" INTEGER,
    CONSTRAINT "Post_autorId_fkey" FOREIGN KEY ("autorId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Post_comunidadeId_fkey" FOREIGN KEY ("comunidadeId") REFERENCES "Comunidade" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Midia" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "criador" TEXT NOT NULL,
    "dataCriacao" TEXT NOT NULL,
    "tipo" TEXT NOT NULL,
    "duracao" TEXT,
    "qualidade" INTEGER,
    "apresentador" TEXT,
    "usuarioId" INTEGER NOT NULL,
    CONSTRAINT "Midia_usuarioId_fkey" FOREIGN KEY ("usuarioId") REFERENCES "Usuario" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Comunidade" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL,
    "descricao" TEXT NOT NULL,
    "membros" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "Categoria" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "nome" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_MembrosComunidade" (
    "A" INTEGER NOT NULL,
    "B" INTEGER NOT NULL,
    CONSTRAINT "_MembrosComunidade_A_fkey" FOREIGN KEY ("A") REFERENCES "Comunidade" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_MembrosComunidade_B_fkey" FOREIGN KEY ("B") REFERENCES "Usuario" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Usuario_email_key" ON "Usuario"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_MembrosComunidade_AB_unique" ON "_MembrosComunidade"("A", "B");

-- CreateIndex
CREATE INDEX "_MembrosComunidade_B_index" ON "_MembrosComunidade"("B");
