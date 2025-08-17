import styles from './ShareBtn.module.css'

export default function ShareBtn() {
  const compartilhar = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Formulário de Tatuagem",
          text: "Preencha seu formulário aqui:",
          url: "https://meuapp.com/formulario"
        });
        console.log("Compartilhado com sucesso!");
      } catch (error) {
        console.log("Erro ao compartilhar:", error);
      }
    } else {
      alert("Seu navegador não suporta compartilhamento automático");
    }
  };

  return (
    <button className={styles.share} onClick={compartilhar}>
      Compartilhar
    </button>
  );
}


