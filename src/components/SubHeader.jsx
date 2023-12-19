import { Splide, SplideSlide } from '@splidejs/react-splide';

// Default theme
import '@splidejs/react-splide/css';

// Import Images
import Img1 from '../assets/img/slide1.jpg';
import Img2 from '../assets/img/slide2.jpg';
import Img3 from '../assets/img/slide3.jpg';

const SubHeader = () => {
    return (
        <>
            <Splide
                options={
                    {
                        type: 'loop',
                        autoplay: true,
                        interval: 8000,
                        pauseOnHover: true,
                        resetProgress: false,
                        arrows: false,
                        pagination: false,
                        width: '100%',
                        speed: 3000,
                    }
                }
                aria-label="My Favorite Images">
                <SplideSlide>
                    <div style={{ backgroundImage: `url(${Img1})`, width: '100%', height: '500px', backgroundSize: 'cover', backgroundPositionY: '40%', padding: '0' }}>
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, rgb(44 60 231 / 65%) 16%, transparent 76%)' }}>

                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div style={{ backgroundImage: `url(${Img2})`, width: '100%', height: '500px', backgroundSize: 'cover', backgroundPositionY: '40%' }}>
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, rgb(44 60 231 / 65%) 16%, transparent 76%)' }}>

                        </div>
                    </div>
                </SplideSlide>
                <SplideSlide>
                    <div style={{ backgroundImage: `url(${Img3})`, width: '100%', height: '500px', backgroundSize: 'cover', backgroundPositionY: '40%' }}>
                        <div style={{ width: '100%', height: '100%', background: 'linear-gradient(90deg, rgb(44 60 231 / 65%) 16%, transparent 76%)' }}>

                        </div>
                    </div>
                </SplideSlide>
            </Splide>
        </>

    );
}

export default SubHeader;
