import React, { useEffect } from 'react';
import {
    Container,
    Typography,
    Box,
    Divider,

} from "@mui/material";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import FotoBanner from '../assets/img/04989.jpg';
import QRCode from '../assets/img/pix-banrisul.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'

const NotaFiscalGaucha = () => {
    useEffect(() => {
        // Rola a página para o topo
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container maxWidth="lg" sx={{ padding: { xs: '40px 15px', md: '80px 0' } }}>
            <Typography variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
                Programa Nota Fiscal Gaúcha
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: { xs: 'column-reverse', md: 'row' } }}>
                <Box sx={{
                    background: `url(${FotoBanner})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    width: { xs: '100%', md: '50%' },
                    height: { xs: '200px', md: '500px' },
                    margin: '25px auto',
                }}>
                </Box>
                <Box sx={{ padding: '20px', width: { xs: '100%', md: '50%' }, }}>
                    <Typography sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '26px' } }}>
                        Sua nota fiscal é muito importante para nós!
                    </Typography>
                    <Typography sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '26px' } }}>
                        Cadastre-se no Programa Nota Fiscal Gaúcha, colabore conosco e ainda concorra a prêmios!
                    </Typography>
                    <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '26px' } }}>
                        A Casa do Menino é uma das entidades cadastradas no <span style={{ fontWeight: 'bold' }}>Programa Nota Fiscal Gaúcha</span> e com a sua colaboração, recebe mensalmente recursos para a compra de equipamentos.
                    </Typography>
                </Box>
            </Box>


            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Através do Programa NFG já realizamos a compra de monitores e  computadores para as salas administrativas e consultórios, bem como utensílios para a cozinha da entidade.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Participe do Programa Nota Fiscal Gaúcha! Escolha a Casa do Menino e concorra a prêmios.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Como fazer?
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
                                    Entre no site da Nota Fiscal Gaúcha e faça o seu cadastro:
                                </Typography>
                                <Link to="https://nfg.sefaz.rs.gov.br" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#000' }}>
                                    <Typography sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold' }}>
                                        https://nfg.sefaz.rs.gov.br
                                    </Typography>
                                </Link>
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
                                    Na opção de escolha de entidades, no campo “Assistência Social”, escolha a Casa do Menino como instituição para ser beneficiada.
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot sx={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <FontAwesomeIcon icon={fa3} />
                                </TimelineDot>
                                <TimelineConnector />
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography sx={{ fontFamily: 'BarlowRegular' }}>
                                    Inclua o seu CPF na nota fiscal no momento da compra.
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                        <TimelineItem>
                            <TimelineSeparator>
                                <TimelineDot sx={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                    <FontAwesomeIcon icon={fa4} />
                                </TimelineDot>
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold' }}>
                                    Pronto! Você já está concorrendo a prêmios e ajudando a Casa do Menino!
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>


                    </Timeline>
                </Box>
                <Divider sx={{ display: { xs: 'block', md: 'none' } }} />

            </Box>


        </Container>
    )

}

export default NotaFiscalGaucha;