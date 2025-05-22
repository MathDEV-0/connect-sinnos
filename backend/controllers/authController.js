const { PrismaClient } = require('@prisma/client');
const jwt = require('jsonwebtoken');
const prisma = new PrismaClient();

const SECRET_KEY = process.env.JWT_SECRET;

const login = async (req, res) => {
  const { email, senha } = req.body;
  try {
    const user = await prisma.usuario.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: 'Usuário não existe' });
    }

    if (user.senha !== senha) {
      return res.status(401).json({ message: 'Senha incorreta' });
    }

    // Gera token de acesso (simples, para testes)
    const token = jwt.sign({ userId: user.id }, SECRET_KEY, { expiresIn: '1h' });

    res.json({ token, message: 'Login realizado com sucesso' });

  } catch (error) {
    console.error('Erro no login:', error);
    res.status(500).json({ message: 'Erro no servidor' });
  }
};

module.exports = {login};

