require('dotenv').config();
const express = require('express');
const cors = require('cors');
const path = require('path');

const authRoutes = require('./routes/authRoutes');
const uploadRoutes = require('./routes/uploadRoutes');

const app = express();

// Configurações
app.use(express.json());
app.use(cors());

// Logger simplificado (opcional)
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

// Rotas
app.get('/', (req, res) => {
  res.send('Servidor Rodando');
});

app.get('/data', (req, res) => {
  res.json({ message: 'Dados de exemplo' });
});

// Registro de rotas
app.use('/auth', authRoutes);
app.use('/upload', uploadRoutes);

// Serve arquivos estáticos da pasta uploads
app.use('/uploads', express.static('G:/uploads'));

module.exports = app;
