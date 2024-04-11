import React, { useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import FotoBanner from '../assets/img/04461.jpg';
import QRPix from '../assets/img/pix-banrisul.jpg';
import { Link } from 'react-router-dom';

const LeiDaSolidariedade = () => {
    useEffect(() => {
        // Rola a página para o topo
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container maxWidth="lg" sx={{ padding: { xs: '40px 15px', md: '80px 0' } }}>
            <Typography variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
                Lei da Solidariedade
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
                A sua empresa pode colaborar conosco através dos incentivos fiscais, via Lei da Solidariedade.
            </Typography>
            <Box sx={{
                background: `url(${FotoBanner})`,
                backgroundSize: 'cover',
                width: { xs: '100%', md: '80%' },
                height: { xs: '200px', md: '500px' },
                margin: '25px auto',
            }}></Box>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                A <span style={{ fontWeight: 'bold' }}>Lei da Solidariedade</span> oportuniza o investimento em projetos sociais com incentivos fiscais por meio do Imposto de Circulação de Mercadorias - ICMs.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                É um dos programas do Pró-Social da Secretaria Estadual de Assistência Social.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                A empresa interessada em participar do programa faz o cadastro na opção "Empresa Financiadora", no site do Pró Social: <Link to="https://prosocial.rs.gov.br">www.prosocial.rs.gov.br</Link>.
            </Typography>
           
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, margin: '20px 0' }}>
                Gostaria de colaborar com este projeto? Empresas interessadas podem fazer contato que explicaremos o funcionamento do processo de doação.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, fontWeight: 'bold', marginBottom: '40px' }}>
                consultoria@casadomenino.org.br
            </Typography>
        </Container>
    )

}

export default LeiDaSolidariedade;