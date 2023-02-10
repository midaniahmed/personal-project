import React from 'react';
import { Avatar, Container, Grid, Paper, TextField, Typography, Button } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';
import './Login.css';

export const Login = () => {
  return (
    <Grid className="container">
      <Container className="Login" maxWidth="xs" component={Paper} elevation={5}>
        <div className="input">
          <Avatar>
            <LockIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign In
          </Typography>
          <form>
            <TextField fullWidth autoFocus color="primary" margin="normal" variant="outlined" label="Nickname" name="nickname" />
            <TextField fullWidth type="password" color="primary" margin="normal" variant="outlined" label="Password" />
            <Button fullWidth variant="contained" color="primary">
              Sign In
            </Button>
          </form>
        </div>
      </Container>
    </Grid>
  );
};
