import React, { useEffect, useState, useCallback } from "react";
import { Container, Input } from "./styles";
import Typist from "react-typist";

const Themes = [
  "Criminal Law",
  "International Law",
  "Employment Law",
  "Commercial Law",
  "Intellectual Property Law",
  "Medical Law",
];

export default (props) => {
  const [current, setCurrent] = useState(0);

  const selected = Themes[current % Themes.length];
  const handleDone = useCallback(() => setCurrent(current + 1), [
    setCurrent,
    current,
  ]);
  return (
    <Container>
      <Input>
        <Typist key={selected} startDelay={750} onTypingDone={handleDone}>
          {selected}
          <Typist.Backspace count={selected.length} delay={750} />
        </Typist>
      </Input>
      <img
        src="/static/search.svg"
        alt="Pesquisar"
        onClick={props.onSearch}
        width={25}
      />
    </Container>
  );
};
