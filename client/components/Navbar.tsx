import React from 'react'
import HomeIcon from '@mui/icons-material/Home';
import SettingsIcon from '@mui/icons-material/Settings';
import InfoIcon from '@mui/icons-material/Info';
import { Button } from '@mui/material';

export default function Navbar() {
  return (
    <div className='navbar-content'>
      <Button size='medium' color='secondary' href='http://localhost:3333' variant='contained' startIcon={<HomeIcon/>} sx={{mt:'12px',width: '80%', fontSize: '.7em'}} role='button'>Home</Button>
      <Button size='medium' color='secondary' variant='contained' startIcon={<SettingsIcon/>} sx={{mt: '12px',width: '80%', fontSize: '.5em'}}>Settings</Button>
      <Button size='medium' color='secondary' variant='contained' startIcon={<InfoIcon/>} sx={{mt: '12px', width: '80%', fontSize: '.5em'}}>About</Button>
    </div>
  )
}
