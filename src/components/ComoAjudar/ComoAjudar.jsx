import { Box, Typography, Container } from '@mui/material';
import BarraOndas from '../../assets/img/barra_ondas.png';
import { Link } from 'react-router-dom';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import Img1 from '../../assets/img/eventos.png';
import Img2 from '../../assets/img/doacao_testamento.png';
import Img3 from '../../assets/img/bazar.png';
import BtnSaibaMais from '../../assets/img/saiba_mais.png'

import './ComoAjudar.css';

const slides = [
    {
        img: Img1,
        title: 'Eventos',
        text: 'Você pode realizar eventos e direcionar recursos para a Casa do Menino!',
        link: '/eventos'
    },
    {
        img: Img2,
        title: 'Doe seu imposto de renda',
        text: 'Deduza doações do Imposto de Renda pelo programa Funcriança, aberto a pessoas físicas e jurídicas.',
        link: '/doe-seu-imposto-de-renda'
    },
    {
        img: Img3,
        title: 'Bazar Amigos da Casa',
        text: 'O Bazar Amigos da Casa é uma importante fonte de recurso da instituição. Apoie com a doação de roupas, calçados e acessórios novos para a nossa loja.',
        link: '/bazar-amigos-da-casa'
    }
];

const ComoAjudar = () => {

    return (
        <Box>

          <Box sx={{ background: `url(${BarraOndas})`, height: '295px', minHeight: '295px', backgroundSize: 'contain', backgroundRepeat: 'repeat-x'}} >
            <Container sx={{pt: '30px', display: 'flex', justifyContent: 'center'}}>
            <Box sx={{ width: { xs: '100%', md: '70%', lg: '900px' } }}>
            <Swiper
                spaceBetween={10}
                slidesPerView={1}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                loop={true}
                breakpoints={{
                    640: {
                        slidesPerView: 2,
                    },
                    768: {
                        slidesPerView: 2,
                    },
                    1200: {
                        slidesPerView: 3,
                    }
                }}
                navigation = {true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
                className='swiper-comoajudar'
            >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Box 
                            sx={{ 
                                backgroundImage: `url(${slide.img})`,                                  
                                backgroundSize: 'cover', 
                                backgroundPositionY: '40%', 
                                width: '230px',
                                aspectRatio: '2/3.15',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'start',
                                alignItems: 'center',
                                margin: '10px auto 40px auto', 
                                }}
                            >
                                <Box sx={{width: '80%', marginTop:'180px' }}>
                                <Typography 
                                sx={{
                                    color: '#fff', 
                                    fontFamily: "Staatliches",
                                    fontSize: '24px',
                                    lineHeight: '26px',
                                    textAlign: 'center',
                                    }}
                                >
                                    {slide.title}
                                </Typography>
                                <Typography 
                                sx={{
                                    color: '#fff', 
                                    fontFamily: "BarlowLight",
                                    fontSize: '12px',
                                    lineHeight: '16px',
                                    textAlign: 'center',
                                    }}
                                >
                                    {slide.text}
                                </Typography>
                                </Box>
                               <Link style={{position: 'absolute', bottom: '30px'}} to={slide.link}>
                                <img width="130px" src={BtnSaibaMais} alt="" />
                                 </Link>
                            
                            </Box>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </Box>
            </Container>
        </Box>
        <Box sx={{background: '#fff', height: '200px'}}>
        </Box>  
        </Box>
        
        
        
        



    );
}

export default ComoAjudar;