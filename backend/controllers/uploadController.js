const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const path = require('path');

const uploadFile = async (req, res) => {
  try {
      console.log('📥 Dados recebidos:', {
      body: req.body,
      file: req.file,
      user: req.user,
    });
  if (!req.file) {
    return res.status(400).json({ error: 'Arquivo não enviado' });
  }
  if(!req.user || !req.user.id) {
    return res.status(401).json({ error: 'Usuário não autenticado' });
  }
    const { originalname, mimetype } = req.file;
    const descricao = req.body.description || '';

    const midia = await prisma.midia.create({
      data: {
        nome: originalname,
        nomeArquivo: filename,
        descricao,
        tamanho: serialize,
        tipo: mimetype.startsWith('image') ? 'imagem' :
              mimetype.startsWith('video') ? 'video' : 'outro',
        usuarioId: req.user.id,
        caminho: `/uploads/${req.file.filename}`,
      },
    });

    res.status(201).json({
      sucess: true,
      message: 'Upload feito com sucesso', 
      data: {
        ...midia,
        url: '/uploads/${filename}',
      }
    });
  } catch (err) {
    console.error('Erro detalhado:', err);
    res.status(500).json({ 
      error: 'Erro interno no servidor',
      details: process.env.NODE_ENV === 'development' ? err.message : undefined
    });
  }
};

module.exports = {
  uploadFile,
};
/*
const uploadArquivo = async (req, res) => {
  try {
    const { descricao = '', tipo = 'arquivo' } = req.body;
    const filePath = req.file ? req.file.filename : null;

    if (!filePath) {
      return res.status(400).json({ error: 'Arquivo não enviado' });
    }

    await prisma.post.create({
      data: {
        tipo,
        conteudo: filePath,
        dataPublicacao: new Date().toISOString(),
        autorId: 1, // substituir por ID real após login
      },
    });

    res.status(201).json({ message: 'Upload feito com sucesso!' });
  } catch (err) {
    console.error('Erro no upload:', err);
    res.status(500).json({ error: 'Erro ao fazer upload.' });
  }
};

module.exports = {
  uploadArquivo,
};*/