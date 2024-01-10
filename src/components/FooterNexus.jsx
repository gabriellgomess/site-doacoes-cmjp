import React from 'react';
import { Container, Box, Typography } from '@mui/material';
import LogoNexus from '../assets/img/logo_nexus.png';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faGlobe, faEnvelope } from "@fortawesome/free-solid-svg-icons";


function FooterNexus() {
    return (
        <footer style={{ background: '#60aaa2', width: '100%', position: 'absolute', bottom: '0', padding: '20px 0' }}>
            <Container maxWidth='lg' sx={{ display: 'flex', alignItems: 'center', flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: '1', gap: '10px' }}>
                    <Box sx={{ width: '50px' }}>
                        <img width='100%' src={LogoNexus} alt="" />
                    </Box>
                    <Typography fontFamily="BarlowRegular" sx={{ textAlign: 'center' }}>
                        Desenvolvido por Nexus Tech
                    </Typography>
                </Box>
                <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'start', flexGrow: '1' }}>
                    <a href="https://www.instagram.com/nexustech_oficial/" target="_blank" rel="noopener noreferrer">
                        <Typography fontFamily='BarlowRegular' fontSize='14px' color='#fff'><FontAwesomeIcon icon={faInstagram} /> @nexustech_oficial</Typography>
                    </a>
                    <a href="http://nexustech.net.br" target="_blank" rel="noopener noreferrer">
                        <Typography fontFamily='BarlowRegular' fontSize='14px' color='#fff'><FontAwesomeIcon icon={faGlobe} /> nexustech.net.br</Typography>
                    </a>
                    <a href="mailto:contato@nexustech.net.br">
                        <Typography fontFamily='BarlowRegular' fontSize='14px' color='#fff'><FontAwesomeIcon icon={faEnvelope} /> contato@nexustech.net.br</Typography>
                    </a>
                </Box>
            </Container>
            <Container maxWidth='lg' sx={{ borderTop: '1px solid grey', marginTop: '10px', paddingTop: '10px' }}>
                <Typography fontFamily='BarlowRegular' fontSize='12px' sx={{ textAlign: 'center', color: '' }}>
                    © {new Date().getFullYear()} - Nexus Tech - CNPJ: 44.049.457/0001-66
                </Typography>
            </Container>
        </footer>
    );
}

export default FooterNexus;