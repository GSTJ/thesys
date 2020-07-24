import React from "react";
import Head from "next/head";
import Analytics from "components/analytics";
import { Global } from "components/atoms";
import {
  Hero,
  FirstPart,
  SecondPart,
  Navbar,
  Footer,
} from "components/organisms";

export default function components() {
  return (
    <Analytics>
      <Head>
        <title>Thesys | Share legal knowledge</title>
        <link rel="canonical" href="https://www.thesys.com.br" />
      </Head>
      <Navbar />
      <Global />
      <Hero />
      <FirstPart />
      <SecondPart />
      <Footer />
    </Analytics>
  );
}
