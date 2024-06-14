import React, { useState } from 'react';
import { TextField, Button, Typography, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const users = [
  { username: 'admin', password: 'admin123', role: 'admin' },
  { username: 'user', password: 'user123', role: 'user' },
  // Add more users as needed
];

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showHint, setShowHint] = useState(false);
  const navigate = useNavigate();

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);

    if (user) {
      localStorage.setItem('user', JSON.stringify({ username: user.username, role: user.role }));
      window.location.href = '/home';
    } else {
      setError('Invalid username or password. Please try again.');
    }
  };

  const handleRegisterRedirect = () => {
    navigate('/register');
  };

  const toggleHint = () => {
    setShowHint(!showHint);
  };

  return (
    <Box sx={{ maxWidth: 400, mx: 'auto', mt: 5, p: 3, boxShadow: 3 }}>
      <Typography variant="h4" gutterBottom sx={{ color: 'text.primary' }}>
        Login
      </Typography>
      <TextField
        label="Username"
        variant="outlined"
        fullWidth
        margin="normal"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        fullWidth
        margin="normal"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      {error && <Typography color="error">{error}</Typography>}
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'space-between' }}>
        <Button variant="contained" color="primary" onClick={handleLogin}>
          Login
        </Button>
        <Button variant="outlined" color="secondary" onClick={handleRegisterRedirect}>
          Register
        </Button>
      </Box>
      <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
        <Button variant="text" onClick={toggleHint} sx={{ color: 'primary.main' }}>
          {showHint ? 'Hide Hint' : 'Show Hint'}
        </Button>
      </Box>
      {showHint && (
        <Box sx={{ mt: 2, backgroundColor: 'background.paper', p: 2, borderRadius: 1 }}>
          <Typography variant="subtitle1" gutterBottom sx={{ color: 'text.primary' }}>
            User Credentials:
          </Typography>
          {users.map((user, index) => (
            <Typography key={index} variant="body2" sx={{ color: 'text.secondary' }}>
              Username: {user.username}, Password: {user.password}
            </Typography>
          ))}
        </Box>
      )}
    </Box>
  );
};

export default Login;
