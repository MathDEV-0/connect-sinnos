import React from 'react';
import './Feed.css';

export default function Feed() {
  return (
    <div className="feed-container">
      <h2>Feed</h2>
      <div className="post-card">
        <h3>Nome do Usuário</h3>
        <p>Conteúdo do post...</p>
      </div>
      <div className="post-card">
        <h3>Nome do Usuário</h3>
        <p>Conteúdo do post...</p>
      </div>
    </div>
  );
}
