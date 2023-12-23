import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container, Box } from '@mui/material'

import './App.css';

// COMPONENTS
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';

// PAGES
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import ComoApoiar from './pages/ComoApoiar';
import Contato from './pages/Contato';

//IMG
import BotaoDoar from './assets/img/doe_agora_botao.png';

function App() {
  const [isShaking, setIsShaking] = useState(true);
  useEffect(() => {
    setIsShaking(true);
    const intervalo = setInterval(() => {
      
      setIsShaking(false)
    }, 3000); 
   
    return () => clearInterval(intervalo);
  }, []);

  return (
    <>
    <Box className={isShaking ? 'shake' : ''} style={{ 
      position: 'fixed', 
      right: '5%', 
      bottom: '10%',
      zIndex: '9999',
    }}>
      <img width="150px" src={BotaoDoar} alt="" />
    </Box>
      <Header />
      <SubHeader />
      <Box sx={{ background: '#fdeced' }}>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/como-apoiar" element={<ComoApoiar />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>

      </Box>

      <div>
        <Footer />
      </div>

    </>

  );
}

export default App;