import Head from "next/head";
import Image from "next/image";
import { Fragment, useRef, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [isFormFilled, setIsFormFilled] = useState(false);
  const nameRef = useRef();
  const emailRef = useRef();

  const onTypeHandler = () => {
    if (nameRef.current.value && emailRef.current.value.length > 5) {
      setIsFormFilled(true);
    } else {
      setIsFormFilled(false);
    }
  };

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
          <div className={styles.form_box_gracias}>
            <div className={styles.form}>
              <div className={styles.image}>
                <Image
                  src="/img/gracias.png"
                  alt="InDrive"
                  width={2274}
                  height={2499}
                />
              </div>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
