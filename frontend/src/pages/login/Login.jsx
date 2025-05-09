import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css';
import logo from '/@/assets/logo.png';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [mostrarSenha, setMostrarSenha] = useState(false);
  const navigate = useNavigate();

  const togglePassword = () => {
    setMostrarSenha(!mostrarSenha);
  };

  const handleLogin = async () => {
    try {
      const resposta = await fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, senha })
      });

      if (resposta.ok) {
        const dados = await resposta.json();
        localStorage.setItem('token', dados.token);
        navigate('/feed');
      } else {
        alert('Credenciais inválidas');
      }
    } catch (erro) {
      console.error('Erro ao fazer login:', erro);
      alert('Erro ao conectar ao servidor');
    }
  };

  return (
    <div className="login-container">
       <img src={logo} alt="SinosConnect Logo" className="logo" />
      <div className="title">Bem-vindo(a) ao Sinos Connect</div>
      <input
        type="text"
        className="input-box"
        placeholder="Usuário"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <div className="password-container">
        <input
          type={mostrarSenha ? 'text' : 'password'}
          className="input-box"
          placeholder="Senha"
          value={senha}
          onChange={(e) => setSenha(e.target.value)}
        />
        <span className="password-toggle" onClick={togglePassword}>👁️</span>
      </div>
      <a href="#" className="forgot-password">Esqueceu sua senha?</a>
      <button className="login-button" onClick={handleLogin}>Entrar</button>
      <div className="help">
        Problemas para acessar sua conta? <a href="#">Clique aqui.</a>
      </div>
    </div>
  );
}
