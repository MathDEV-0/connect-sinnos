import { useState } from "react";
import Retangulo from "../../components/Retangulo/Retangulo";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import styles from "./Login.module.css"; // IMPORTANTE!

const Login = () => {
  const [showPassword, setShowPassword] = useState(false); // Estado para mostrar ou esconder a senha
  const [username, setUsername] = useState(""); // Estado para o nome de usuário
  const [password, setPassword] = useState(""); // Estado para a senha
  const navigate = useNavigate(); // Hook para navegação

  const togglePassword = () => {
    setShowPassword(!showPassword);
  };

  // Função para verificar os dados de login admin teste
  const handleLoginTest = () => {
    if (username === "admin" && password === "123456") {
      localStorage.setItem("token", "fake-token-123"); // Armazena um token falso no localStorage
      navigate("/feed"); // Se as credenciais estiverem corretas, redireciona para o feed
    }
  };

  // Função para verificar dados de login
  function handleLogin(username, password){ 
      try {
      const response = fetch('http://localhost:3000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: username, // Envia o email como username
          senha: password, // Envia a senha
        }),
    });
    logger.log('Login response:', response.data);
    localStorage.setItem('token', response.data.token);
    navigate('/feed');
  } catch (error) {
    console.error('Erro no login:', error);
    alert('Usuário ou senha inválidos');
  }
}
    
  return (
    <div>
      <div className={styles.homeContainer}>
        <Retangulo tipo="1">
          <img src="/assets/logo.png" alt="Logo" className={styles.logoImage} />
        </Retangulo>
        <Retangulo tipo="2"></Retangulo>
        <Retangulo tipo="85">
          <div className={styles.formContainer}>
            <p className={styles.textoLogin}>Realize seu login</p>
            <input
              type="text"
              placeholder="Insira seu email/apelido"
              className={styles.input}
              value={username} // Vincula o valor do input ao estado
              onChange={(e) => setUsername(e.target.value)} // Atualiza o estado quando o valor mudar
            />
            <div className={styles.passwordContainer}>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Insira sua senha"
                className={styles.inputPassword}
                value={password} // Vincula o valor do input ao estado
                onChange={(e) => setPassword(e.target.value)} // Atualiza o estado quando o valor mudar
              />
              <span className={styles.passwordToggle} onClick={togglePassword}>
                <FontAwesomeIcon icon={showPassword ? faEye : faEyeSlash} />
              </span>
            </div>
            {/*}<button className={styles.botao} onClick={handleLogin}>
              Entrar
            </button>{*/}
            <button className={styles.botao} onClick={() => handleLogin(username, password)}>Entrar</button>
          </div>
        </Retangulo>
      </div>
    </div>
  );
};

export default Login;
