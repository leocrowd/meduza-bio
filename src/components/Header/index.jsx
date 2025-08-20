import styles from "./Header.module.css";


export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.avatar}></div>
        <div className={styles.info}>
            <h1>Meduza Lab</h1>
            <h3>Estudio de tatuagem & artes visuais</h3>
            <p>Blackwork | Fineline | Pontilhismo | Floral</p>
            <p>Criando na pele e além</p>
        </div>
    </div>
  );
}
