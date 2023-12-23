import React, { useState, useEffect } from 'react';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';

import axios from 'axios';

import BtnSaibaMais from '../../assets/img/saiba_mais.png';
import BtnDoeAgora from '../../assets/img/doe_agora_botao.png';

import './Campanhas.css';

const Campanhas = () => {

    const [slides, setSlides] = useState([]);

    useEffect(() => {
        axios.get('https://strapi-production-c201.up.railway.app/api/campanhas?populate=*')
            .then((response) => {
                setSlides(response.data.data);
            })
            .catch((error) => {
                console.log(error);
            });

    }, []);
    


    return (
        <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', paddingTop: '50px' }}>

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
                        slidesPerView: 3,
                    }
                }}
                navigation = {true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination]}
            >
                    {slides?.map((slide, index) => (
                        <SwiperSlide key={index}>
                            <Box
                                sx={{
                                    maxWidth: '250px',
                                    width: '100%',
                                    height: '430px',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    justifyContent: 'start',
                                    alignItems: 'center',
                                    margin: '10px auto 40px auto',
                                }}>
                                <img
                                    style={{ borderRadius: '18px' }}
                                    width='100%'
                                    src={`https://strapi-production-c201.up.railway.app${slide.attributes.imagem.data.attributes.url}`}
                                    alt=""
                                />
                                <Box sx={{ display: 'flex', flexDirection: 'column', height: '100%', justifyContent: 'space-between' }}>
                                    <Box>
                                        <Typography sx={{ padding: '10px', textTransform: 'uppercase', fontFamily: 'Staatliches', fontSize: '30px', textAlign: 'center', lineHeight: '32px', color: '#60aaa2' }}>
                                            {slide.attributes.titulo}
                                        </Typography>
                                        <Typography sx={{ padding: '10px', fontFamily: 'BarlowRegular', fontSize: '16px', textAlign: 'center', lineHeight: '18px', color: '#8a5254', fontWeight: '600' }}>
                                            {slide.attributes.descricao}
                                        </Typography>
                                    </Box>
                                    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px' }}>
                                        <a style={{ textAlign: 'center' }} href="">
                                            <img width='50%' src={BtnSaibaMais} alt="" />
                                        </a>
                                        <a style={{ textAlign: 'center' }} href="">
                                            <img width='50%' src={BtnDoeAgora} alt="" />
                                        </a>
                                    </Box>
                                </Box>
                            </Box>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>

    );
}

export default Campanhas;
