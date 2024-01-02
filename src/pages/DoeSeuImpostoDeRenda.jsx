import { Container, Box, Typography } from '@mui/material';
import FotoBanner from '../assets/img/04989.jpg';
import QRPix from '../assets/img/pix-banrisul.jpg';
import { Link } from 'react-router-dom';
import Whats from '../assets/img/whats.png';
const DoeSeuImpostoDeRenda = () => {
    return(
        <Container maxWidth="lg" sx={{padding:{xs: '40px 15px', md: '80px 0'}}}>
            <Typography variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
            Doe parte do seu imposto de renda - FUNCRIANÇA
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: {xs: '16px', md:'20px'} }}>
            Aplique parte do seu Imposto de Renda no melhor dos fundos: Funcriança! 
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: {xs: '16px', md:'20px'} }}>
            Programa federal onde pessoas físicas (que declaram pelo modelo completo) e jurídicas (enquadradas no regime de lucro real) fazem doações e abatem diretamente no imposto de renda devido. 
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'} }}>
            Você sabia que só conseguimos atender nossos acolhidos e pacientes graças aos amigos que acreditam na importância do trabalho aqui realizado? 
            </Typography>
            <Box sx={{
                background: `url(${FotoBanner})`, 
                backgroundSize: 'cover', 
                width: {xs: '100%', md: '80%'}, 
                height: {xs: '200px', md: '500px'},
                margin: '25px auto',
                }}></Box>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'}, fontWeight: 'bold', margin: '20px 0' }}>
            Um dos instrumentos para doar é o FUNCRIANÇA! 
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'} }}>
            Faça contato com a gente, para orientarmos a melhor forma de promover seu evento em benefício da Casa.  
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'}, margin: '20px 0' }}>
            Se você, <span style={{fontWeight: 'bold'}}>PESSOA FÍSICA</span>, faz a declaração do imposto de renda pelo Modelo Completo, <span style={{fontWeight: 'bold'}}>pode doar até 6% do imposto de renda devido </span>  
            para a Casa do Menino. É simples! Basta entrar no site do Fundo Municipal dos Direitos da Criança e do 
            Adolescente de Porto Alegre, identificar o projeto da Casa do Menino, cadastrar as informações pessoais, incluindo o 
            CPF e gerar a DAD (Documento de Arrecadação de Doação) com o valor definido.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'}, margin: '20px 0' }}>
            No caso de <span style={{fontWeight: 'bold'}}>PESSOA JURÍDICA</span>, o critério é que faça a declaração do imposto de renda pelo Lucro Real; neste caso, a doação pode chegar a <span style={{fontWeight: 'bold'}}>1% do imposto de renda devido!</span> O procedimento para efetivar a doação é o mesmo da pessoa física, devendo entrar no site do Funcriança e gerar a DAD. 
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'}, margin: '20px 0' }}>
            Faça da sua Declaração Anual de Imposto de Renda uma Doação de Amor! ❤ 
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'}, margin: '20px 0', fontWeight: 'bold' }}>
            Acesse o nosso projeto e faça a sua doação
            </Typography>
            <Link to="https://doacoes.prefeitura.poa.br/projeto/1768/cadastra-doacao" target='blank'>
            <Typography className='texto_vermelho' sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'}, margin: '20px 0', fontWeight: 'bold'}}>
            www.doacoes.prefeitura.poa.br/projeto/1768
            </Typography>            
            </Link>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'}, margin: '20px 0' }}>
            Se preferir, entre em contato para gerarmos a guia. 
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: {xs: '16px', md:'20px'}, margin: '20px 0', fontWeight: 'bold' }}>
                doar@casadomenino.org.br
            </Typography>
            <Link to='https://wa.me/5551995728124' target='blank'>
            <Typography fontSize={24} fontFamily="Staatliches" sx={{display: 'flex', alignItems: 'center', gap: '8px', margin: '20px 0'}} className='texto_verde_escuro'>
                <img width={20} src={Whats} alt="" />(51) 99572-8124
            </Typography>
            </Link>
        </Container>
    )

}

export default DoeSeuImpostoDeRenda;

