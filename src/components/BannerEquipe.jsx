import { Box } from '@mui/material';
import FotoEquipe from '../assets/img/foto_rodape.jpg';

const BannerEquipe = () => {
    return (
        <Box sx={{background: `url(${FotoEquipe})`, backgroundSize: 'cover', height: '50vw', marginTop: '-40px'}}>

        </Box>
    )
}

export default BannerEquipe
