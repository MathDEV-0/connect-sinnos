const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.usuario.create({
    data: {
      nome: "Usuário",
      sobrenome: "Teste",
      email: "teste",
      senha: "teste", // senha fictícia
      tipodeConta: "aluno",
    },
  });

  console.log("Usuário de teste criado com sucesso!");
}

main()
  .catch((e) => {
    console.error("Erro ao criar usuário:", e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });