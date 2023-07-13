import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';


function Navbar() {

  return (
    <AppBar position="sticky" >
      <Container maxWidth="xl" sx={{minWidth: '100%', bgcolor: '#ffff', boxShadow: '0px 3px 2px -1px rgba(0,0,0,0.1)'}}>
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'Rajdhani',
              fontWeight: 700,
              letterSpacing: '.4rem',
              color: '#212121',
              textDecoration: 'none',
            }}
          >
            Pulsar Portrait
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              <Button
                key='Docs'
                sx={{ my: 2, color: '#2c2c2c', display: 'block' }}
              >
                Docs
              </Button>
              <Button
                key='Demo'
                sx={{ my: 2, color: '#2c2c2c', display: 'block' }}
              >
                Demo
              </Button>
              <Button
                key='Contact'
                sx={{ my: 2, color: '#2c2c2c', display: 'block' }}
              >
                Contact
              </Button>
              <Button
                key='Github'
                href='https://github.com/oslabs-beta/PulsarPortrait'
                sx={{ m: 2, color: '#2c2c2c', display: 'block' }}
              >
                <GitHubIcon/>
              </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Navbar;