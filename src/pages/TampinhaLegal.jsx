import { Container, Box, Typography } from '@mui/material';
import FotoBanner from '../assets/img/tampinha-legal.jpg';

const TampinhaLegal = () => {
    return(
        <Container maxWidth="lg" sx={{padding:{xs: '40px 15px', md: '80px 10px'}}}>
            <Typography variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
            Tampinha Legal 
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: {xs: '16px', md:'20px'} }}>
            Junte-se a nós! Junte Tampinhas.
            </Typography>
            <Box sx={{
                background: `url(${FotoBanner})`, 
                backgroundSize: 'cover', 
                width: {xs: '100%', md: '60%'}, 
                height: {xs: '200px', md: '550px'},
                margin: '25px auto',
                }}></Box>
            <Typography sx={{ marginTop: '15px', fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'} }}>          
            O <span style={{fontWeight: 'bold'}}>Tampinha Legal</span> é o maior programa socioambiental de caráter educativo em economia circular de iniciativa da indústria de transformação do plástico das Américas.
            </Typography>
            <Typography sx={{ marginTop: '15px', fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'} }}>
            Lançado em 2016, na segunda edição do Congresso Brasileiro do Plástico (CBP).            
            </Typography>
            <Typography sx={{ marginTop: '15px', fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'} }}>
            Realizado pelo Instituto SustenPlást, o Tampinha Legal é simples, de fácil aderência e de baixo custo. Todas as classes sociais, níveis de instrução e faixas etárias participam do Tampinha Legal.   
            </Typography>
            <Typography sx={{ margin: '15px 0 50px 0', fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'} }}>
            É através do Tampinha Legal que as entidades assistenciais do terceiro setor buscam sustentabilidade econômica para viabilizar e dar continuidade a seus trabalhos. Além de promover a sustentabilidade social e ambiental, o Tampinha Legal também oportuniza atender aos Objetivos do Desenvolvimento Sustentável da ONU (ODS) e ESG.
            </Typography>           
         
        </Container>
    )

}

export default TampinhaLegal;