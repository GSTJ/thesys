import React from "react";
import { Button, Title } from "components/atoms";
import { Search } from "components/molecules";
import { Container, Hero, Separator } from "./styles";
import { animateScroll } from "react-scroll";

export default () => {
  return (
    <Container>
      <Hero>
        <Title.h2>
          Find the <span>best thesis</span> for your case:
        </Title.h2>
        <Search onSearch={animateScroll.scrollToBottom} />
        <Separator>
          <Button stroked onClick={animateScroll.scrollToBottom}>
            I'm Feeling Lucky
          </Button>
          <Button filled onClick={animateScroll.scrollToBottom}>
            Search
          </Button>
        </Separator>
      </Hero>
    </Container>
  );
};
