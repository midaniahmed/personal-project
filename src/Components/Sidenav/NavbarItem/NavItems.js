import React from 'react';
import { useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

import Person3Icon from '@mui/icons-material/Person3';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import MuiListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsIcon from '@mui/icons-material/Settings';
import DashboardIcon from '@mui/icons-material/Dashboard';
import './NavItems.css';

export const NavItems = ({ open }) => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/login');

  const items = [
    {
      icon: <Person3Icon />,
      path: '/profile',
      label: 'Profile',
    },
    { icon: <DashboardIcon />, path: '/', label: 'Dashboard' },
    { icon: <SettingsIcon />, path: '/setting', label: 'Setting' },
  ];

  const ListItem = ({ icon, label, open, path }) => (
    <Link to={path} style={{ textDecoration: 'none', color: '#757575' }}>
      <ListItemButton
        onClick={handleClick}
        sx={{
          minHeight: 48,
          justifyContent: open ? 'initial' : 'center',
          px: 2.5,
        }}
      >
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: open ? 3 : 'auto',
            justifyContent: 'center',
          }}
        >
          {icon}
        </ListItemIcon>
        <ListItemText primary={label} sx={{ opacity: open ? 1 : 0 }} />
      </ListItemButton>
    </Link>
  );

  return (
    <div className="items">
      <List style={{ flex: '1' }}>
        <MuiListItem disablePadding sx={{ display: 'block', flex: '1' }}>
          {items.map((item) => (
            <ListItem icon={item.icon} label={item.label} path={item.path} open={open} />
          ))}
        </MuiListItem>
      </List>
      <Divider />
      <MuiListItem disablePadding sx={{ display: 'block', flex: '0' }}>
        <ListItemButton
          onClick={handleClick}
          sx={{
            minHeight: 48,
            justifyContent: open ? 'initial' : 'center',
            px: 2.5,
          }}
        >
          <ListItemIcon
            sx={{
              minWidth: 0,
              mr: open ? 3 : 'auto',
              justifyContent: 'center',
            }}
          >
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Log Out" sx={{ opacity: open ? 1 : 0 }} />
        </ListItemButton>
      </MuiListItem>
    </div>
  );
};
