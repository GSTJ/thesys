import React from "react";
import { Title, Container, Information, Description } from "components/atoms";
import { Flex } from "./styles";

export default () => {
  return (
    <Flex>
      <Container>
        <img
          src="/static/guy_in_phone.svg"
          alt="Guy walking while using his phone"
          height={350}
          width={350}
        />
        <Information>
          <Title.h2>
            <p>Experienced lawyer?</p>
            You can earn <span>money</span> and <span>recognition</span> with
            your <span>thesis</span>
          </Title.h2>
          <Description>
            We are glad to help you sell your thesis to other lawyers around the
            country who might need it. Contact us so we can make you get money
            and recognition (from your peers) as soon as possible!
          </Description>
        </Information>
      </Container>
    </Flex>
  );
};
