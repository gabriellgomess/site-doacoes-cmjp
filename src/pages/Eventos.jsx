import React, { useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import FotoBanner from '../assets/img/04521.jpg';
import QRPix from '../assets/img/pix-banrisul.jpg';

const Eventos = () => {
    useEffect(() => {
        // Rola a página para o topo
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container maxWidth="lg" sx={{ padding: { xs: '40px 15px', md: '80px 0' } }}>
            <Typography variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
                Eventos
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
                Você pode realizar eventos (particulares ou empresariais) e direcionar os recursos para a Casa do Menino!
            </Typography>
            <Box sx={{
                background: `url(${FotoBanner})`,
                backgroundSize: 'cover',
                width: { xs: '100%', md: '80%' },
                height: { xs: '200px', md: '500px' },
                margin: '25px auto',
            }}></Box>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Uma das formas de apoiar a Casa do Menino é com a realização de eventos como aniversários, eventos corporativos, palestras, com renda direcionada para a entidade. Os recursos podem ser financeiros ou de necessidades mais urgentes (solicite a lista de itens para a Casa).
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Faça contato com a gente, para orientarmos a melhor forma de promover seu evento em benefício da Casa.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Você pode divulgar a nossa chave PIX para arrecadação de recursos para a instituição: <span style={{ fontWeight: 'bold' }}>pix@casadomenino.org.br </span>
            </Typography>
            <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', padding: '20px 0' }}>
                <img src={QRPix} alt="" />
            </Box>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, marginBottom: '30px' }}>
                Mais informações sobre como realizar um evento em benefício da Casa, entre em contato: <span style={{ fontWeight: 'bold' }}>doar@casadomenino.org.br</span>
            </Typography>
        </Container>
    )

}

export default Eventos;