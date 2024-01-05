import React, { useEffect } from 'react';
import { Container, Box, Typography, List, ListItem, ListItemText, ListItemAvatar, Avatar } from '@mui/material';
import FotoBanner from '../assets/img/05505.jpg';
import Banrisul from '../assets/img/bancos/banrisul.png';
import BancoDoBrasil from '../assets/img/bancos/bb.png';
import Caixa from '../assets/img/bancos/caixa.jpeg';
import Itau from '../assets/img/bancos/itau.png';
import Sicredi from '../assets/img/bancos/sicredi.jpg';


const OutrasFormas = () => {
    useEffect(() => {
        // Rola a página para o topo
        window.scrollTo(0, 0);
    }, []);

    const bancos = [
        { avatar: BancoDoBrasil, banco: 'Banco do Brasil', agencia: 'Agência: 5745-2', conta: 'Conta: 11287-9' },
        { avatar: Banrisul, banco: 'Banrisul', agencia: 'Agência: 001', conta: 'Conta: 06.851.8500-0' },
        { avatar: Caixa, banco: 'Caixa Econômica Federal', agencia: 'Agência: 3460', operacao: '003', conta: 'Conta: 000411-6' },
        { avatar: Sicredi, banco: 'Sicredi (748)', agencia: 'Agência: 0116', conta: 'Conta: 50167-6' },
        { avatar: Itau, banco: 'Itau', agencia: 'Agência: 0897', conta: 'Conta: 50167-6' }
    ]

    return (
        <Container maxWidth="lg" sx={{ padding: { xs: '40px 15px', md: '80px 10px' } }}>
            <Typography variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
                Outras formas de colaborar
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
                Colabore com a manutenção da entidade. Todo valor é bem-vindo.
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: { xs: '16px', md: '20px' } }}>
                Faça agora mesmo uma transferência para um de nossos bancos.
            </Typography>
            <Box sx={{
                background: `url(${FotoBanner})`,
                backgroundSize: 'cover',
                width: { xs: '100%', md: '60%' },
                height: { xs: '200px', md: '550px' },
                margin: '25px auto',
            }}></Box>
            <Typography sx={{ marginTop: '15px', fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                Os custos para manutenção da Casa e atendimento aos acolhidos são variáveis em razão de um complexo conjunto de fatores que determina o melhor tipo de atendimento para cada indivíduo.Em média, são necessários R$ 20 mil mensais por acolhido para que se possa prestar o melhor atendimento.Essa soma torna a mobilização de recursos um grande desafio para a instituição. Mesmo diante deste cenário, o objetivo da Casa do Menino Jesus de Praga continua sendo o de ampliar o número de atendimentos na área da saúde,tendo no horizonte a qualidade e a sustentabilidade da instituição.
            </Typography>
            <Typography sx={{ marginTop: '15px', fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                A sua doação pode ser agilizada com a efetivação de transferências para as contas bancárias da entidade, apresentadas abaixo.
            </Typography>
            <Typography sx={{ marginTop: '15px', fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, fontWeight: 'bold' }}>
                Para colaborar com a manutenção da entidade:
            </Typography>
            <List sx={{ marginTop: '15px', fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' } }}>
                {bancos.map((banco, index) => (
                    <ListItem key={index} alignItems="flex-start">
                        <ListItemAvatar sx={{ marginRight: '10px' }}>
                            <Avatar src={banco.avatar} sx={{ width: '50px', height: '50px' }}></Avatar>                       </ListItemAvatar>
                        <ListItemText
                            primary={banco.banco}
                            sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, fontWeight: 'bold' }}
                            secondary={
                                <Typography
                                    sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '14px', md: '16px' } }}
                                    component="span"
                                    variant="body2"
                                    color="text.primary"
                                >
                                    {banco.agencia}<br />
                                    {banco.operacao ? 'Operação: ' + banco.operacao + ' - ' : ''}
                                    {banco.conta}
                                </Typography>
                            }
                        />
                    </ListItem>
                ))}
            </List>
            <Typography sx={{ margin: '15px 10px 30px 10px', fontFamily: 'BarlowRegular', fontSize: { xs: '16px', md: '20px' }, fontWeight: 'bold' }}>
                CNPJ nº 89.621.767/0001-41
            </Typography>
        </Container>
    )

}

export default OutrasFormas;