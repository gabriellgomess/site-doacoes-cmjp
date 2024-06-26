import { Container, Box, Typography } from '@mui/material';
import BackgroundWave from '../assets/img/barra_ondas.png';
import LogoCMJP from '../assets/img/logo_horizontal_color.png';
import LogoADC from '../assets/img/ADC_logotipo_horizontal.png';
import Face from '../assets/img/face.png';
import Insta from '../assets/img/insta.png';
import Youtube from '../assets/img/youtube.png';
import Whats from '../assets/img/whats.png';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons';

import FooterNexus from './FooterNexus';

function Footer() {
    return (
        <Box sx={{ background: `url(${BackgroundWave})`, minHeight: { xs: '630px', md: '350px' }, backgroundSize: 'contain', backgroundRepeat: 'repeat-x', marginTop: '-65px', paddingTop: '20px', position: 'relative' }}>
            <Container maxWidth='lg'>
                <Box>
                    <Box sx={{ display: 'flex', flexDirection: { xs: 'column', md: 'row' } }}>
                        <Box sx={{ flexGrow: '1', height: '120px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                            <img width={250} src={LogoCMJP} alt="" />
                        </Box>
                        <Box sx={{ flexGrow: '1', height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
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
                        </Box>
                        <Box sx={{ flexGrow: '1', height: '120px', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                            <Box sx={{ width: 200 }}>
                                <img width='100%' src={LogoADC} alt="" />
                                <Box sx={{ width: '100%', display: 'flex', gap: '8px', justifyContent: 'end', alignItems: 'center' }}>
                                    <a href="https://www.facebook.com/CasadeSaudeMeninoJesusdePraga" target="_blank" rel="noopener noreferrer">
                                        <img width={30} src={Face} alt="Facebook" />
                                    </a>
                                    <a href="https://www.youtube.com/@CMJP2010" target="_blank" rel="noopener noreferrer">
                                        <img width={30} src={Youtube} alt="Youtube" />
                                    </a>
                                    <a href=" https://www.instagram.com/casadesaudemeninojesusdepraga/" target="_blank" rel="noopener noreferrer">
                                        <img width={30} src={Insta} alt="Instagram" />
                                    </a>
                                    <a style={{marginBottom: '4px'}} href="https://www.linkedin.com/company/casadesaudemeninojesusdepraga" target="_blank" rel="noopener noreferrer">
                                        <div style={{background: '#08695e', width: 30, height: 30, display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '7px'}}>
                                          <FontAwesomeIcon style={{color: '#fff', fontSize: '23px'}} icon={faLinkedinIn} />  
                                        </div>                                        
                                    </a>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box sx={{ width: '100%', height: '40px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <Typography fontFamily="BarlowRegular" sx={{ textAlign: 'center' }} className='texto_vermelho' fontWeight='bold'>
                            Rua Nelson Zang, 420 - CEP 91530-350 - Porto Alegre - RS
                        </Typography>
                    </Box>
                </Box>
            </Container>
            <FooterNexus />
        </Box>
    );
}

export default Footer;