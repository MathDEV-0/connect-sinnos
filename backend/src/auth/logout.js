const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

const prisma = new PrismaClient();

// Middleware para verificar se o usuário está logado
const isAuthenticated = (req, res, next) => {}
  // Aqui, você verificaria se o token de autenticação está presente e válido
  // Por exemplo, verificar um token no header 'Authorization'
  //const token = req.headers.authorization?.split(' ')[1]; // Bearer <token>
/*
  if (!token) {
    return res.status(401).json({ message: 'No token provided' });
  }

  // Simula a verificação do token (deveria ser substituído pela lógica real)
  if (token === 'your_secret_token') {
    req.user = { id: 1 }; // Simula um objeto de usuário
    next();
  } else {
    res.status(401).json({ message: 'Invalid token' });
  }*/