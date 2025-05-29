import React from 'react';
import './Comunidades.css';

export default function Comunidades() {
  return (
    <div className="comunidades-container">
      <h2>Suas Comunidades</h2>
      <div className="comunidade-lista">
        <div className="comunidade">Comunidade 1</div>
        <div className="comunidade">Comunidade 2</div>
        <div className="comunidade">Comunidade 3</div>
      </div>

      <h2>Recomendações</h2>
      <div className="comunidade-lista">
        <div className="comunidade">Recomendada A</div>
        <div className="comunidade">Recomendada B</div>
        <div className="comunidade">Recomendada C</div>
      </div>
    </div>
  );
}
