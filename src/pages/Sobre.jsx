import React, { useEffect } from 'react';
import { Container, Box, Typography } from '@mui/material';
import FotoBanner from '../assets/img/04521.jpg';
import FotoBanner2 from '../assets/img/04500.jpg';
import FotoBanner3 from '../assets/img/04647.jpg';
import QRPix from '../assets/img/pix-banrisul.jpg';

const Sobre = () => {
    useEffect(() => {
        // Rola a página para o topo
        window.scrollTo(0, 0);
    }, []);
    return (
        <Container maxWidth="lg" sx={{ padding: { xs: '40px 15px', md: '80px 0' } }}>
            <Typography variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
                Sobre o Amigos da Casa
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
                Amigos da Casa é uma iniciativa da entidade para divulgar e promover os projetos e ações de mobilização de recursos.
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
                Todas as formas aqui apresentadas são importantes fontes de mobilização de recursos para a instituição e contribuem sobremaneira para a garantia do atendimento de saúde de alta e média complexidade oferecido a crianças e adolescentes com lesões neurológicas e motoras severas, permanentes.
            </Typography>

            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                A Casa de Saúde Menino Jesus de Praga promove acolhimento em saúde com habilitação e reabilitação multidisciplinar para pessoas com deficiência (PCDs), com lesões neurológicas e motoras de alta e média complexidade, em atendimentos de longa permanência. Hoje, são 33 acolhidos e pacientes, entre crianças, adolescentes e até adultos. Em 2022 a instituição foi indicada como melhor organização em gestão do país pelo Ministério da Cidadania e em 2023 foi vencedora na categoria Atitude Solidária no Top de MKT ADVB/RS e melhor case levando o prêmio máximo de distinção Ouro, além de ser eleita uma das 100 Melhores Ongs do País, pela quarta vez.
            </Typography>
            <Box sx={{
                background: `url(${FotoBanner})`,
                backgroundSize: 'cover',
                width: { xs: '100%', md: '80%' },
                height: { xs: '200px', md: '500px' },
                margin: '25px auto',
            }}></Box>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Localizada na Rua Nelson Zang, 420, no Bairro Intercap, em Porto Alegre (RS), a Casa mantém convênio com os órgãos de assistência social municipais, a Secretaria Estadual da Saúde, e Secretarias Municipais de Saúde de Porto Alegre e outros municípios do estado.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                A instituição tem uma estrutura hospitalar – oferecendo enfermagem 24h – com capacidade de até 100 leitos. A organização também dispõe de salas para atendimento médico clínico e neurológico de seus pacientes acolhidos, espaços interativos com equipamentos destinados à terapia ocupacional e fisioterápica. Além disso, a Casa tem em sua equipe nutricionistas, farmacêuticos, psicólogos, fonoaudiólogos e assistentes sociais que ampliam a rede de apoio no atendimento.
            </Typography>
            <Box sx={{
                background: `url(${FotoBanner2})`,
                backgroundSize: 'cover',
                width: { xs: '100%', md: '80%' },
                height: { xs: '200px', md: '500px' },
                margin: '25px auto',
            }}></Box>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Ao longo dos quarenta anos de funcionamento, a Casa buscou se reinventar com o objetivo de proporcionar aos acolhidos uma melhor estrutura e atendimento, condizentes com as novas práticas de saúde e assistência. Essa reinvenção se deu após um profundo processo de entendimento das necessidades dos acolhidos, da sociedade e do papel dos serviços prestados pela Casa.
            </Typography>
            <Box sx={{
                background: `url(${FotoBanner3})`,
                backgroundSize: 'cover',
                width: { xs: '100%', md: '80%' },
                height: { xs: '200px', md: '500px' },
                margin: '25px auto',
            }}></Box>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Entre as iniciativas implementadas nos anos mais recentes, estão a profissionalização e ampliação do quadro funcional – pois todo o atendimento de cuidado direto aos acolhidos e pacientes é realizado por funcionários da instituição – e a melhoria dos processos de gestão por meio do estabelecimento de estrutura de governança.
            </Typography>
            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Para manter toda a estrutura física e de atendimento, são necessários recursos financeiros, principalmente para honrar com os custos de folha de pagamento.
            </Typography>
            <Typography fontWeight='bold' sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Você pode colaborar com a Casa pontualmente ou mensalmente, como preferir!

            </Typography>

        </Container>
    )

}

export default Sobre;