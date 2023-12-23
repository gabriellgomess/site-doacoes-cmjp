import { Box, Typography, Container } from '@mui/material';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import './Parceiros.css';

import Asgav from '../../assets/img/parceiros/asgav.jpg';
import InstitutoRenner from '../../assets/img/parceiros/ir.jpg';
import Zaffari from '../../assets/img/parceiros/zaffari.jpg';
import Slc from '../../assets/img/parceiros/slc1.jpg';
import Renner from '../../assets/img/parceiros/renner.jpg';
import WhiteMartins from '../../assets/img/parceiros/white-martins.jpg';
import Agco from '../../assets/img/parceiros/agco.jpg';
import Unimed from '../../assets/img/parceiros/unimed.jpg';
import Gerdau from '../../assets/img/parceiros/gerdau.jpg';
import ISlc from '../../assets/img/parceiros/slc.jpg';
import NexusTech from '../../assets/img/parceiros/nexus.jpg';

const slides = [
    {
        img: Asgav,
    },
    {
        img: InstitutoRenner,
    },
    {
        img: Zaffari,
    },
    {
        img: Slc,
    },
    {
        img: Renner,
    },
    {
        img: WhiteMartins,
    },
    {
        img: Agco,
    },
    {
        img: Unimed,
    },
    {
        img: Gerdau,
    },
    {
        img: ISlc,
    },
    {
        img: NexusTech,
    },
];

const Parceiros = () => {
    return (
        <Box sx={{ width: '100%', background: '#fff', padding: '20px 0' }}>
            <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Typography
                    variant="h4"
                    fontFamily="Staatliches"
                    sx={{ textAlign: 'center'}}
                    className='texto_verde_escuro'
                >
                    Nossos Parceiros
                </Typography>
            <Swiper
                spaceBetween={5}
                slidesPerView={1}
                navigation = {true}
                pagination={{
                    clickable: true,
                }}
                modules={[Navigation, Pagination, Autoplay]}
                scrollbar={{ draggable: true }}
                breakpoints={{
                    640: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    768: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                    1024: {
                      slidesPerView: 6,
                      spaceBetween: 10,
                    },
                  }}
                  autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                style={{ width: '100%', maxWidth: '1200px', display: 'flex', justifyContent: 'center' }}
                className='swiper-parceiros'
            >
                    {slides.map((slide, index) => (
                       <SwiperSlide key={index} style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '140px'}}>
                        <Box>
                             <img
                                className="responsive-image"
                                src={slide.img}
                                alt=""
                                width='100%'
                            />
                        </Box>
                           
                        </SwiperSlide>
                    ))}
                </Swiper>
            </Box>
        </Box>
    );
};

export default Parceiros;
