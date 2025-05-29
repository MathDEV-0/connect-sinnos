import React from 'react';
import { useNavigate } from 'react-router-dom';
import './index.css'; 

const Index = () => {
    const navigate = useNavigate();

    const handleLoginClick = () => {
        navigate('/login');
    };
  return (
    <html lang="pt">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Sinos Connect</title>
        <link rel="stylesheet" href="../css/index.css" />
      </head>
      <body>
        <h1>Bem-vindo ao Sinos Connect</h1>
        <div className="button-group">
          <button className="login" onClick={handleLoginClick}>
            Login
          </button>
          <button className="cadastro" onClick={() => window.open('https://www.unisinos.br/minha-unisinos/', '_blank')}>
            Cadastro
          </button>
          <button className="unisinos" onClick={() => window.open('https://www.unisinos.br', '_blank')}>
            Conhecer a Unisinos
          </button>
        </div>
      </body>
    </html>
  );
};

export default Index;