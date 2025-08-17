// Card.jsx
import styles from "./Card.module.css";

export default function Card({ title, text, link, linkTitle, onClick }) {
  const temAcao = typeof onClick === "function";

  return (
    <div className={styles.cardContainer}>
      <div className={styles.cardBody}>
        <h2>{title}</h2>
        <p>{text}</p>

        {temAcao ? (
          <button
            type="button"
            className={styles.link}
            onClick={onClick}
          >
            {linkTitle}
          </button>
        ) : (
          <a
            className={styles.link}
            href={link}
            target="_blank"
            rel="noreferrer"
          >
            {linkTitle}
          </a>
        )}
      </div>
    </div>
  );
}
