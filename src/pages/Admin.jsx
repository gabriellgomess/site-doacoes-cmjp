import { Box, Button, Typography } from '@mui/material'
const Admin = () => {
    return (
        <Box sx={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Typography color='#60aaa2' fontFamily='Staatliches' variant="h4">Acessar painel administrativo</Typography>
            <a href='https://strapi-production-6e0c.up.railway.app/admin/auth/login'>
                <Box
                    sx={{
                        background: '#f6a442',
                        width: '200px',
                        height: '50px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        borderRadius: '10px',
                        marginTop: '20px',
                        cursor: 'pointer',
                        boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
                        transition: 'all 0.2s ease-in-out',
                        '&:hover': {
                            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.4)',
                        }
                    }}
                    variant="contained">
                    <Typography color='#fff' fontFamily='Staatliches' variant="h6">Acessar</Typography>
                </Box>
            </a>


        </Box>
    );
}

export default Admin;