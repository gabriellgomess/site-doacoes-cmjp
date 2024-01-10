import React, { useContext, useState } from 'react';
import ContextAPI from '../ContextAPI';
import axios from "axios";
import swal from "sweetalert";
import {
  Modal,
  Box,
  Typography,
  IconButton,
  FormControl,
  RadioGroup,
  Radio,
  FormControlLabel,
  Dialog,
  AppBar,
  Toolbar,
  Button
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Slide from '@mui/material/Slide';

import DonationForm from "./DonationForm";
import LoginForm from "./LoginForm";
import LegalWarnings from "./LegalWarnings";
import ContinueButton from "./ContinueButton";
import RecurrentForm from "./RecurrentForm";
import RegisterForm from "./RegisterForm";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const ModalPagamento = () => {
  const { open, setOpen } = useContext(ContextAPI);
  const { isAuth, setIsAuth } = useContext(ContextAPI);
  // State and Handlers for Basic Information
  const [valor, setValor] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("");
  const [documentType, setDocumentType] = useState("cpf");
  const [donationType, setDonationType] = useState("single");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  // State and Handlers for Login Information
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [login, setLogin] = useState([]);
  const [showRegister, setShowRegister] = useState(false);

  const handleDocumentTypeChange = (e) => setDocumentType(e.target.value);
  const handleChange = (event) => setFormaPagamento(event.target.value);
  const handleValorChange = (event) => {
    const input = event.target.value;
    const parsedValue = parseFloat(input.replace(",", "."));

    if (parsedValue < 5) {
      swal("O valor mínimo é R$5,00");
      setValor("");
    } else {
      setValor(input);
    }
  };
  const handleCombinedChange = (event) => handleDocumentTypeChange(event);

  const handleLogin = (event) => {
    event.preventDefault();
    axios
      .post(
        "https://amigosdacasa.org.br/gerenciador-doacoes-amigosdacasa/login_site/login.php",
        {
          email: login.email,
          password: login.password,
        }
      )
      .then((response) => {
        if (response.data.success === 1) {
          setIsLoggedIn(true);
          localStorage.setItem("loginToken", response.data.token);
        } else {
          console.log("Falha no login:", response.data.message);
          swal({
            title: "Falha no login",
            text: response.data.message,
            icon: "error",
          });
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeLogin = (event) => {
    setLogin({
      ...login,
      [event.target.name]: event.target.value,
    });
  };

  const handleShowLogin = () => setShowRegister(false);

  const handleLogout = () => {
    localStorage.removeItem("loginToken"); // Remove o token de autenticação do localStorage
    setIsAuth(false); // Atualize o estado da autenticação
    // Você pode também redirecionar o usuário para a página inicial ou de login usando:
    window.location.reload();
  };

  return (
    <Dialog
      fullWidth={true}
      maxWidth='lg'
      open={open}
      onClose={handleClose}
    >
      <Box
        sx={{
          width: '100%',
          height: "100vh",
          bgcolor: "background.paper",
          p: 2,
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <FormControl component="fieldset">
            <RadioGroup
              row
              aria-label="donationType"
              name="donationType"
              value={donationType}
              onChange={(event) => setDonationType(event.target.value)}
            >
              <FormControlLabel
                value="single"
                control={<Radio />}
                label={<Typography color="textPrimary">Doação Única</Typography>}
              />
              <FormControlLabel
                value="recurring"
                control={<Radio />}
                label={
                  <Typography color="textPrimary">Doação Recorrente</Typography>
                }
              />
            </RadioGroup>
          </FormControl>

          <Button onClick={handleLogout} variant="outlined">
            Sair
          </Button>

        </Box>

        <Typography
          sx={{
            padding: "0px 20px",
            display: "flex",
            justifyContent: "center",
          }}
          gutterBottom
          variant="h4"
          color="primary"
          fontFamily="Staatliches"
        >
          Faça aqui sua contribuição
        </Typography>
        {donationType === "single" ? (
          <DonationForm
            documentType={documentType}
            handleCombinedChange={handleCombinedChange}
            valor={valor}
            handleValorChange={handleValorChange}
            formaPagamento={formaPagamento}
            handleChange={handleChange}

          />
        ) : isLoggedIn ? (
          <RecurrentForm />
        ) : showRegister ? (
          <RegisterForm handleShowLogin={handleShowLogin} />
        ) : (
          <LoginForm
            handleLogin={handleLogin}
            handleChangeLogin={handleChangeLogin}
            handleShowRegister={() => setShowRegister(true)} // pass this new prop to LoginForm
          />
        )}

        <LegalWarnings />

        <ContinueButton />
      </Box>
    </Dialog>
  );
};

export default ModalPagamento;
