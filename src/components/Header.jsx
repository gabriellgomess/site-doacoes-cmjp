import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Container, Box, Drawer, IconButton, List, ListItem, useTheme } from "@mui/material";
// fontawesom
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

// Imagens
import logoCMJP from "../assets/img/logo_horizontal_cmjp.png";
import logoADC from "../assets/img/ADC_logotipo_vertical2.png";

const Header = () => {
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
            <List>
                <ListItem button component={Link} to="/" onClick={handleDrawerClose}>
                    Home
                </ListItem>
                <ListItem button component={Link} to="/sobre" onClick={handleDrawerClose}>
                    Sobre
                </ListItem>
                <ListItem button component={Link} to="/como-apoiar" onClick={handleDrawerClose}>
                    Como apoiar
                </ListItem>
                <ListItem button component={Link} to="/contato" onClick={handleDrawerClose}>
                    Contato
                </ListItem>
            </List>
        </Drawer>
    );

    return (
        <header className="header" style={{ background: 'lightgrey' }}>
            <Container sx={{ display: 'flex', alignItems: 'center', padding: '20px 0', gap: '30px', justifyContent: {xs: 'center', md: 'start'} }} maxWidth="lg">
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '40px', height: '60px', justifyContent: { xs: 'center', md: 'flex-start' } }}>
                    <img height="100%" src={logoCMJP} alt="" />
                    <img height="100%" src={logoADC} alt="" />
                </Box>

                <Box sx={{ display: { xs: 'block', md: 'none' } }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleDrawerOpen}>
                        <FontAwesomeIcon icon={faBars} />
                    </IconButton>
                    {drawer}
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'block' } }}>
                    <nav style={{ display: 'flex', gap: '15px' }} className="nav">
                        <Link to="/" className="nav__link">
                            Home
                        </Link>
                        <Link to="/sobre" className="nav__link">
                            Sobre
                        </Link>
                        <Link to="/como-apoiar" className="nav__link">
                            Como apoiar
                        </Link>
                        <Link to="/contato" className="nav__link">
                            Contato
                        </Link>
                    </nav>
                </Box>

            </Container>
        </header>
    );
}

export default Header;