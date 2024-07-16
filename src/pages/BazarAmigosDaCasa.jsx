import React, { useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import FotoBanner from '../assets/img/04521.jpg';
import LogoBazar from '../assets/img/bazar_logo.png';
import BazarBanner from '../assets/img/bazar_banner.jpg';
import BazarBanner2 from '../assets/img/bazar_banner2.jpg';


const BazarAmigosDaCasa = () => {
    useEffect(() => {
        // Rola a página para o topo
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container maxWidth="lg" sx={{ padding: { xs: '40px 15px', md: '80px 0' } }}>
            <Box sx={{ width: { xs: '100%', md: '60%' }, margin: '0 auto' }}>
                <img width='100%' src={LogoBazar} alt="" />
            </Box>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
                O Bazar Amigos da Casa é uma importante fonte de recursos da instituição. Apoie este projeto com a compra de roupas, calçados e acessórios.
            </Typography>
            <Box sx={{
                background: `url(${BazarBanner})`,
                backgroundSize: 'cover',
                width: { xs: '100%', md: '80%' },
                height: { xs: '200px', md: '500px' },
                margin: '25px auto',
            }}></Box>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, margin: '20px 0' }}>
                O <span style={{ fontWeight: 'bold' }}>Bazar Amigos da Casa</span> funciona todas as quartas-feiras e no primeiro sábado de cada mês. Oferecemos peças novas – roupas, calçados, acessórios - com preço de Bazar.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, margin: '20px 0' }}>
                Todo o valor da venda das peças é direcionado para a manutenção da entidade. O Bazar passou por uma grande reforma e hoje tem o conceito de moda circular, com propósito.
            </Typography>
            <Box sx={{
                background: `url(${BazarBanner2})`,
                backgroundSize: 'cover',
                width: { xs: '100%', md: '80%' },
                height: { xs: '200px', md: '500px' },
                margin: '25px auto',
            }}></Box>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, margin: '20px 0' }}>
                Estamos sempre em busca de novos apoiadores, que queiram colaborar com peças novas para o espaço.
            </Typography>

            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '18px', md: '22px' }, fontWeight: 'bold', margin: '20px 0' }}>
                Apoie um projeto que impacta de forma positiva o meio ambiente e promove a responsabilidade social!
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Esperamos o seu contato <span style={{ fontWeight: 'bold' }}>bazar@casadomenino.org.br</span>
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Siga o Bazar:  <span style={{ fontWeight: 'bold' }} className='texto_vermelho'>@bazaramigosdacasa </span>
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, fontWeight: 'bold' }}>
                Conheça a loja:
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Rua Nelson Zang, 420 - Intercap  - Porto Alegre - RS
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, fontWeight: 'bold' }}>
                Funcionamento:
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, marginBottom: '30px' }}>
                Quartas-feiras 13h às 17:00 | Primeiro sábado do mês: 10h às 15h

            </Typography>
        </Container>
    )

}

export default BazarAmigosDaCasa;