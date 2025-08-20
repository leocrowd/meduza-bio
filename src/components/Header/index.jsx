import styles from "./Header.module.css";


export default function Header() {
  return (
    <div className={styles.header}>
        <div className={styles.info}>
            <h1>Meduza Lab</h1>
            <p>ARTE E TATTOO</p>
            <p>Blackwork | Fineline | Pontilhismo | Floral</p>
        </div>
    </div>
  );
}
