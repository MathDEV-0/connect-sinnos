const express = require('express');
const cors = require('cors');
const login = require('./src/auth/login');

const app = express();

const PORT = process.env.PORT || 3000;
//habilita json no body das requisiçoes
app.use(express.json());
//habilita cors
app.use(cors());

const corsOptions = {
  origin: '*',
  optionsSucessStatus: 200,
};

app.use(cors(corsOptions));

//log de requisições
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - ${new Date().toISOString()}`);
  next();
});

//rota teste servidor rodando
app.get('/', (req, res) => {
  res.send('Servidor Rodando');
});

//rota pra obter dados de exemplo
app.get('/data', (req, res) => {
  res.json({ message: 'Dados de exemplo' });
});

//login
app.post('/auth/login', login);

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
