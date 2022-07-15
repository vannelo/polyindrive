import Head from "next/head";
import Image from "next/image";
import { Fragment } from "react";
import styles from "../styles/Home.module.css";
import Script from "next/script";

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
            <div
              id="crmWebToEntityForm"
              className="zcwf_lblLeft crmWebToEntityForm"
            >
              <form
                action="https://crm.zoho.com/crm/WebToContactForm"
                name="WebToContacts5388361000000402001"
                method="POST"
                onSubmit='javascript:document.charset="UTF-8"; return checkMandatory5388361000000402001()'
              >
                <input
                  type="text"
                  name="xnQsjsdp"
                  value="5ba68510bef4563d127ef20e38f1948eb5207c89778ad1e7315be647827aaa2d"
                ></input>
                <input type="hidden" name="zc_gad" id="zc_gad" value=""></input>
                <input
                  type="text"
                  name="xmIwtLD"
                  value="10f0cc7693f7484d71744b0b7f7fbddca651d3bc15193880822922c4dd173886"
                ></input>
                <input
                  type="text"
                  name="actionType"
                  value="Q29udGFjdHM="
                ></input>
                <input
                  type="text"
                  name="returnURL"
                  value="https&#x3a;&#x2f;&#x2f;polyindrive.vercel.app"
                ></input>
                <div className="zcwf_title">Polygon</div>
                <div className="zcwf_row">
                  <div className="zcwf_col_lab">Cargar un archivo</div>
                  <div className="zcwf_col_fld">
                    <div className="clearB">
                      <input
                        type="file"
                        className="zcwf_file"
                        name="theFile"
                        id="theFile5388361000000402001"
                        multiple
                      />
                      <div className="zcwf_col_help"></div>
                    </div>
                    <p>El límite de tamaño de los archivos es de 20 MB.</p>
                  </div>
                </div>
                <div className="zcwf_row">
                  <div className="zcwf_col_lab">
                    <label htmlFor="Title">T&iacute;tulo</label>
                  </div>
                  <div className="zcwf_col_fld">
                    <input
                      type="text"
                      id="Title"
                      name="Title"
                      maxLength="100"
                    ></input>
                    <div className="zcwf_col_help"></div>
                  </div>
                </div>
                <div className="zcwf_row">
                  <div className="zcwf_col_lab">
                    <label htmlFor="Last_Name">
                      Nombre completo<span>*</span>
                    </label>
                  </div>
                  <div className="zcwf_col_fld">
                    <input
                      type="text"
                      id="Last_Name"
                      name="Last Name"
                      maxLength="80"
                    ></input>
                    <div className="zcwf_col_help"></div>
                  </div>
                </div>
                <div className="zcwf_row">
                  <div className="zcwf_col_lab">
                    <label htmlFor="Email">Correo electr&oacute;nico</label>
                  </div>
                  <div className="zcwf_col_fld">
                    <input
                      type="text"
                      ftype="email"
                      id="Email"
                      name="Email"
                      maxLength="100"
                    ></input>
                    <div className="zcwf_col_help"></div>
                  </div>
                </div>
                <div className="zcwf_row">
                  <div className="zcwf_col_lab"></div>
                  <div className="zcwf_col_fld">
                    <input
                      type="submit"
                      id="formsubmit"
                      className="formsubmit zcwf_button"
                      value="Enviar"
                      title="Enviar"
                    />
                    <input
                      type="reset"
                      className="zcwf_button"
                      name="reset"
                      value="Restablecer"
                      title="Restablecer"
                    />
                  </div>
                </div>
                <Script
                  id="wf_anal"
                  src="https://crm.zohopublic.com/crm/WebFormAnalyticsServeServlet?rid=10f0cc7693f7484d71744b0b7f7fbddca651d3bc15193880822922c4dd173886gid5ba68510bef4563d127ef20e38f1948eb5207c89778ad1e7315be647827aaa2dgid5cf99212d7958dbcd176c761c6ce0a4d7e43e277bdc5d8b9c12010015418942cgid14f4ec16431e0686150daa43f3210513&tw=61690b96c1d0471b638f31426f38e68aa67fb7ed6da86f32dc10ad817fe55a0a"
                ></Script>
              </form>
            </div>
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
