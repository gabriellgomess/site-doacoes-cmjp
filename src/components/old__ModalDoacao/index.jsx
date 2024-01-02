import React, { useContext, useState } from 'react';
import ContextAPI from '../ContextAPI';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import FormControl from '@mui/material/FormControl';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import Switch from '@mui/material/Switch';
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';

import LoginForm from './LoginForm';


export default function DialogDonation() {
  const { open, setOpen } = useContext(ContextAPI);
  const [donationType, setDonationType] = useState("single");
  const [valor, setValor] = useState("");
  const [formaPagamento, setFormaPagamento] = useState("");
  const [documentType, setDocumentType] = useState("cpf");

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



  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

 

  const handleFullWidthChange = (event) => {
    setFullWidth(event.target.checked);
  };

  console.log(donationType);

  return (
    <React.Fragment>
      <Dialog
        fullWidth={true}
        maxWidth='lg'
        open={open}
        onClose={handleClose}
      >
        <DialogTitle>Title</DialogTitle>
        <DialogContent>
          <DialogContentText>
            text text text
          </DialogContentText>
          <Box
            noValidate
            component="form"
            sx={{
              display: 'flex',
              flexDirection: 'column',
              m: 'auto',
              width: '100%',
              
            }}
          >
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

            <Typography
                sx={{
                    padding: "0px 20px",
                    display: "flex",
                    justifyContent: "center",
                }}
                gutterBottom
                variant="h4"
                color="primary"
                >
                Faça aqui sua contribuição
                </Typography>
                {donationType === "single" ? (
                <p>Doação</p>
                ) : isLoggedIn ? (
                <p>Recorrente</p>
                ) : showRegister ? (
                  <p>Register</p>
                ) : (
                  <LoginForm />
                )}
                    
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Fechar</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
