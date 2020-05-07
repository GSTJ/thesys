import React, { useState, useCallback, useMemo, useEffect } from "react";
import Head from "next/head";
import Analytics from "components/analytics";
import { useDropzone } from "react-dropzone";
import {
  Button as MaterialButton,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";
import {
  Button,
  Global,
  Title,
  Information,
  Container,
  DropArea,
} from "components/atoms";
import {
  Flex,
  Alert,
  Input,
  EmailContainer,
  ErrorMessage,
} from "components/organisms/footer/styles";
import { isEmail, isMobilePhone } from "validator";
import { FormControl } from "@material-ui/core";
import InputMask from "react-input-mask";
import { Navbar } from "components/organisms";

import Strapi from "strapi-sdk-javascript";

const { NODE_ENV } = process.env;
const production = NODE_ENV === "production";
const url = production
  ? "https://Thesys-cms.herokuapp.com"
  : "http://localhost:1337";

const strapi = new Strapi(url);

export default () => {
  const [error, setError] = useState({});
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [pictures, setPictures] = useState([""]);
  const [dialog, setDialog] = useState(false);

  const handleClose = () => setDialog(false);
  const handleNameChange = (e) => setName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({});

  const Validate = useCallback(
    async (e) => {
      e.preventDefault();

      if (!acceptedFiles[0])
        return setError({
          picture: { message: "*Insira ao menos um documento" },
        });
      if (!isEmail(email))
        return setError({
          email: { message: "*Isso não é um e-mail válido!" },
        });

      setError({});

      // File upload
      const form = new FormData();
      acceptedFiles.forEach((picture) =>
        form.append("files", picture, picture.name)
      );
      const pictures = await strapi.upload(form);
      if (!pictures[0]) return setError("Houve um erro ao enviar suas imagens");

      // Remove request creation
      const data = await strapi.createEntry("removes", {
        name,
        email,
        pictures,
      });

      if (data.errors) return setError(data.errors);
      if (!data._id) return setError("Erro desconhecido");

      setDialog(true);
      setError({});
    },
    [isEmail, isMobilePhone, setError, email, name, error]
  );

  return (
    <Analytics>
      <Head>
        <title>Thesys | Remoção de dados</title>
        <link rel="canonical" href="https://www.thesys.com.br/remove" />
      </Head>
      <Navbar />
      <Global />
      <Container>
        <Dialog
          open={dialog}
          onClose={handleClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">Enviado!</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              Suas informações serão apagadas por completo em breve.
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <MaterialButton onClick={handleClose} color="primary" autoFocus>
              Ok
            </MaterialButton>
          </DialogActions>
        </Dialog>
        <div style={{ margin: "100px 0" }}>
          <Title.h1>Remover meus dados</Title.h1>
          <Information>
            Caso tenha uma conta em nosso aplicativo e queira remover suas
            informações, preencha o formulário abaixo:
          </Information>

          <EmailContainer onSubmit={Validate}>
            <FormControl error>
              <Input
                error={!!error.name}
                label="Name"
                placeholder="Digite seu nome"
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
                placeholder="Digite seu email"
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
            <FormControl error>
              <h3>Comprove sua identidade*</h3>
              <DropArea>
                <div {...getRootProps({ className: "dropzone" })}>
                  <input
                    aria-describedby="pictures-error-text"
                    {...getInputProps()}
                  />
                  <h4 style={{ marginBottom: 0 }}>
                    Arraste um documento com foto para cá.
                  </h4>
                  <p style={{ marginTop: 5 }}>Ou clique para selecionar</p>
                </div>
                <aside>
                  <h4>Arquivos:</h4>
                  <ul>
                    {acceptedFiles.map((file) => (
                      <li key={file.path}>
                        {file.path} - {file.size} bytes
                      </li>
                    ))}
                  </ul>
                </aside>
              </DropArea>
              {error.picture && (
                <ErrorMessage
                  style={{ marginTop: 10 }}
                  id="pictures-error-text"
                >
                  {error.picture.message}
                </ErrorMessage>
              )}
            </FormControl>
            <Button filled radius="5px" type="submit">
              Enviar
            </Button>
          </EmailContainer>
        </div>
      </Container>
    </Analytics>
  );
};

//   const Validate = useCallback(async e => {
//     e.preventDefault();
//     let wpp = whatsapp.replace(/\(|\)| |-/g, " ").split(' ').join("")
//     if (!isEmail(email)) return setError({ email: { message: 'Isso não é um e-mail válido!' } });
//     if (wpp && !isMobilePhone(wpp, "pt-BR")) return setError({ whatsapp: { message: 'Isso não é um número válido!' } });

//     fetch(url, {
//       method: "POST",
//       body: JSON.stringify({ email, name, whatsapp: wpp }),
//       headers: { 'Content-Type': 'application/json' },
//     }).then(res => res.json()).then(data => {
//       console.log(error)
//       if (data.errors)
//         return setError(data.errors);
//       if (!data._id)
//         return setError("Erro desconhecido");

//       setError({});
//       setOpen(true);
//     });
//   }, [isEmail, isMobilePhone, setError, setOpen, whatsapp, email, name, error]);

//   const handleClose = useCallback(e => setOpen(false), [setOpen])

//   return (
//     <Flex>
//       <Confirmation open={open} onClose={handleClose} />
//       <Container>
//         <Title.h2>
//           Garanta <span>seu lugar</span> na mesa
//         </Title.h2>
//         <Alert>
//           <img width={50} height={50} alt="Hand stop sign" src="/static/stop.svg" />
//           <span>Estamos em construção. Assim que terminar-mos você será o primeiro a saber</span>
//         </Alert>

//         <EmailContainer onSubmit={Validate}>
//           <FormControl error>
//             <Input
//               error={!!error.name}
//               label="Name"
//               placeholder="Digite seu name"
//               value={name}
//               onChange={handleNameChange}
//               margin="normal"
//               variant="outlined"
//               required
//               aria-describedby="name-error-text"
//             />
//             {error.name && <ErrorMessage id="name-error-text">{error.name.message}</ErrorMessage>}
//           </FormControl>
//           <FormControl error>
//             <InputMask value={whatsapp} onChange={handleWhatsappChange} mask="+55 (99) 99999-9999" maskChar=" " >
//               {() => <Input
//                 error={!!error.whatsapp}
//                 label="Whatsapp"
//                 margin="normal"
//                 variant="outlined"
//                 aria-describedby="whatsapp-error-text"
//               />
//               }</InputMask>

//             {error.whatsapp && <ErrorMessage id="whatsapp-error-text">{error.whatsapp.message}</ErrorMessage>}
//           </FormControl>
//           <FormControl error>
//             <Input
//               error={!!error.email}
//               value={email}
//               onChange={handleEmailChange}
//               label="Email"
//               placeholder="Digite seu melhor email"
//               margin="normal"
//               variant="outlined"
//               required
//               aria-describedby="email-error-text"
//             />
//             {error.email && <ErrorMessage id="email-error-text">{error.email.message}</ErrorMessage>}
//           </FormControl>
//           <Button filled radius="5px" type="submit">Me avise!</Button>
//         </EmailContainer>
//       </Container>
//     </Flex>
//   );
// };
