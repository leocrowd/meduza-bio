import { useState } from 'react'
import styles from './App.module.css'
import Header from './components/Header'
import Card from './components/Card'
import ShareBtn from './components/ShareBtn';


export default function App() {
  const [showPopup, setShowPopup] = useState(false);

  const cuidados = [
    "Lave a tattoo com água fria e sabão neutro.",
    "Aplique a pomada recomendada pelo tatuador.",
    "Evite sol e piscina durante a cicatrização.",
    "Não coce nem arranque as casquinhas.",
    "Use roupas leves para não abafar a tattoo.",
    "Hidrate a pele após a cicatrização."
  ];

  return (
    <div className={styles.container}>
      <Header />
      <ShareBtn />

      <Card
        title={`Orçamento`}
        text={`Quer saber quanto fica sua tattoo? Clique abaixo e fale direto com a artista no WhatsApp.`}
        link={`https://wa.me/555199682076?text=ol%C3%A1%2C%20gostaria%20de%20fazer%20um%20or%C3%A7amento`}
        linkTitle={`Pedir Orçamento`}
      />
      <Card
        title={`Portfólio`}
        text={`Confira os trabalhos já realizados e inspire-se para a sua próxima tattoo no Instagram.`}
        link={`https://www.instagram.com/tattooraizaborda/?igsh=azg1aG5ldm1uZzd2#`}
        linkTitle={`Ver Portfólio`}
      />
      <Card
        title={`Cuidados com sua Tattoo`}
        text={`Confira os cuidados que você precisa ter com a sua tatuagem nova`}
        linkTitle={`Veja aqui`}
        onClick={() => setShowPopup(true)}
      />

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContent}>
            <h2>Cuidados Pós-Tattoo</h2>
            <ul>
              {cuidados.map((cuidado, i) => (
                <li key={i}>{cuidado}</li>
              ))}
            </ul>
            <button className={styles.closeBtn} onClick={() => setShowPopup(false)}>Fechar</button>
          </div>
        </div>
      )}

      <div className={styles.footer}>
        <small>© 2025 Todos os direitos reservados.
          Desevolvido por <a href="https://bio.nopx.com.br/">NOPX</a>.
        </small>
      </div>
      

    </div>
  )
}


