import { Box, Typography } from '@mui/material';
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineDot } from '@mui/lab';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { fa1, fa2, fa3, fa4 } from '@fortawesome/free-solid-svg-icons';
const TrabalhoVoluntario = () => {
    return (
        <Box sx={{ padding: '30px 10px' }}>
            <Typography variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
                Trabalho Voluntário
            </Typography>

            <Box sx={{ width: { xs: '100%', sm: '100%', md: '100%', lg: '80%' }, margin: '0 auto' }}>
                <Typography sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '26px' } }}>
                    Veja abaixo como você pode saber mais sobre a atividade na Casa de Saúde Menino Jesus de Praga!
                </Typography>
                <Timeline>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <FontAwesomeIcon icon={fa1} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography sx={{ fontFamily: 'BarlowRegular' }}>
                                Primeiro você deve fazer contato com a Coordenação de Voluntários - pelo e-mail: voluntariado@casadomenino.org.br - solicitando informações.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <FontAwesomeIcon icon={fa2} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography sx={{ fontFamily: 'BarlowRegular' }}>
                                A coordenadora irá marcar um horário para que você primeiramente conheça a entidade, seu funcionamento, missão, visão e valores e após a visita apresentará as possibilidades de voluntariado na Casa. Costura, separação de tampinhas plásticas, Bazar Amigos da Casa, passeios e recreação com os acolhidos, ou nova vaga de outro trabalho voluntário que surgir como demandas específicas (eventos, decoração).
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <FontAwesomeIcon icon={fa3} />
                            </TimelineDot>
                            <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography sx={{ fontFamily: 'BarlowRegular' }}>
                                Os voluntários que forem atuar com os acolhidos, nos passeios e/ou recreação, passam obrigatoriamente por um treinamento com a equipe multidisciplinar e enfermagem da Casa.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot sx={{ width: '30px', height: '30px', display: 'flex', justifyContent: 'center', alignItems: 'center' }} >
                                <FontAwesomeIcon icon={fa4} />
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography sx={{ fontFamily: 'BarlowRegular' }}>
                                Nas demais áreas, os voluntários recebem treinamento da atividade que desenvolverão, do líder da área.
                            </Typography>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
                <Typography sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '26px' } }}>
                    Venha fazer parte da nossa Cultura do Cuidado e juntos promover ações de Cuidado pra toda vida!
                </Typography>
            </Box>





        </Box>
    );
}

export default TrabalhoVoluntario;