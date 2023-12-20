import { Box, Typography } from '@mui/material';
import BarraOndas from '../assets/img/barra_ondas.png';

import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import Img1 from '../assets/img/bazar.png';
import Img2 from '../assets/img/doacao_testamento.png';
import Img3 from '../assets/img/eventos.png';
import BtnSaibaMais from '../assets/img/saiba_mais.png'

const slides = [
    {
        img: Img1,
        title: 'Bazar',
        text: '',
        link: 'https://amigosdacasa.org.br'
    },
    {
        img: Img2,
        title: 'Testamento',
        text: ''
    },
    {
        img: Img3,
        title: 'Eventos',
        text: ''
    }
];

const ComoAjudar = () => {

    return (

        <Box sx={{ background: `url(${BarraOndas})`, height: '700px', backgroundSize: 'contain', backgroundRepeat: 'repeat-x' }} >
            <Splide
                options={{
                    type: 'loop',
                    autoplay: true,
                    interval: 108000,
                    pauseOnHover: true,
                    resetProgress: false,
                    arrows: false,
                    pagination: false,
                    width: '100%',
                    speed: 3000,
                }}
                aria-label="My Favorite Images"
            >
                {slides.map((slide, index) => (
                    <SplideSlide key={index}>
                        <Box sx={{ backgroundImage: `url(${slide.img})`, height: '300px', backgroundSize: 'cover', backgroundPositionY: '40%', width: '190px' }}>
                           
                        </Box>
                    </SplideSlide>
                ))}

            </Splide>

        </Box>



    );
}

export default ComoAjudar;