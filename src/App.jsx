import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material'
import { createTheme } from '@mui/material/styles';
import { FloatingWhatsApp } from 'react-floating-whatsapp'

import ContextAPI from './components/ContextAPI';

import './App.css';

// COMPONENTS
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';
// import DialogDonation from './components/ModalDoacao';
import ModalPagamento from './components/ModalPagamento';
import axios from 'axios';


// PAGES
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import ComoApoiar from './pages/ComoApoiar';
import Contato from './pages/Contato';
import Eventos from './pages/Eventos';
import DoacaoTestamento from './pages/DoacaoTestamento';
import Pix from './pages/Pix';
import NotaFiscalGaucha from './pages/NotaFiscalGaucha';
import TampinhaLegal from './pages/TampinhaLegal';
import OutrasFormas from './pages/OutrasFormas';
import LeiDaSolidariedade from './pages/LeiDaSolidariedade';
import DoeSeuImpostoDeRenda from './pages/DoeSeuImpostoDeRenda';
import BazarAmigosDaCasa from './pages/BazarAmigosDaCasa';
import PaginaCampanha from './pages/PaginaCampanha';
import Admin from './pages/Admin';
import Apadrinhamento from './pages/Apadrinhamento';
import TrabalhoVoluntario from './pages/TrabalhoVoluntario';
import SerDoador from './pages/SerDoador'

import { useMediaQuery } from 'react-responsive';


//IMG
import BotaoDoar from './assets/img/doe_agora_botao2.png';
import WhatsAppBtn from './assets/img/whatsapp_btn.png';
import logoWhats from './assets/img/profile_whats.png';

function App() {
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isShaking, setIsShaking] = useState(true);
  const [slides, setSlides] = useState([]);
  const [triggerAnimation, setTriggerAnimation] = useState(true);

  // Controle de animação
  useEffect(() => {
    const interval = setInterval(() => {
      setTriggerAnimation(prev => !prev); // Toggle para reiniciar a animação
    }, 5000); // Intervalo de 5 segundos

    return () => clearInterval(interval);
  }, []);

  const theme = createTheme();

  useEffect(() => {
    setIsShaking(true);
    const intervalo = setInterval(() => {

      setIsShaking(false)
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  useEffect(() => {
    axios.get('https://srv493870.hstgr.cloud/api/campanhas?populate=*')
      .then((response) => {
        setSlides(response.data.data);
        console.log(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const isMobile = useMediaQuery({ maxWidth: 767 });


  return (
    <ContextAPI.Provider value={{ open, setOpen, isAuth, setIsAuth }}>
      <Box className={triggerAnimation ? 'jello-vertical' : ''}
        onClick={() => setOpen(true)} style={{
          position: 'fixed',
          left: isMobile ? '60%' : '2%',
          bottom: '3.5%',
          zIndex: '900',
          cursor: 'pointer',
          width: '60px',
          height: '60px'
        }}
      >
        <img width="100%" src={BotaoDoar} alt="" />
      </Box>
      {/* <a href="https://wa.me/5551995728124" target='blank'>
        <Box style={{
          position: 'fixed',
          left: '3%',
          bottom: '8%',
          zIndex: '9999',
          
        }}
        >
          <Box sx={{width: {xs: '50px', md: '80px'},}}>
            <img width="100%" src={WhatsAppBtn} alt="" />
          </Box>
          
        </Box>
      </a> */}
      <FloatingWhatsApp
        phoneNumber="+5551995728124"
        accountName="Amigos da Casa"
        avatar={logoWhats}
        chatMessage="Olá! Que bom ter você por aqui!"
        darkMode={false}
        placeholder="Digite sua mensagem..."
        showPopup={true}
        statusMessage="Online"
        notification={false}
        allowClickAway={true}
        allowEsc={true}
      />

      <ModalPagamento style={{zIndex: 999}} />
      <Header slides={slides} />
      {/* <SubHeader /> */}
      <Box sx={{ background: '#fdeced', paddingBottom: '50px' }}>

        <Routes>
          <Route path={`${import.meta.env.VITE_URL}`} element={<Home slides={slides} />} />
          <Route path={`${import.meta.env.VITE_URL}sobre`} element={<Sobre />} />
          <Route path={`${import.meta.env.VITE_URL}como-apoiar`} element={<ComoApoiar />} />
          <Route path={`${import.meta.env.VITE_URL}contato`} element={<Contato />} />
          <Route path={`${import.meta.env.VITE_URL}eventos`} element={<Eventos />} />
          <Route path={`${import.meta.env.VITE_URL}doacao-por-testamento`} element={<DoacaoTestamento />} />
          <Route path={`${import.meta.env.VITE_URL}pix`} element={<Pix />} />
          <Route path={`${import.meta.env.VITE_URL}nota-fiscal-gaucha`} element={<NotaFiscalGaucha />} />
          <Route path={`${import.meta.env.VITE_URL}tampinha-legal`} element={<TampinhaLegal />} />
          <Route path={`${import.meta.env.VITE_URL}outras-formas`} element={<OutrasFormas />} />
          <Route path={`${import.meta.env.VITE_URL}lei-da-solidariedade`} element={<LeiDaSolidariedade />} />
          <Route path={`${import.meta.env.VITE_URL}doe-seu-imposto-de-renda`} element={<DoeSeuImpostoDeRenda />} />
          <Route path={`${import.meta.env.VITE_URL}bazar-amigos-da-casa`} element={<BazarAmigosDaCasa />} />
          <Route path={`${import.meta.env.VITE_URL}campanha/:id`} element={<PaginaCampanha />} />
          <Route path={`${import.meta.env.VITE_URL}admin`} element={<Admin />} />
          <Route path={`${import.meta.env.VITE_URL}apadrinhamento`} element={<Apadrinhamento />} />
          <Route path={`${import.meta.env.VITE_URL}trabalho-voluntario`} element={<TrabalhoVoluntario />} />
          <Route path={`${import.meta.env.VITE_URL}ser-doador`} element={<SerDoador />} />

        </Routes>

      </Box>

      <div>
        <Footer />
      </div>

    </ContextAPI.Provider>

  );
}

export default App;