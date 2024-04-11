import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Box, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';
import ModalCampanha from '../components/ModalCampanha';
import BtnDoeAgora from '../assets/img/doe_agora_botao.png';

import RenderElement from '../components/RenderElement';



const PaginaCampanha = () => {
    const { id } = useParams(); // Directly destructure id
    const [campanha, setCampanha] = useState(null); // Initialize as null to signify no data
    const [loading, setLoading] = useState(true);
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true); // Abre o modal quando o botão é clicado
        setCampanha(campanha);
    };

    const handleClose = () => {
        setOpen(false); // Fecha o modal // Limpa os dados da campanha
    };

    useEffect(() => {
        // Rola a página para o topo
        window.scrollTo(0, 0);
    }, []);

    // Effect to fetch campaign data
    useEffect(() => {
        const fetchCampanha = async () => {
            try {
                const response = await axios.get(`https://srv493870.hstgr.cloud/api/campanhas/${id}?populate=*`);
                setCampanha(response.data.data);
            } catch (error) {
                console.error("Erro ao buscar dados da campanha", error);
            } finally {
                setLoading(false);
            }
        };

        fetchCampanha();
    }, [id]); // Dependency array includes only id

    // Rendering logic separated from loading logic
    if (loading) {
        return <h1>Carregando...</h1>;
    }

    // Destructuring for easier usage in JSX below
    const imageUrl = campanha?.attributes?.imagem?.data?.attributes?.formats?.medium?.url;

    // Converter 'publishedAt' para o formato de data brasileiro
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    console.log(campanha);
    return (
        <Container maxWidth="lg" sx={{ padding: { xs: '40px 15px', md: '80px 0' } }}>
            <div style={{backgroundImage: `url(https://srv493870.hstgr.cloud${imageUrl})`, backgroundSize: 'cover', width: '80%', height: '400px', backgroundPosition: '50%', margin: '0 auto'}}>
            </div>          
            
            <RenderElement editorJson={campanha?.attributes?.editor_json} />
            {/* <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '12px', md: '14px' }, margin: '30px 0', color: 'grey' }}>
                Data de Publicação: {formatDate(campanha?.attributes?.publishedAt)}
            </Typography> */}
            <Box onClick={()=>handleOpen(campanha)} sx={{ textAlign: 'center', cursor: 'pointer', width: '350px' }}>
                <img width='50%' src={BtnDoeAgora} alt="" />
            </Box>
            
            <ModalCampanha open={open} handleClose={handleClose} dadosCampanha={campanha} />

            
        </Container>
    );
};

export default PaginaCampanha;
