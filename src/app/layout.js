"use client";
import "@/assets/styles/global.scss";
import "@/assets/styles/_utility.scss";
import { StateContext } from "@/snippets/hook/appContext/StateContext";
import Head from "next/head";
import styles from "@/assets/styles/layout.module.scss";
import { Navbar, Footer } from "@/snippets/components";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <StateContext>
        <Head>
          <title>Plantito</title>
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="./apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />
          <meta name="msapplication-TileColor" content="#da532c" />
          <meta name="theme-color" content="#ffffff" />
          <meta
            name="description"
            content="An Ecommerce store for plants"></meta>
        </Head>
        <header>
          <Navbar />
        </header>
        <body style={{ padding: "10px" }}>
          <main className={styles["main-container"]}>{children}</main>
        </body>
        <footer className={styles.footer}>
          <Footer />
        </footer>
      </StateContext>
    </html>
  );
}
