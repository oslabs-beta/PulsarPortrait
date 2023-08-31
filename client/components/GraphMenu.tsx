import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import GraphData from '../GraphData';
import { useState } from 'react';
import { URLS } from '../types';


interface GraphMenuProps {
  name: string;
  setName: Function;
  setUrl: Function
}

export default function GraphMenu({ name, setName, setUrl}: GraphMenuProps) {

  const data: URLS = GraphData//GraphData();
 
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open: boolean = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>): void => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (): void => {
    setAnchorEl(null);
  };

  const changeGraph = (e: React.BaseSyntheticEvent) => {
    const { id } = e.target;
    let temp;

    switch(id) {
      case data['activeConnections']: temp = 'active Connections';
      break;
      case data['backlog']: temp = 'backlog';
      break;
      case data['jettyrequesttime']: temp = 'jetty request time';
      break;
      case data['memoryUsage']: temp = 'memory Usage';
      break;
      case data['messagesIn']: temp = 'messages In';
      break;
      case data['messagesOut']: temp = 'messages Out';
      break;
      case data['messageRateIn']: temp = 'message Rate In';
      break;
      case data['messageRateOut']: temp = 'message Rate Out';
      break;
      case data['throughputIn']: temp = 'throughput In';
      break;
      case data['throughputOut']: temp = 'throughput Out';
      break;
      case data['topicsAndSubscriptions']: temp = 'topics And Subscriptions';
      break;
    }

    setUrl(id);
    setName(temp);
    setAnchorEl(null);
  };

  return (
    <div className='menu'>
      <Button
        id='fade-button'
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup='true'
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{ fontSize: '10px' }}
      >
        {name}
      </Button>
      <Menu
        id='fade-menu'
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
        sx={{
          '& .MuiList-root': {
            bgcolor: 'rgba(67, 67, 67, 0.775)',
            padding: '0',
          },
        }}
      >
        <MenuItem onClick={changeGraph} id={data['activeConnections']}>
          Active Connections
        </MenuItem>
        <MenuItem onClick={changeGraph} id={data['backlog']}>
          Backlog
        </MenuItem>
        <MenuItem onClick={changeGraph} id={data['jettyrequesttime']}>
          Jetty Request Time
        </MenuItem>
        <MenuItem onClick={changeGraph} id={data['memoryUsage']}>
          Memory Usage
        </MenuItem>
        <MenuItem onClick={changeGraph} id={data['messagesIn']}>
          Messages In
        </MenuItem>
        <MenuItem onClick={changeGraph} id={data['messagesOut']}>
          Messages Out
        </MenuItem>
        <MenuItem onClick={changeGraph} id={data['messageRateIn']}>
          Message Rate In
        </MenuItem>
        <MenuItem onClick={changeGraph} id={data['messageRateOut']}>
          Message Rate Out
        </MenuItem>
        <MenuItem onClick={changeGraph} id={data['throughputIn']}>
          Throughput in
        </MenuItem>
        <MenuItem onClick={changeGraph} id={data['throughputOut']}>
          Throughput out
        </MenuItem>
        <MenuItem onClick={changeGraph} id={data['topicsAndSubscriptions']}>
          Topics and Subscriptions
        </MenuItem>
      </Menu>
    </div>
  );
}
