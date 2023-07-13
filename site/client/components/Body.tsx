import * as React from 'react';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

export default function Body() {
  return (
    <>
      <Container maxWidth={false}
        sx={{ 
          bgcolor: '#e0e0e0',
          maxWidth: '100%',
          display: {md: 'flex', flexDirection: 'column', alignItems: 'flex-end'}
        }}>
        <Box component='h1' sx={{ width: '100%', fontSize: '2.5rem', color: '#212121', letterSpacing: '.3rem', mt: '100px', textAlign: 'right'}}>
          Pulsar Portrait
        </Box>
          <Box component='p' sx={{ mb: '100px', maxWidth: '40%', color: '6d6d6d'}}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris a lacus a orci eleifend euismod. 
            In hac habitasse platea dictumst. Cras ac aliquam magna. Nullam commodo ante quis luctus scelerisque. 
            Nunc quam risus, suscipit non sollicitudin id, bibendum sed nisi. Quisque mollis, lacus eget dictum 
            semper, nunc ligula commodo augue, nec lobortis quam nulla vitae tortor. Nunc posuere, lacus ut egestas 
            dignissim, mi turpis tincidunt dui, et interdum purus risus sed libero.
        </Box>
      </Container>
      <Container maxWidth={false}
        sx={{
          maxWidth: '100%',
          display: {md: 'flex', flexDirection: 'column', alignItems: 'flex-end'}
        }}>
        <Box component='h1' sx={{ width: '100%', fontSize: '2.5rem', color: '#212121', letterSpacing: '.3rem', mt: '100px', textAlign: 'left'}}>
          Install
        </Box>
        <Box component='div' >
          <Box component='img' src='https://miro.medium.com/v2/resize:fit:1400/1*fopzpyNMN9GPvAIKdsZdaA.png'>

          </Box>
        </Box>
      </Container>
    </>
  )
}
