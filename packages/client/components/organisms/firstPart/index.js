import React from "react";
import { Title, Container, Information, Description } from "components/atoms";
import { Flex } from "./styles";

export default () => {
  return (
    <Flex>
      <Container>
        <Information>
          <Title.h1>
            Learn from <span>the best professionals</span> in the field
          </Title.h1>
          <Description>
            We don't wan't you wasting countless hours trying to find the best
            defence. Tell us your problem and we will find trustworthy
            professionals willing to give or sell you your desired thesis
          </Description>
        </Information>
        <img
          src="/static/girl_in_chair.svg"
          alt="Girl sitting in a chair with a tablet"
          height={350}
          width={350}
        />
      </Container>
    </Flex>
  );
};
