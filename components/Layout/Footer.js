import styles from "./Footer.module.css";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.items}>
          <Link href="/contacto">
            <a>Contacto</a>
          </Link>
          <Link href="/preguntas-frecuentes">
            <a>Preguntas Frecuentes</a>
          </Link>
          <Link href="/terminos-y-condiciones">
            <a>Términos y Condiciones</a>
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
