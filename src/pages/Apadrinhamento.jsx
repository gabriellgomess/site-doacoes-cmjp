import React, { useEffect } from 'react';
import { Container, Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import FotoBanner1 from '../assets/img/04614.jpg';
import FotoBanner2 from '../assets/img/04915.jpg';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import StarBorderIcon from '@mui/icons-material/StarBorder';



const BazarAmigosDaCasa = () => {
    useEffect(() => {
        // Rola a página para o topo
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container maxWidth="lg" sx={{ padding: { xs: '40px 15px', md: '80px 0' } }}>
            <Typography variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
                Apadrinhe um acolhido
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
                Apoie este projeto e contribua com o bem-estar e saúde dos acolhidos da entidade.
            </Typography>
            <Box sx={{
                background: `url(${FotoBanner1})`,
                backgroundSize: 'cover',
                width: { xs: '100%', md: '80%' },
                height: { xs: '200px', md: '500px' },
                margin: '25px auto',
            }}></Box>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, margin: '20px 0' }}>
                Ao contribuir com este projeto você ajuda a Casa de Saúde Menino Jesus de Praga a garantir atendimentos médicos, terapêuticos e de enfermagem nas 24 horas do dia.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, margin: '20px 0' }}>
                O que oferecemos com a sua ajuda:
            </Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Atendimentos diários de fisioterapia motora e respiratória" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Atendimentos de fisio aquática" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Atendimentos de fonoaudiologia" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Atendimentos de terapia ocupacional" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dietas específicas de acordo com a necessidade e patologias - via enteral ou oral" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Atendimento médico com clínico geral, pediatra e neurologista" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Atendimentos psicoterapêuticos" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Atendimentos psicopedagógicos" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Enfermagem 24 horas - enfermeiros e técnicos de enfermagem com experiência comprovada em atendimento hospitalar" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <FavoriteBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="Dispensação de medicamentos pela farmácia da entidade" />
                </ListItem>
            </List>


            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, margin: '20px 0' }}>
                No ano de 2023 realizamos mensalmente:
            </Typography>
            <List>
                <ListItem>
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="9.400 dispensações de medicações individuais" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="973 atendimentos em Fisioterapia - sendo 437 motora e 536 respiratória" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="48 atendimentos em Fisioterapia Aquática" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="192 atendimentos em Terapia Ocupaciona" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="160 atendimentos em Fonoaudiologia" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="600 atendimentos Médico e de Enfermagem contínuos" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="164 atendimentos em Psicologia" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="105 consultas com especialistas" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="1540 dietas via oral com especificidades para os acolhidos e pacientes" />
                </ListItem>
                <ListItem>
                    <ListItemIcon>
                        <StarBorderIcon />
                    </ListItemIcon>
                    <ListItemText primary="2.464 dietas sonda e oral para os acolhidos pacientes" />
                </ListItem>
            </List>

            <Box sx={{
                background: `url(${FotoBanner2})`,
                backgroundSize: 'cover',
                width: { xs: '100%', md: '80%' },
                height: { xs: '200px', md: '500px' },
                margin: '25px auto',
            }}></Box>

            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                A expectativa de vida dos acolhidos na Casa de Saúde Menino Jesus de Praga é um dado importante a ser considerado e reflete a excelência do cuidado prestado. Em 2016, por exemplo, a média da expectativa de vida dos acolhidos era de 15,7 anos. Em 2023, esse índice chegou a 20,63 anos. Esse aumento é resultado da seriedade e dedicação no atendimento prestado e da excelência médica, científica, farmacológica e assistencial oferecida pela instituição aos seus acolhidos. Em 2016, por exemplo, a média da expectativa de vida dos acolhidos era de 15,7 anos. Em 2023, esse índice chegou a 20,63 anos.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Com a sua ajuda podemos fazer muito mais!
            </Typography>

        </Container>
    )

}

export default BazarAmigosDaCasa;