import React from "react";
import Link from "next/link";
import { Navbar, Icons } from "./styles";

export default () => {
  return (
    <Navbar>
      <Link href="/">
        <a>
          <img
            src="/static/logo.svg"
            alt="Thesys Logo"
            height={30}
            width={110}
          />
        </a>
      </Link>
      <Icons>
        <a href="mailto:suporte@thesys.com.br" rel="noreferrer" target="_blank">
          <img alt="E-mail" src="/static/email.svg" height={25} width={25} />
        </a>
        <a
          href="https://www.instagram.com/thesys_brasil/"
          rel="noreferrer"
          target="_blank"
        >
          <img
            alt="Instagram"
            src="/static/instagram.svg"
            height={25}
            width={25}
          />
        </a>
      </Icons>
    </Navbar>
  );
};
