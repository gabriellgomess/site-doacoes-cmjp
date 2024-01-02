import { Container, Box, Typography } from '@mui/material';
import FotoBanner from '../assets/img/04461.jpg';
import QRPix from '../assets/img/pix-banrisul.jpg';
import { Link } from 'react-router-dom';

const LeiDaSolidariedade = () => {
    return(
        <Container maxWidth="lg" sx={{padding:{xs: '40px 15px', md: '80px 0'}}}>
            <Typography variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
            Lei da Solidariedade
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: {xs: '16px', md:'20px'} }}>
            A sua empresa pode colaborar conosco através dos incentivos fiscais, via Lei da Solidariedade.  
            </Typography>
            <Box sx={{
                background: `url(${FotoBanner})`, 
                backgroundSize: 'cover', 
                width: {xs: '100%', md: '80%'}, 
                height: {xs: '200px', md: '500px'},
                margin: '25px auto',
                }}></Box>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'}}}>
            A <span style={{fontWeight: 'bold'}}>Lei da Solidariedade</span> oportuniza o investimento em projetos sociais com incentivos fiscais por meio do Imposto de Circulação de Mercadorias - ICMs.
            </Typography> 
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'} }}>
            É um dos programas do Pró-Social da Secretaria Estadual de Assistência Social. 
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'} }}>
            A empresa interessada em participar do programa faz o cadastro na opção "Empresa Financiadora", no site do Pró Social: <Link to="https://prosocial.rs.gov.br">www.prosocial.rs.gov.br</Link>.
            </Typography>    
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'}, fontWeight: 'bold', margin: '20px 0' }}>
            A Casa do Menino conta com o projeto “Revitalização” aprovado para captar recursos por meio da Lei! 
            </Typography>            
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'} }}>
            O <span style={{fontWeight: 'bold'}}>Projeto Revitalização</span> tem por objetivo a aquisição de recursos por meio da Lei da Solidariedade para manutenção e pintura do prédio onde funciona a instituição, atendendo 24 horas os atuais 32 acolhidos formado por crianças, adolescentes, jovens e adultos com diagnóstico de lesão cerebral (encefalopatia). São mais de 80 funcionários, 100 voluntários e doadores que se mobilizam diariamente para poder oferecer o melhor conforto e cuidado em saúde possível para os acolhidos. No ano de 2018, a instituição começou a funcionar na nova sede, com uma área de 4700m2. Passado o tempo, decorrido o desgaste natural das estruturas físicas e pelo contínuo uso, por meio deste projeto será possível revitalizar os espaços internos e, principalmente, os externos. Importante destacar que esta ação se antecipa a problemas futuros que podem advir de uma construção com má conservação, vindo a gerar custos elevados para sua recuperação.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'}, margin: '20px 0'  }}>
            Gostaria de colaborar com este projeto? Empresas interessadas podem fazer contato que explicaremos o funcionamento do processo de doação.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'}, fontWeight: 'bold', marginBottom: '40px'  }}>
            consultoria@casadomenino.org.br 
            </Typography> 
        </Container>
    )

}

export default LeiDaSolidariedade;