import React, { useState } from 'react';
import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useCookies } from 'react-cookie';

const Auth = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [isLogin, setIsLogin] = useState(true);
  const [error, setError] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  };

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      setError('Make sure passwords match!');
      return;
    }
    const response = await fetch(`http://localhost:8000/${endpoint}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();

    if (data.detail) {
      setError(data.detail);
    } else {
      setCookie('Email', data.email);
      setCookie('AuthToken', data.token);
      window.location.reload();
    }
  };

  return (
    <Container maxWidth="sm">
      <Box mt={5} mb={2}>
        <Typography variant="h4" align="center">
          {isLogin ? 'Log In' : 'Sign Up'}
        </Typography>
      </Box>
      <Box mb={2}>
        <form onSubmit={handleSubmit}>
          <Box mb={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Email"
              type="email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>
          <Box mb={2}>
            <TextField
              fullWidth
              variant="outlined"
              label="Password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>
          {!isLogin && (
            <Box mb={2}>
              <TextField
                fullWidth
                variant="outlined"
                label="Confirm Password"
                type="password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Box>
          )}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            disableElevation
            onClick={(e) => handleSubmit(e, isLogin ? 'login' : 'signup')}
          >
            {isLogin ? 'Log In' : 'Sign Up'}
          </Button>
          {error && (
            <Box mt={2}>
              <Typography color="error">{error}</Typography>
            </Box>
          )}
        </form>
      </Box>
      <Box display="flex" justifyContent="center">
        <Button color="primary" onClick={() => viewLogin(false)}>
          Sign Up
        </Button>
        <Button color="primary" onClick={() => viewLogin(true)}>
          Log In
        </Button>
      </Box>
    </Container>
  );
};

export default Auth;
