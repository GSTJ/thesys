import React from "react";
import Head from "next/head";
import Link from "next/link";
import {
  Cookies,
  CookiesProvider,
  CookieBannerUniversal,
} from "react-cookie-banner";
const cookies = new Cookies();

const styles = {
  banner: {
    height: 57,
    background: "rgba(52, 64, 81, 0.88) url(/cookie.png) 20px 50% no-repeat",
    backgroundSize: "30px 30px",
    backgroundColor: "",
    fontSize: "15px",
    fontWeight: 600,
    position: "fixed",
    bottom: 0,
    display: "flex",
    alignItems: "center",
  },
  button: {
    border: "1px solid white",
    borderRadius: 4,
    width: 66,
    height: 32,
    lineHeight: "32px",
    background: "transparent",
    color: "white",
    fontSize: "14px",
    fontWeight: 600,
    opacity: 1,
    right: 20,
    marginTop: -18,
  },
  message: {
    display: "block",
    padding: "9px 67px",
    lineHeight: 1.3,
    textAlign: "left",

    marginRight: 30,
    color: "white",
  },
  link: {
    textDecoration: "none",
    fontWeight: "bold",
  },
};

export default () => (
  <>
    <style jsx global>{`
      body,
      html {
        padding: 0;
        margin: 0;
        font-family: "Helvetica Neue Lt Std", Helvetica Neue, sans-serif;
      }
    `}</style>
    <Head>
      <meta
        name="description"
        content="Comunidade de debates para desenvolver o pensamento crítico. Reflita, comente e debata!"
      />

      <meta name="twitter:card" content="summary_large_image"></meta>

      <meta property="og:locale" content="pt_BR" />
      <meta property="og:url" content="https://www.thesys.com.br" />
      <meta property="og:title" content="Comunidade de debates" />
      <meta property="og:site_name" content="Avante" />
      <meta
        property="og:description"
        content="Comunidade de debates para desenvolver o pensamento crítico. Reflita, comente e debata!"
      />
      <meta property="og:type" content="website" />

      <meta property="og:image" content="https://www.thesys.com.br/cover.png" />
      <meta property="og:image:type" content="image/jpeg" />
      <meta property="og:image:width" content="800" />
      <meta property="og:image:height" content="600" />
    </Head>
    <div>
      <CookiesProvider cookies={cookies}>
        <CookieBannerUniversal
          message="Esse website utiliza cookies"
          buttonMessage="Fechar"
          styles={styles}
          dismissOnScrollThreshold={300}
          link={<a href="/cookies">Saiba mais</a>}
        />
      </CookiesProvider>
    </div>
  </>
);
