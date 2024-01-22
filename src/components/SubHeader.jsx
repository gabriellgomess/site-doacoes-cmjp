import React, { useState, useContext } from 'react';
import ContextAPI from './ContextAPI';
import { Box, Typography } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { EffectFade, Navigation, Pagination, Autoplay } from 'swiper/modules';


import Img1 from '../assets/img/slide1.jpg';
import Img2 from '../assets/img/slide2.jpg';
import Img3 from '../assets/img/slide3.jpg';
import Btn from '../assets/img/doe_agora_botao.png'



const slides = [
    {
        img: Img1,
        title: 'LEI DA SOLIDARIEDADE',
        text: 'A sua empresa pode colaborar conosco através dos incentivos fiscais, via Lei da Solidariedade.',
        link: 'https://amigosdacasa.org.br'
    },
    {
        img: Img2,
        title: 'APLIQUE PARTE DO SEU IR NO MELHOR DOS FUNDOS: FUNCRIANÇA.',
        text: 'Programa federal onde pessoas físicas (que declaram pelo modelo completo) e jurídicas (enquadradas no regime de lucro real) fazer doações e abatem diretamente no imposto de renda devido.',
        link: 'https://doacoes.prefeitura.poa.br/projeto/1768/cadastra-doacao'
    },
    {
        img: Img3,
        title: 'BAZAR',
        text: 'O Bazar Amigos da Casa é uma importante fonte de recursos da instituição. Apoie com a doação de roupas, calçados e acessórios novos para a nossa loja.'
    }
];

const SubHeader = () => {
    const { open, setOpen } = useContext(ContextAPI);
    return (
        <>
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                effect={'fade'}
                autoplay={{
                    delay: 6000,
                    disableOnInteraction: false,
                }}
                modules={[EffectFade, Navigation, Pagination, Autoplay]}
                loop={true}

            >
                {slides.map((slide, index) => (
                    <SwiperSlide key={index}>
                        <Box sx={{ backgroundImage: `url(${slide.img})`, width: '100%', height: { xs: '300px', md: '550px' }, backgroundSize: 'cover', backgroundPositionY: '40%' }}>
                            <Box sx={{ width: '100%', height: '100%', background: { xs: 'linear-gradient(90deg, rgb(1 6 65 / 50%) 100%, transparent 76%)', md: 'linear-gradient(90deg, rgb(1 6 65 / 65%) 16%, transparent 76%)' }, display: 'flex', alignItems: 'center' }}>
                                <Box sx={{ width: { xs: "95%", md: "600px" }, marginLeft: { xs: '10px', md: '25%' } }}>
                                    <Typography sx={{ fontFamily: "Staatliches", fontSize: { xs: '1.5rem', md: '4rem' }, color: "#fff", lineHeight: { xs: '35px', md: '60px' }, fontWeight: "100" }}>{slide.title}</Typography>
                                    <Typography sx={{ fontFamily: "BarlowLight", fontSize: { xs: '1rem', md: '1.2rem' }, color: "#fff", lineHeight: { xs: '25px', md: '40px' }, fontWeight: { xs: '900', md: '500' } }}>{slide.text}</Typography>
                                    {index !== 1 ?
                                        <Box sx={{ cursor: 'pointer' }} onClick={() => setOpen(true)}>
                                            <img style={{ marginTop: '15px' }} width={150} src={Btn} alt="" />
                                        </Box>
                                        :
                                        <a href={slide.link} target='blank'>
                                            <img style={{ marginTop: '15px' }} width={150} src={Btn} alt="" />
                                        </a>
                                        }
                                </Box>
                            </Box>
                        </Box>
                    </SwiperSlide>
                ))}
            </Swiper>
        </>
    );
};

export default SubHeader;