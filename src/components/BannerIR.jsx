import { Box, Typography } from "@mui/material";
import FotoDestaque from "../assets/img/foto_destaque.jpg";
const BannerIR = () => {
    return (
        <Box sx={{ background: '#60aaa2', display: 'flex', justifyContent: 'center'}}>

            <Box sx={{ display: 'flex', flexDirection: {xs: 'column', md: 'row'}, height: {xs: '600px', md: '400px'}, width: {xs: '100%', md: '70%'} }}>

                <Box sx={{ 
                    background: `url(${FotoDestaque})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: '50%',
                    width: {xs: '100%', md: '50%'},
                    minWidth: '300px',
                    height: {xs: '50%', md: '100%'},

                    }}
                >
                
                </Box>
                <Box sx={{
                    display: 'flex', 
                    justifyContent: 'center', 
                    alignItems: 'center', 
                    minWidth: '300px',
                    width: {xs: '100%', md: '50%'},
                    height: {xs: '50%', md: '100%'},
                    }}
                >
                    <Box sx={{width: '80%'}}>
                       <Typography 
                        sx={{
                            color: '#fff', 
                            fontFamily: "Staatliches",
                            fontSize: {xs: '24px', md: '30px'},                            
                            textAlign: 'center',
                            }}
                        >
                            APLIQUE PARTE DO SEU IR NO MELHOR DOS FUNDOS: FUNCRIANÇA.
                        </Typography>
                        <Typography 
                        sx={{
                            color: '#fff', 
                            fontFamily: "BarlowRegular",
                            fontSize: {xs: '16px', md: '20px'},
                            textAlign: 'center',
                            }}
                        >
                            Programa federal onde pessoas físicas (que declaram pelo modelo completo) e jurídicas (enquadradas no regime de lucro real) <span style={{fontWeight: 'bold'}}>fazem doações e abatem diretamente no imposto de renda devido.</span>
                        </Typography>    
                    </Box>
                    
                </Box>
            </Box>
          

        </Box>
    );
    }

export default BannerIR;