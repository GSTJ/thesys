import React from "react";
import { Fade } from '@material-ui/core';
import { Focus, Button, Title, Description } from "components/atoms";
import { Box, Shadow, Container, Worker } from './styles';

export default ({ onClose, open, ...rest }) => (
  <Fade in={open}>
    <Focus  {...rest}>
      {open && <Box>
        <Worker src="/static/happy_worker.svg" height={150} width={150} />
        <Shadow />
        <Container>
          <Title.h2><span>Cadastrado!</span></Title.h2>
          <Description>Obrigado por se inscrever! Avisaremos assim que tudo ficar pronto.</Description>
          <Button filled radius="100px" onClick={onClose}>Ok</Button>
        </Container>
      </Box>}
    </Focus>
  </Fade>
);
