import React from "react";
import Analytics from "components/analytics";
import Link from "next/link";
import Head from "next/head";
import { Global, Focus, Button } from "components/atoms";
import {
  Container,
  ErrorContainer,
  Error,
  ErrorMessage,
  GlowingStars,
  Stars,
  BgPurple,
  Messages,
  MessageOne,
  MessageTwo,
  Star,
  BoxAstronaut,
  ObjectAstronaut,
  Objects,
  ObjectRocket,
  ObjectEarth,
  ObjectMoon,
} from "./styles";

export default () => {
  return (
    <Analytics>
      <Global />
      <Head>
        <title>Thesys | 404 - página não encontrada</title>
      </Head>
      <Container>
        <style jsx global>{`
          html,
          body {
            overflow: hidden;
          }
        `}</style>
        <BgPurple>
          <Focus open>
            <ErrorContainer>
              <Error>404</Error>
              <ErrorMessage>
                Oops, seems like <span>you lost yourself</span>.
              </ErrorMessage>
              <Link href="/">
                <Button stroked radius="100px">
                  Go back
                </Button>
              </Link>
            </ErrorContainer>
          </Focus>
          <Stars>
            <Objects>
              <ObjectRocket
                alt="rocket"
                src="/static/rocket.svg"
                width="40px"
              />
              <div className="earth-moon">
                <ObjectEarth
                  alt="earth"
                  src="/static/earth.svg"
                  width="100px"
                />
                <ObjectMoon alt="moon" src="/static/moon.svg" width="80px" />
              </div>
              <BoxAstronaut>
                <ObjectAstronaut
                  alt="astronaut"
                  src="/static/astronaut.svg"
                  width="140px"
                />
              </BoxAstronaut>
            </Objects>
            <Messages>
              <MessageOne />
              <MessageOne />
              <MessageOne />
              <MessageOne />
              <MessageOne />
              <MessageTwo />
              <MessageTwo />
              <MessageTwo />
              <MessageTwo />
              <MessageTwo />
            </Messages>
            <GlowingStars>
              <Star />
              <Star />
              <Star />
              <Star />
              <Star />
            </GlowingStars>
          </Stars>
        </BgPurple>
      </Container>
    </Analytics>
  );
};
