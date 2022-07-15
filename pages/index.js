import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>InDrive - Sube tu propio sonido</title>
        <link rel="icon" href="/img/icon.jpg" />
      </Head>
      <main className={styles.main}>
        <div className={styles.page_home}>
          <div className={styles.logo}>
            <Image src="/img/logo.png" alt="InDrive" width={105} height={99} />
          </div>
          <div className={styles.form_box}>
            <div className={styles.form}>
              <div className={styles.upload}>
                <svg viewBox="0 0 72 72">
                  <path
                    d="M36.493 72C16.118 72 0 55.883 0 36.493 0 16.118 16.118 0 36.493 0 55.882 0 72 16.118 72 36.493 72 55.882 55.883 72 36.493 72zM34 34h-9c-.553 0-1 .452-1 1.01v1.98A1 1 0 0 0 25 38h9v9c0 .553.452 1 1.01 1h1.98A1 1 0 0 0 38 47v-9h9c.553 0 1-.452 1-1.01v-1.98A1 1 0 0 0 47 34h-9v-9c0-.553-.452-1-1.01-1h-1.98A1 1 0 0 0 34 25v9z"
                    fill="#409fff"
                    fillRule="nonzero"
                  ></path>
                </svg>
                <div className={styles.upload_text}>
                  <h2>Subir archivos</h2>
                </div>
              </div>
              <div className={styles.inputs}>
                <input
                  type="text"
                  name="title"
                  placeholder="Nombre de tu pieza"
                />
                <input type="text" name="name" placeholder="Nombre completo" />
                <input type="email" name="Email" placeholder="Email" />
              </div>
            </div>
            <div className={styles.checkbox}>
              <input type="checkbox" id="cbox1" value="checkbox" /> Acepto
              términos y condiciones
            </div>
            <div className={styles.btn}>
              <button type="submit">Enviar</button>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
