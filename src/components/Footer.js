import React from 'react';
import { Box, Typography, IconButton, useTheme } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const Footer = () => {
  const theme = useTheme();

  return (
    <Box 
      sx={{ 
        bgcolor: theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.primary.main,
        p: 2, 
        mt: 4,
        color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.contrastText
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <Box>
          <Typography variant="body1" component="p">
            <a href="/imprint" style={{ textDecoration: 'none', color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.contrastText }}>
              Imprint
            </a>
          </Typography>
          <Typography variant="body1" component="p">
            <a href="/contact" style={{ textDecoration: 'none', color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.contrastText }}>
              Contact
            </a>
          </Typography>
        </Box>
        <Box>
          <IconButton href="https://www.facebook.com" target="_blank" color="inherit">
            <FacebookIcon sx={{ color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.contrastText }} />
          </IconButton>
          <IconButton href="https://www.instagram.com" target="_blank" color="inherit">
            <InstagramIcon sx={{ color: theme.palette.mode === 'dark' ? theme.palette.text.primary : theme.palette.primary.contrastText }} />
          </IconButton>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
