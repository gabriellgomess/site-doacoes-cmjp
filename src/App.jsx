import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material'
import { createTheme } from '@mui/material/styles';

import ContextAPI from './components/ContextAPI';

import './App.css';

// COMPONENTS
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';
// import DialogDonation from './components/ModalDoacao';
import ModalPagamento from './components/ModalPagamento';

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

//IMG
import BotaoDoar from './assets/img/doe_agora_botao2.png';
import WhatsAppBtn from './assets/img/whatsapp_btn.png';

function App() {
  const [open, setOpen] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [isShaking, setIsShaking] = useState(true);

  const theme = createTheme();

  useEffect(() => {
    setIsShaking(true);
    const intervalo = setInterval(() => {

      setIsShaking(false)
    }, 3000);

    return () => clearInterval(intervalo);
  }, []);

  console.log(open);

  return (
    <ContextAPI.Provider value={{ open, setOpen, isAuth, setIsAuth }}>
      <Box className={isShaking ? 'shake' : ''} style={{
        position: 'fixed',
        right: '3%',
        bottom: '8%',
        zIndex: '9999',
        cursor: 'pointer',
      }}
        onClick={() => setOpen(true)}
      >
        <Box sx={{width: {xs: '50px', md: '80px'},}}>
          <img width="100%" src={BotaoDoar} alt="" />
        </Box>
        
      </Box>
      <a href="https://wa.me/5551995728124" target='blank'>
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
      </a>

      <ModalPagamento />
      <Header />
      {/* <SubHeader /> */}
      <Box sx={{ background: '#fdeced' }}>

        <Routes>
          <Route path={`${import.meta.env.VITE_URL}`} element={<Home />} />
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

        </Routes>

      </Box>

      <div>
        <Footer />
      </div>

    </ContextAPI.Provider>

  );
}

export default App;