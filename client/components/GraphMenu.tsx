import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GraphData from './GraphData';
import { useState } from 'react';

export default function GraphMenu({ name, setName, setUrl, url }) {

  const result = GraphData()
  const data = result.graphData

  // const messages_in_url = "http://localhost:3000/d/c2ef0e4a-da28-4797-bd86-5c1957aa9039/newmessagesin?orgId=1&refresh=5s&viewPanel=1&viewPanel=1&kiosk";
  // const messages_out_url = "http://localhost:3000/d/b7cc76a7-51f0-4175-bbbc-dada7ec3fa2d/messagesout?orgId=1&refresh=5s&viewPanel=1&kiosk";
  // const backlog = "http://localhost:3000/d/d20d409b-6974-4ca4-b16c-fc74c6aa7cd1/newbacklog?orgId=1&refresh=5s&viewPanel=1&kiosk";


  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const changeGraph = (e) => {
    const { id } = e.target;
    let temp;

    if (id === data['messagesIn']) {
      temp = 'messagesIn';
    }
    else if (id === data['messagesOut']) {
      temp = 'messagesOut';
    }
    else {
      temp = 'backlog';
    }
    console.log({ id })
    setUrl(id);
    setName(temp)
    setAnchorEl(null);
  }

  return (
    <div className='menu'>
      <Button
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ fontSize: '10px' }}
      >
        {name}
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{ '& .MuiList-root': { bgcolor: 'rgba(67, 67, 67, 0.775)', padding: '0' } }}
      >
        <MenuItem onClick={changeGraph} id={data['messagesIn']}>messagesIn</MenuItem>
        <MenuItem onClick={changeGraph} id={data['messagesOut']}>messagesOut</MenuItem>
        <MenuItem onClick={changeGraph} id={data['backlog']}>backlog</MenuItem>
      </Menu>
    </div>
  );
}