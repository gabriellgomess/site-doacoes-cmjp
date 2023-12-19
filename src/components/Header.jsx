import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Container, Box, Drawer, IconButton, List, ListItem, useTheme } from "@mui/material";
// fontawesom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

// Imagens
import logoCMJP from "../assets/img/logo_horizontal_cmjp.png";
import logoADC from "../assets/img/ADC_logotipo_vertical2.png";

const Header = () => {
    const location = useLocation();

    const [open, setOpen] = useState(false);
    const theme = useTheme();

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

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
                <ListItem className={`menu_item ${location.pathname === '/como-apoiar' ? 'menu_item_active' : ''}`} component={Link} to="/como-apoiar" onClick={handleDrawerClose}>
                    Como apoiar
                </ListItem>
                <ListItem className={`menu_item ${location.pathname === '/contato' ? 'menu_item_active' : ''}`} component={Link} to="/contato" onClick={handleDrawerClose}>
                    Contato
                </ListItem>
            </List>
        </Drawer>
    );

    return (
        <header className="header" style={{ background: '#fff' }}>
            <Container sx={{ display: 'flex', alignItems: 'center', padding: '20px 0', gap: '80px', justifyContent: { xs: 'center', md: 'start' } }} maxWidth="lg">
                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                        <FontAwesomeIcon icon={faBars} />
                    </IconButton>
                    {drawer}
                </Box>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', height: '60px', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <img height="100%" src={logoCMJP} alt="" />
                    <img height="100%" src={logoADC} alt="" />
                </Box>


                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <nav style={{ display: 'flex', gap: '15px' }} className="nav">
                        <Link to="/" className={`nav__link ${location.pathname === '/' ? 'active' : ''}`}>
                            Home
                        </Link>
                        <Link to="/sobre" className={`nav__link ${location.pathname === '/sobre' ? 'active' : ''}`}>
                            Sobre
                        </Link>
                        <Link to="/como-apoiar" className={`nav__link ${location.pathname === '/como-apoiar' ? 'active' : ''}`}>
                            Como apoiar
                        </Link>
                        <Link to="/contato" className={`nav__link ${location.pathname === '/contato' ? 'active' : ''}`}>
                            Contato
                        </Link>
                    </nav>
                </Box>

            </Container>
        </header>
    );
}

export default Header;