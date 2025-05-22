import { useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import styles from "./CreatePost.module.css";
import { usePostContext } from "../../context/PostContext";

const CreatePost = () => {
const location = useLocation();
const navigate = useNavigate();
const { addPost } = usePostContext();
const [descricao, setDescricao] = useState("");

  // Verifica se é um post apenas de texto
  const isTextOnly = location.state?.isTextOnly || false;
  const images = location.state?.images || [];

  const handleSubmit = async () => {
    const token = localStorage.getItem("token");
    console.log("token:", token);

  if (!isTextOnly && images.length === 0 && !descricao.trim()) {
    alert("Por favor, insira uma descrição ou selecione uma imagem.");
    return;
  }

  const formData = new FormData();
  formData.append("description", descricao);

  if (!isTextOnly && images.length > 0) {
    try{
      const imageBlob = await fetch(images[0]).then(res => res.blob());
      const file = new File([imageBlob], "upload.jpg", { type: imageBlob.type });
      formData.append("media", file);
      console.log("enviando arquivo:", file);
  }   catch (error) {
      console.error("Erro ao converter imagem:", error);
      alert("Erro ao converter imagem");
      return;
    }
  }

  try {
    const response = await fetch("http://localhost:3000/upload", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${token}`,
      },
      body: formData,
    });

    if (response.status === 401) {
      alert("Token inválido ou expirado. Faça login novamente.");
      localStorage.removeItem("token");
      navigate("/login");
      return;
    }

    if (!response.ok) {
      throw new Error('Erro ${response.status}: ${response.statusText}');
    }

    if (response.ok) {
      const result = await response.json();
      console.log("Upload feito com sucesso:", result);
      navigate("/feed");
    } else {
      alert("Erro ao fazer upload");
    }
  } catch (error) {
    console.error("Erro ao enviar post:", error);
    alert("Erro na conexão com o servidor");
  }
};

  return (
    <div className={styles.container}>
      {/* Visualizador de imagem (só aparece se não for texto puro) */}
      {!isTextOnly && images.length > 0 && (
        <div className={styles.imageViewer}>
          <img src={images[0]} alt="Preview" />
        </div>
      )}

      {/* Campo de texto sempre aparece */}
      <textarea
        className={styles.descricao}
        placeholder="Escreva uma descrição..."
        value={descricao}
        onChange={(e) => setDescricao(e.target.value)}
      />

      <button className={styles.postarBtn} onClick={handleSubmit}>
        Postar
      </button>
    </div>
  );
};

export default CreatePost;
