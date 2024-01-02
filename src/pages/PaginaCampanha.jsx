import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { Container, Box, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';


const PaginaCampanha = () => {
    const { id } = useParams(); // Directly destructure id
    const [campanha, setCampanha] = useState(null); // Initialize as null to signify no data
    const [loading, setLoading] = useState(true);

    // Effect to fetch campaign data
    useEffect(() => {
        const fetchCampanha = async () => {
            try {
                const response = await axios.get(`https://strapi-production-c201.up.railway.app/api/campanhas/${id}?populate=*`);
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
    const imageUrl = campanha?.attributes?.imagem?.data?.attributes?.formats?.large?.url;

    // Converter 'publishedAt' para o formato de data brasileiro
    const formatDate = (dateString) => {
        const options = { year: 'numeric', month: '2-digit', day: '2-digit' };
        return new Date(dateString).toLocaleDateString('pt-BR', options);
    };

    console.log(campanha);
    return (
        <Container maxWidth="lg" sx={{padding:{xs: '40px 15px', md: '80px 0'}}}>
            <Typography className='texto_verde' variant="h3" component="h3" align="center" sx={{ fontFamily: 'Staatliches' }}>
                {campanha?.attributes?.titulo}
            </Typography>
            <Typography align='center' sx={{ fontFamily: 'BarlowRegular', fontWeight: 'bold', fontSize: {xs: '18px', md:'22px'} }}>
                {campanha?.attributes?.descricao}
            </Typography>
            {imageUrl &&            
            <Box sx={{
                background: `url(https://strapi-production-c201.up.railway.app${imageUrl})`, 
                backgroundSize: 'cover', 
                width: {xs: '100%', md: '80%'}, 
                height: {xs: '200px', md: '500px'},
                margin: '25px auto',
                }}></Box>
            }           
                
                <ReactMarkdown className='text_markdown' children={campanha?.attributes?.texto_longo}/>

            <Typography sx={{ fontFamily: 'BarlowRegular', fontSize: { xs: '12px', md: '14px' }, margin: '30px 0', color: 'grey' }}>
                Data de Publicação: {formatDate(campanha?.attributes?.publishedAt)}
            </Typography>
        </Container>
    );
};

export default PaginaCampanha;
