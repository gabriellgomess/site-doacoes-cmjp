import React, { useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';

const DoacaoTestamento = () => {
    useEffect(() => {
        // Rola a página para o topo
        window.scrollTo(0, 0);
    }, []);

    return (
        <Container maxWidth="lg" sx={{ padding: { xs: '40px 15px', md: '80px 10px' } }}>
            <Typography variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
                Doação por Testamento
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
                Inclua a Casa de Saúde Menino Jesus de Praga no seu testamento e direcione recursos e bem móveis e imóveis para a entidade.
                Saiba mais:
            </Typography>
            <Typography sx={{ marginTop: '15px', fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                A manifestação de última vontade deve ser registrada no Tabelionato de Notas da sua região e informado ao Departamento Jurídico da Casa através do telefone 51 2165 1911 ou e-mail testamento@casadomenino.org.br, para os devidos trâmites legais.
            </Typography>
            <Typography sx={{ marginTop: '15px', fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Beneficiário – Casa do Menino Jesus de Praga
            </Typography>
            <Typography sx={{ marginTop: '15px', fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                CNPJ: 89.621.767.0001-41
            </Typography>
            <Typography sx={{ margin: '15px 0 50px 0', fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Rua Nelson Zang, 420, Bairro Intercap, Porto Alegre/RS
            </Typography>
            <Typography sx={{ margin: '15px 0 50px 0', fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                CEP: 91530-350
            </Typography>
        </Container>
    );
}

export default DoacaoTestamento;