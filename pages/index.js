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
          <div className={styles.form_box}>
            <div className={styles.form}>
              {/* <div className={styles.upload}>
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
              </div> */}

              <form
                action="https://crm.zoho.com/crm/WebToContactForm"
                name="WebToContacts5388361000000402001"
                method="POST"
                encType="multipart/form-data"
              >
                <input
                  type="hidden"
                  name="xnQsjsdp"
                  value="5ba68510bef4563d127ef20e38f1948eb5207c89778ad1e7315be647827aaa2d"
                />
                <input type="hidden" name="zc_gad" id="zc_gad" value="" />
                <input
                  type="hidden"
                  name="xmIwtLD"
                  value="10f0cc7693f7484d71744b0b7f7fbddca651d3bc15193880822922c4dd173886"
                />
                <input type="hidden" name="actionType" value="Q29udGFjdHM=" />
                <input
                  type="hidden"
                  name="returnURL"
                  value="https&#x3a;&#x2f;&#x2f;polyindrive.vercel.app/gracias"
                />
                <div className={styles.inputs}>
                  <input
                    type="file"
                    name="theFile"
                    id="theFile5388361000000402001"
                  />
                  <input
                    type="text"
                    id="Last_Name"
                    name="Last Name"
                    maxLength="80"
                    placeholder="Nombre completo"
                    required
                    onKeyDown={onTypeHandler}
                    ref={nameRef}
                  />
                  <input
                    type="text"
                    ftype="email"
                    id="Email"
                    name="Email"
                    maxLength="100"
                    placeholder="Email"
                    required
                    onKeyDown={onTypeHandler}
                    ref={emailRef}
                  />
                </div>
                <div className={styles.checkbox}>
                  <input type="checkbox" id="cbox1" value="checkbox" required />{" "}
                  Acepto términos y condiciones
                </div>
                <div className={styles.btn}>
                  {isFormFilled ? (
                    <button type="submit" className={styles.btn_active}>
                      Enviar
                    </button>
                  ) : (
                    <button type="submit" disabled>
                      Enviar
                    </button>
                  )}
                </div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </Fragment>
  );
}
