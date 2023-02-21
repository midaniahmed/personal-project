import React, { startTransition, useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Paper from '@mui/material/Paper';
import TableBody from '@mui/material/TableBody';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Search } from '@mui/icons-material';
import { Grid, Table, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import './dshboard.css';
const User = [
  {
    id: '4',
    firstname: 'Ahmed',
    lastname: 'midani',
    image: 'https://xsgames.co/randomusers/assets/avatars/pixel/22.jpg',
    birthday: '01/02/1995',
  },
  {
    id: '3',
    firstname: 'Mohamed',
    lastname: 'midani',
    image: 'https://xsgames.co/randomusers/assets/avatars/pixel/15.jpg',
    birthday: '01/07/1997',
  },
  {
    id: '1',
    firstname: 'Hamza',
    lastname: 'midani',
    image: 'https://xsgames.co/randomusers/assets/avatars/pixel/13.jpg',
    birthday: '01/07/1990',
  },
  {
    id: '2',
    firstname: 'Youssef',
    lastname: 'khlifi',
    image: 'https://xsgames.co/randomusers/assets/avatars/pixel/29.jpg',
    birthday: '01/0/1991',
  },
  {
    id: '5',
    firstname: 'Iyed',
    lastname: 'manaa',
    image: 'https://xsgames.co/randomusers/assets/avatars/pixel/52.jpg',
    birthday: '02/04/1990',
  },
  {
    id: '6',
    firstname: 'Haythem',
    lastname: 'akkari',
    image: 'https://xsgames.co/randomusers/assets/avatars/pixel/14.jpg',
    birthday: '01/05/1995',
  },
  {
    id: '7',
    firstname: 'Ala',
    lastname: 'snoussi',
    image: 'https://xsgames.co/randomusers/assets/avatars/pixel/34.jpg',
    birthday: '01/05/1997',
  },
  {
    id: '8',
    firstname: 'Mouadh',
    lastname: 'khlifi',
    image: 'https://xsgames.co/randomusers/assets/avatars/pixel/35.jpg',
    birthday: '01/05/1991',
  },
  {
    id: '9',
    firstname: 'ABD Jlile',
    lastname: 'midani',
    image: 'https://xsgames.co/randomusers/assets/avatars/pixel/36.jpg',
    birthday: '01/05/1991',
  },
  {
    id: '10',
    firstname: 'Omar',
    lastname: 'slty',
    image: 'https://xsgames.co/randomusers/assets/avatars/pixel/38.jpg',
    birthday: '01/05/1991',
  },
];

export const Dashboard = () => {
  const [editUser, setEditUser] = useState('');
  const [idDeleteUser, setDeleteUser] = useState('');
  const [openModal, setOpenModal] = useState(false);
  const [openDeleteModal, setOpenDeleteModal] = useState(false);

  const [modeSelected, setModeSelected] = useState('Add');

  const onEditUser = (user) => {
    startTransition(() => {
      setEditUser(user);
      setOpenModal(true);
      setModeSelected('Modify');
    });
  };

  const onDeleteUser = (user) => {
    setOpenDeleteModal(true);
    setDeleteUser(user);
  };

  return (
    <div className="dashboard" style={{ backgroundColor: '#ECECEC' }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'flex-start' }}>
        <Box>
          <Search sx={{ color: 'crimson', mr: 1, my: 2.8 }} />
          <TextField label="Search" variant="standard" sx={{ color: 'green' }} />
        </Box>
      </div>
      <Grid container className="user-items">
        <Grid item>
          <TableContainer component={Paper}>
            <Table sx={{ bgcolor: '' }} aria-label="caption table">
              <TableHead>
                <TableRow>
                  <TableCell align="center">Picture</TableCell>
                  <TableCell align="center">First Name</TableCell>
                  <TableCell align="center">Last Name</TableCell>
                  <TableCell align="center">Birthday</TableCell>
                  <TableCell align="center">Acions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {User.map((User) => {
                  return (
                    <TableRow key={User.id}>
                      <TableCell align="center">
                        <img src={User.image} alt="" className="image-table" />
                      </TableCell>
                      <TableCell align="center">{User.firstname}</TableCell>
                      <TableCell align="center">{User.lastname}</TableCell>
                      <TableCell align="center">{User.birthday}</TableCell>
                      <TableCell align="center">
                        <div className="icons-last-cell">
                          <IconButton aria-label="delete" onClick={() => onEditUser(User)}>
                            <EditIcon />
                          </IconButton>
                          <IconButton key={User.id} aria-label="delete" onClick={() => onDeleteUser(User)}>
                            <DeleteIcon />
                          </IconButton>
                        </div>
                      </TableCell>
                    </TableRow>
                  );
                })}
              </TableBody>
            </Table>
          </TableContainer>
        </Grid>
      </Grid>
    </div>
  );
};
