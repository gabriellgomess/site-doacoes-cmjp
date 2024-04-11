import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Box, Drawer, IconButton, List, ListItem, Menu, MenuItem, Typography } from "@mui/material";
// fontawesom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark, faChevronDown } from "@fortawesome/free-solid-svg-icons";

// Imagens
import logoCMJP from "../assets/img/logo_horizontal_color.png";
import logoADC from "../assets/img/ADC_logotipo_vertical2.png";

// Selos
import TopAdvb from "../assets/selos/ADVB-FEED-TOP-2022.png";
import LigaSocial from "../assets/selos/liga-social.png";
import MelhoresOngs from "../assets/selos/melhores-ongs.png";
import OngTransparente from "../assets/selos/ongtransparente.png";

const Header = ({slides}) => {
    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);      
    };
    
    const handleClose = () => {
      setAnchorEl(null);
      handleDrawerClose();
    };

    const location = useLocation();

    const [open, setOpen] = useState(false);
    

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    const links = [
        {
            id: 1,
            label: 'Eventos',
            path: 'eventos'
        }, 
        {
            id: 2,
            label: 'Apadrinhe um Acolhido',
            path: 'apadrinhamento'
        }, 
        {
            id: 3,
            label: 'Pix',
            path: 'pix'
        }, 
        {
            id: 4,
            label: 'Nota Fiscal Gaúcha',
            path: 'nota-fiscal-gaucha'        
        },
        {
            id: 5,
            label: 'Tampinha Legal',
            path: 'tampinha-legal'        
        },
        {
            id: 6,
            label: 'Outras formas',
            path: 'outras-formas'        
        },
        {
            id: 7,
            label: 'Lei da Solidariedade',
            path: 'lei-da-solidariedade'        
        },
        {
            id: 8,
            label: 'Doe seu imposto de renda',
            path: 'doe-seu-imposto-de-renda'        
        },
        {
            id: 9,
            label: 'Bazar Amigos da Casa',
            path: 'bazar-amigos-da-casa'        
        },
        // {
        //     id: 10,
        //     label: 'Contato',
        //     path: 'contato'        
        // },
        ...slides.map((slide, index) => ({
            id: index + 11,
            label: slide.attributes.titulo,
            path: `campanha/${slide.id}`
        }))
    ]

    const drawer = (
        <Drawer open={open} onClose={handleDrawerClose}>
            <Box sx={{ display: 'flex', justifyContent: 'end' }}>
                <IconButton onClick={handleDrawerClose}>
                    <FontAwesomeIcon icon={faXmark} />
                </IconButton>
            </Box>
            <List>
                <ListItem className={`menu_item ${location.pathname === '/' ? 'menu_item_active' : ''}`} component={Link} to="/" onClick={handleDrawerClose}>
                    Home
                </ListItem>
                <ListItem className={`menu_item ${location.pathname === '/sobre' ? 'menu_item_active' : ''}`} component={Link} to="/sobre" onClick={handleDrawerClose}>
                    Sobre
                </ListItem>
                <Typography className='menu_item' onClick={handleClick} >
                    Como apoiar <FontAwesomeIcon icon={faChevronDown} />
                </Typography>
                <ListItem className={`menu_item ${location.pathname === '/contato' ? 'menu_item_active' : ''}`} component={Link} to="/contato" onClick={handleDrawerClose}>
                    Contato
                </ListItem>
            </List>
            <Box sx={{display: 'flex', gap: '15px', flexWrap: 'wrap', padding: '10px'}} >
                    <img height="50px" src={TopAdvb} alt="" />
                    {/* <img height="50px" src={LigaSocial} alt="" /> */}
                    <img height="50px" src={MelhoresOngs} alt="" />
                    {/* <img height="50px" src={OngTransparente} alt="" /> */}
                </Box>
        </Drawer>
    );



    return (
        <header className="header" style={{ background: '#fff', boxShadow: '2px 2px 13px rgba(0, 0, 0, 0.5)' }}>
            <Container sx={{ display: 'flex', alignItems: 'center', padding: '20px 0', gap: {xs: '20px', md: '80px'}, justifyContent: { xs: 'center', md: 'center', lg: 'space-between' } }} maxWidth="xl">
                <Box sx={{ display: { md: 'block', lg: 'none' } }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                        <FontAwesomeIcon icon={faBars} />
                    </IconButton>
                    {drawer}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', height: '60px', justifyContent: { md: 'center', lg: 'flex-start' } }}>
                    <img width="250px" src={logoCMJP} alt="" />
                    <img height="100%" src={logoADC} alt="" />
                </Box>


                <Box sx={{ display: { xs: 'none', md: 'none', lg: 'block' } }}>
                    <nav style={{ display: 'flex', gap: '15px' }} className="nav">
                        <Link to={`${import.meta.env.VITE_URL}`} className={`nav__link ${location.pathname === '/' ? 'active' : ''}`}>
                            Home
                        </Link>
                        <Link to={`${import.meta.env.VITE_URL}sobre`} className={`nav__link ${location.pathname === '/sobre' ? 'active' : ''}`}>
                            Sobre
                        </Link>
                        <div>
                            <Typography sx={{cursor: 'pointer'}} aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick} className='nav__link'>
                                Como apoiar <FontAwesomeIcon icon={faChevronDown} />
                            </Typography>
                            <Menu
                                id="simple-menu"
                                anchorEl={anchorEl}
                                keepMounted
                                open={Boolean(anchorEl)}
                                onClose={handleClose}
                            >
                            {links.map((link, index) => (
                                <MenuItem key={index} onClick={handleClose}>
                                    <Link to={`${import.meta.env.VITE_URL}${link.path}`} className={`nav__link ${location.pathname === link.path ? 'active' : ''}`}>
                                        {link.label}
                                    </Link>
                                </MenuItem>
                            ))}
                            </Menu>
                        </div>
                        <Link to={`${import.meta.env.VITE_URL}contato`} className={`nav__link ${location.pathname === '/contato' ? 'active' : ''}`}>
                            Contato
                        </Link>
                    </nav>
                </Box>
                <Box sx={{display: {xs: 'none', md:'flex'}, gap: '15px', height: '50px'}} >
                    <img height="100%" src={TopAdvb} alt="" />
                    {/* <img height="100%" src={LigaSocial} alt="" /> */}
                    <img height="100%" src={MelhoresOngs} alt="" />
                    {/* <img height="100%" src={OngTransparente} alt="" /> */}
                </Box>

            </Container>
        </header>
    );
}

export default Header;
