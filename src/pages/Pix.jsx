import React, { useEffect } from 'react';
import {
    Container,
    Typography,
    Box,
    Divider,

} from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import FotoBanner from '../assets/img/05092.jpg';
import QRCode from '../assets/img/pix-banrisul.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3 } from '@fortawesome/free-solid-svg-icons';

const Pix = () => {
    useEffect(() => {
        // Rola a página para o topo
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container maxWidth="lg" sx={{ padding: { xs: '40px 15px', md: '80px 0' } }}>
            <Typography variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
                DOAÇÃO POR PIX
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
                Contribua para os projetos da Casa do Menino com uma doação pelo PIX . Os valores são destinados para a manutenção do atendimento de saúde de alta e média complexidade realizado na entidade.
            </Typography>
            <Box sx={{
                background: `url(${FotoBanner})`,
                backgroundSize: 'cover',
                width: { xs: '100%', md: '80%' },
                height: { xs: '200px', md: '500px' },
                margin: '25px auto',
            }}></Box>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Você pode colaborar com a nossa missão através do <span style={{ fontWeight: 'bold' }}>PIX - doação segura e sem custos</span>, equivalente a uma transferência bancária.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, fontWeight: 'bold' }}>
                ATENÇÃO: Esta modalidade de doação não é dedutível no Imposto de Renda.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Faça um PIX pelo app do seu banco, apontando a câmera no QRcode ou usando a chave.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Veja o passo a passo:
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'flex-start', flexDirection: { xs: 'column', md: 'row' } }}>
                <Box sx={{ flexGrow: '1' }}>
                    <Timeline>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot sx={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <FontAwesomeIcon icon={fa1} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography sx={{ fontFamily: 'BarlowRegular' }}>
                                    Insira nossa chave PIX pix@casadomenino.org.br ou faça a leitura do QRCode, através do app de seu banco:
                                </Typography>

                                <img width={150} src={QRCode} alt="" />
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot sx={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <FontAwesomeIcon icon={fa2} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography sx={{ fontFamily: 'BarlowRegular' }}>
                                    Escolha o valor desejado
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot sx={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <FontAwesomeIcon icon={fa3} />
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography sx={{ fontFamily: 'BarlowRegular' }}>
                                    Pronto! Sua doação está efetivada
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Box>
                <Divider sx={{ display: { xs: 'block', md: 'none' } }} />
                <Box sx={{ flexGrow: '1' }}>
                    <Timeline>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot sx={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <FontAwesomeIcon icon={fa1} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography sx={{ fontFamily: 'BarlowRegular' }}>
                                    Insira nossa chave PIX (CNPJ) 89621767000141 ou faça a leitura do QRCode, através do app de seu banco:
                                </Typography>

                                <img width={150} src={QRCode} alt="" />
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot sx={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <FontAwesomeIcon icon={fa2} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography sx={{ fontFamily: 'BarlowRegular' }}>
                                    Escolha o valor desejado
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot sx={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <FontAwesomeIcon icon={fa3} />
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography sx={{ fontFamily: 'BarlowRegular' }}>
                                    Pronto! Sua doação está efetivada
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    </Timeline>
                </Box>
            </Box>


        </Container>
    )

}

export default Pix;