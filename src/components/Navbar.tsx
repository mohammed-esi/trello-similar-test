import React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import DashboardIcon from '@mui/icons-material/Dashboard';

const Navbar: React.FC = () => {
  return (
    <AppBar
      position='static'
      sx={{
        backgroundColor: 'white',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        mb: 5,
      }}
    >
      <Toolbar>
        <IconButton
          edge='start'
          aria-label='menu'
          sx={{ mr: 2, color: 'black' }}
        >
          <DashboardIcon />
        </IconButton>
        <Typography variant='h6' sx={{ flexGrow: 1, color: 'black' }}>
          Trello Clone
        </Typography>
        <Button
          sx={{ color: 'black' }}
          onClick={() => window.open('https://trello.com', '_blank')}
        >
          Trello
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
