import React from "react";
import { Fade } from "@material-ui/core";
import { Focus, Button, Title, Description } from "components/atoms";
import { Box, Shadow, Container, Laywer } from "./styles";

export default ({ onClose, open, ...rest }) => (
  <Fade in={open}>
    <Focus {...rest}>
      {open && (
        <Box>
          <Laywer src="/static/happy_lawyer.svg" height={150} width={150} />
          <Shadow />
          <Container>
            <Title.h2>
              <span>Registered!</span>
            </Title.h2>
            <Description>
              Thank you! We will get in contact as soon as possible.
            </Description>
            <Button filled radius="100px" onClick={onClose}>
              Ok
            </Button>
          </Container>
        </Box>
      )}
    </Focus>
  </Fade>
);
