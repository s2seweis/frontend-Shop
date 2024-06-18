// components/Imprint.js
import React from 'react';
import { Container, Typography, Box, useTheme } from '@mui/material';

const Imprint = () => {
  const theme = useTheme();

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <Typography variant="h4" component="div" gutterBottom sx={{ color: theme.palette.text.primary }}>
          Imprint
        </Typography>
        <Box sx={{ mt: 3, width: '100%', maxWidth: '600px' }}>
          <Typography variant="h6" component="div" gutterBottom sx={{ color: theme.palette.text.primary }}>
            Company Information
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{ color: theme.palette.text.secondary }}>
            Company Name: Example Company GmbH
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{ color: theme.palette.text.secondary }}>
            Address: 123 Example Street, 45678 Example City, Country
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{ color: theme.palette.text.secondary }}>
            Phone: +123 456 789 000
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{ color: theme.palette.text.secondary }}>
            Email: info@example.com
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{ color: theme.palette.text.secondary }}>
            Managing Directors: John Doe, Jane Smith
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{ color: theme.palette.text.secondary }}>
            Register Court: Example Court
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{ color: theme.palette.text.secondary }}>
            Company Registration Number: HRB 123456
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{ color: theme.palette.text.secondary }}>
            VAT Identification Number: DE 123456789
          </Typography>
          <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4, color: theme.palette.text.primary }}>
            Disclaimer
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{ color: theme.palette.text.secondary }}>
            The information provided on this website is for general informational purposes only. 
            All information on the Site is provided in good faith, however we make no representation 
            or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, 
            reliability, availability or completeness of any information on the Site.
          </Typography>
          <Typography variant="h6" component="div" gutterBottom sx={{ mt: 4, color: theme.palette.text.primary }}>
            External Links
          </Typography>
          <Typography variant="body1" component="p" gutterBottom sx={{ color: theme.palette.text.secondary }}>
            The Site may contain (or you may be sent through the Site) links to other websites or content 
            belonging to or originating from third parties or links to websites and features in banners 
            or other advertising. Such external links are not investigated, monitored, or checked for 
            accuracy, adequacy, validity, reliability, availability or completeness by us. 
            We do not warrant, endorse, guarantee, or assume responsibility for the accuracy or reliability 
            of any information offered by third-party websites linked through the site or any website or feature 
            linked in any banner or other advertising. 
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Imprint;
