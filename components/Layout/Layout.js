import Head from "next/head";
import Footer from "./Footer";
import styles from "./Layout.module.css";

function Layout(props) {
  return (
    <div>
      <Head>
        <title>InDrive - Sube tu propio sonido</title>
        <link rel="icon" href="/img/icon.jpg" />
      </Head>
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
