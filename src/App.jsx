import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material'

import './App.css';

// COMPONENTS
import Header from './components/Header';
import SubHeader from './components/SubHeader';
import Footer from './components/Footer';
import FooterNexus from './components/FooterNexus';

// PAGES
import Home from './pages/Home';
import Sobre from './pages/Sobre';
import ComoApoiar from './pages/ComoApoiar';
import Contato from './pages/Contato';

function App() {
  return (
    <>
      <Header />
      <Container maxWidth="lg" sx={{ minHeight: '90vh' }}>
        <SubHeader />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sobre" element={<Sobre />} />
          <Route path="/como-apoiar" element={<ComoApoiar />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </Container>
      <div>
        <Footer />
        <FooterNexus />
      </div>

    </>

  );
}

export default App;