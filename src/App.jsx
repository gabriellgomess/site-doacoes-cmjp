import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material'

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

//IMG
import BotaoDoar from './assets/img/doe_agora_botao.png';

function App() {
  const [open, setOpen] = useState(false);
  const [isShaking, setIsShaking] = useState(true);
  useEffect(() => {
    setIsShaking(true);
    const intervalo = setInterval(() => {
      
      setIsShaking(false)
    }, 3000); 
   
    return () => clearInterval(intervalo);
  }, []);

  console.log(open);

  return (
    <ContextAPI.Provider value={{ open, setOpen }}>
    <Box className={isShaking ? 'shake' : ''} style={{ 
      position: 'fixed', 
      right: '5%', 
      bottom: '10%',
      zIndex: '9999',
      cursor: 'pointer',
    }}
     onClick={() => setOpen(true)}
    >
      <img width="150px" src={BotaoDoar} alt="" />
    </Box>
      <ModalPagamento />
      <Header />
      {/* <SubHeader /> */}
      <Box sx={{ background: '#fdeced' }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/como-apoiar" element={<ComoApoiar />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/eventos" element={<Eventos />} />
          <Route path="/doacao-por-testamento" element={<DoacaoTestamento />} />
          <Route path="/pix" element={<Pix />} />
          <Route path="/nota-fiscal-gaucha" element={<NotaFiscalGaucha />} />
          <Route path="/tampinha-legal" element={<TampinhaLegal />} />
          <Route path="/outras-formas" element={<OutrasFormas />} />
          <Route path="/lei-da-solidariedade" element={<LeiDaSolidariedade />} />
          <Route path="/doe-seu-imposto-de-renda" element={<DoeSeuImpostoDeRenda />} />
          <Route path="/bazar-amigos-da-casa" element={<BazarAmigosDaCasa />} />   
          <Route path="/campanha/:id" element={<PaginaCampanha />} />      

        </Routes>

      </Box>

      <div>
        <Footer />
      </div>

    </ContextAPI.Provider>

  );
}

export default App;