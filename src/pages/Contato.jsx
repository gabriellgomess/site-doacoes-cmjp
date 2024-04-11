import { Container, Box, Typography, Card } from '@mui/material';

import Map from '../components/Map';

import LogoCMJP from '../assets/img/logo_horizontal_cmjp.png';
import LogoADC from '../assets/img/ADC_logotipo_vertical.png';
import Face from '../assets/img/face.png';
import Insta from '../assets/img/insta.png';
import Youtube from '../assets/img/youtube.png';
import Whats from '../assets/img/whats.png';
import ImgContato from '../assets/img/contato.png';

const Contato = () => {
    return (
        <div>
            <Container maxWidth='lg' sx={{ padding: '70px 0' }}>
                <Box sx={{ minHeight: '600px' }}>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' }, alignItems: 'center', gap: '60px' }}>
                        {/* <Box sx={{ display: 'flex', flexDirection: { xs: 'column', lg: 'row' }, gap: '60px' }}>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img width={150} src={LogoCMJP} alt="" />
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <img width={150} src={LogoADC} alt="" />
                            </Box>
                        </Box> */}

                        <Box sx={{ marginTop: { xs: '80px', lg: '0' }, flexGrow: '1', height: '120px', display: 'flex', gap: '20px', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <img style={{ margin: '0 0 0 190px' }} height={80} src={ImgContato} alt="" />
                            <Typography fontSize={24} fontFamily="Staatliches" className='texto_vermelho'>
                                (51) 3352-9589
                            </Typography>
                            <a href="http://wa.me/5551995728124" target="_blank" rel="noopener noreferrer">
                                <Typography fontSize={24} fontFamily="Staatliches" sx={{ display: 'flex', alignItems: 'center', gap: '8px' }} className='texto_verde_escuro'>
                                    <img width={20} src={Whats} alt="" />(51) 99572-8124
                                </Typography>
                            </a>
                            <a href="mailto:doar@casadomenino.org.br">
                                <Typography fontSize={18} fontFamily="Staatliches" className='texto_vermelho'>
                                    doar@casadomenino.org.br
                                </Typography>
                            </a>
                            <a href="https://www.casadomenino.org.br/" target="_blank" rel="noopener noreferrer">
                                <Typography fontSize={18} fontFamily="Staatliches" className='texto_verde_escuro'>
                                    casadomenino.org.br
                                </Typography>
                            </a>
                            <Box sx={{ width: '100%', display: 'flex', gap: '5px', justifyContent: 'center' }}>
                                <a href="https://www.facebook.com/CasadeSaudeMeninoJesusdePraga" target="_blank" rel="noopener noreferrer">
                                    <img width={30} src={Face} alt="Facebook" />
                                </a>
                                <a href="https://www.youtube.com/@CMJP2010" target="_blank" rel="noopener noreferrer">
                                    <img width={30} src={Youtube} alt="Youtube" />
                                </a>
                                <a href="https://www.instagram.com/casadesaudemeninojesusdepraga/" target="_blank" rel="noopener noreferrer">
                                    <img width={30} src={Insta} alt="Instagram" />
                                </a>
                            </Box>

                        </Box>
                        <Box sx={{ marginTop: { xs: '80px', lg: '0' } }}>
                            <Typography fontSize={24} fontFamily="Staatliches" className='texto_vermelho'>
                                Localização
                            </Typography>
                            <Card sx={{ width: '400px', height: '300px', borderRadius: '5px', overflow: 'hidden' }}>
                                <Map />
                            </Card>
                            <Box sx={{ width: '100%', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                <Typography fontFamily="BarlowRegular" sx={{ textAlign: 'center' }} className='texto_vermelho' fontWeight='bold'>
                                    Rua Nelson Zang, 420 - CEP 91530-350 - Porto Alegre - RS
                                </Typography>
                            </Box>

                        </Box>



                    </Box>

                </Box>
            </Container>


        </div>
    )
}

export default Contato;