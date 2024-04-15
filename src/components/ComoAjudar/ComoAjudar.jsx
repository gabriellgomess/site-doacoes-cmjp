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
import Img4 from '../../assets/img/pix.png';
import Img5 from '../../assets/img/nfg.png';
import Img6 from '../../assets/img/tampinha-legal.png';
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
    },
    {
        img: Img4,
        title: 'Doação por PIX',
        text: 'Contribua para os projetos da Casa do Menino com uma doação pelo PIX . Os valores são destinados para a manutenção do atendimento de saúde de alta e média complexidade realizado na entidade.',
        link: '/pix'
    },
    {
        img: Img5,
        title: 'Nota Fiscal Gaúcha',
        text: 'A Casa do Menino é uma das entidades cadastradas no Programa Nota Fiscal Gaúcha e com a sua colaboração, recebe mensalmente recursos para a compra de equipamentos.',
        link: '/nota-fiscal-gaucha'
    },
    {
        img: Img6,
        title: 'Tampinha Legal',
        text: 'O Tampinha Legal é o maior programa socioambiental de caráter educativo em economia circular de iniciativa da indústria de transformação do plástico das Américas.',
        link: '/tampinha-legal'
    },

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
                                width: '235px',
                                aspectRatio: '1.9/2.98',
                                display: 'flex',
                                flexDirection: 'column',
                                justifyContent: 'start',
                                alignItems: 'center',
                                margin: '10px auto 40px auto',
                                }}
                            >
                                <Box sx={{width: '80%', marginTop:'180px'}}>
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
                                    fontSize: '13px',
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