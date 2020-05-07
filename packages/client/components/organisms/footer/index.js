import React, { useState, useCallback } from "react";
import { Button, Title } from "components/atoms";
import { Confirmation } from "components/organisms";
import {
  Flex,
  Container,
  Alert,
  Input,
  EmailContainer,
  ErrorMessage,
} from "./styles";
import { isEmail, isMobilePhone } from "validator";
import { FormControl } from "@material-ui/core";
import InputMask from "react-input-mask";

const { NODE_ENV } = process.env;
const production = NODE_ENV === "production";
const url = production
  ? "https://thesys.herokuapp.com/subscription"
  : "http://localhost:8082/subscription";

export default () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState({});
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const Validate = useCallback(
    async (e) => {
      e.preventDefault();
      if (!isEmail(email))
        return setError({
          email: { message: "Invalid e-mail!" },
        });

      fetch(url, {
        method: "POST",
        body: JSON.stringify({ email, name }),
        headers: { "Content-Type": "application/json" },
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(error);
          if (data.errors) return setError(data.errors);
          if (!data._id) return setError("Unknown error");

          setError({});
          setOpen(true);
        });
    },
    [isEmail, isMobilePhone, setError, setOpen, email, name, error]
  );

  const handleClose = useCallback((e) => setOpen(false), [setOpen]);

  return (
    <Flex>
      <Confirmation open={open} onClose={handleClose} />
      <Container>
        <Title.h2>
          Get in <span>contact</span>
        </Title.h2>
        <Alert>
          <img
            width={50}
            height={50}
            alt="Hand stop sign"
            src="/static/stop.svg"
          />
          <span>
            We are currently working on our marketplace, but that doesn't mean
            we won't help you!
            <br />
            <br />
            Put your contact bellow if you wan't to buy or sell a thesis and we
            will contact you as soon as possible
          </span>
        </Alert>

        <EmailContainer onSubmit={Validate}>
          <FormControl error>
            <Input
              error={!!error.name}
              label="Name"
              placeholder="Write your full name"
              value={name}
              onChange={handleNameChange}
              margin="normal"
              variant="outlined"
              required
              aria-describedby="name-error-text"
            />
            {error.name && (
              <ErrorMessage id="name-error-text">
                {error.name.message}
              </ErrorMessage>
            )}
          </FormControl>
          <FormControl error>
            <Input
              error={!!error.email}
              value={email}
              onChange={handleEmailChange}
              label="Email"
              placeholder="Write your favorite e-mail"
              margin="normal"
              variant="outlined"
              required
              aria-describedby="email-error-text"
            />
            {error.email && (
              <ErrorMessage id="email-error-text">
                {error.email.message}
              </ErrorMessage>
            )}
          </FormControl>
          <Button filled radius="5px" type="submit">
            Send
          </Button>
        </EmailContainer>
      </Container>
    </Flex>
  );
};
