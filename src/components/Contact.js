// components/ContactPage.js
import React, { useState } from 'react';
import { Box, Container, Typography, TextField, Button, Alert } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const theme = useTheme();

  const handleSubmit = (event) => {
    event.preventDefault();
    // Here you can handle form submission, e.g., send data to your server
    setSubmitted(true);
  };

  return (
    <Container style={{ height: "91vh" }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{
            color: theme.palette.mode === 'dark' ? '#fff' : '#000', // Adjust color based on theme mode
          }}
        >
          Contact Us
        </Typography>
        <Box
          component="form"
          sx={{ mt: 3, width: '100%', maxWidth: '600px' }}
          onSubmit={handleSubmit}
        >
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            value={name}
            onChange={(e) => setName(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            variant="outlined"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Message"
            variant="outlined"
            multiline
            rows={4}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          {submitted && (
            <Alert severity="success" sx={{ mt: 2 }}>
              Thank you for your message! We will get back to you soon.
            </Alert>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Contact;
