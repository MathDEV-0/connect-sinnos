import React from 'react';
import './Perfil.css';

export default function Perfil() {
  return (
    <div className="perfil-container">
      <h2>Perfil do Usuário</h2>
      <div className="perfil-info">
        <p><strong>Nome:</strong> Nome do Usuário</p>
        <p><strong>Bio:</strong> Estudante na Unisinos</p>
        <p><strong>Seguidores:</strong> 0 | <strong>Seguindo:</strong> 0</p>
      </div>
    </div>
  );
}
