import React, { useState } from 'react';
import { Box, Container, Typography, Button, Grid, useMediaQuery, useTheme } from '@mui/material';
import { keyframes } from '@emotion/react';
import { NavLink } from 'react-router-dom';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LandingPage1 = () => {
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        background: theme.palette.mode === 'dark' ? 'linear-gradient(to right, #121212, #424242)' : 'linear-gradient(to right, #1976d2, #42a5f5)',
        padding: { xs: '20px', md: '60px' },
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, pt: 8 }}>
        <Typography
          variant="h2"
          align="center"
          gutterBottom
          sx={{ fontWeight: 'bold', color: '#fff', animation: `${fadeIn} 2s ease-in` }}
        >
          Welcome to General Luna Shop
        </Typography>
        <Typography
          variant="h5"
          align="center"
          gutterBottom
          sx={{ mb: 3, color: '#fff', animation: `${fadeIn} 2s ease-in`, animationDelay: '0.5s' }}
        >
          Your One-Stop Shop for Sustainable Products
        </Typography>
        <Box
          component="img"
          src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
          alt="Banner"
          sx={{
            width: '100%',
            height: { xs: '200px', md: '400px' },
            mb: 6,
            borderRadius: 2,
            animation: `${fadeIn} 2s ease-in`,
            animationDelay: '1s',
            objectFit: 'cover',
          }}
        />
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="body1"
            align="center"
            sx={{ color: '#fff', animation: `${fadeIn} 2s ease-in`, animationDelay: '1.5s' }}
          >
            At General Luna Shop, we believe in providing high-quality products that are eco-friendly and sustainable. Our mission is to create a positive impact on the environment by offering products that are made from renewable resources and produced in an environmentally responsible way.
          </Typography>
          {showMore && (
            <Typography
              variant="body1"
              align="center"
              sx={{ color: '#fff', mt: 2, animation: `${fadeIn} 2s ease-in`, animationDelay: '2s' }}
            >
              We are committed to reducing our carbon footprint and promoting a greener planet. Our products are carefully selected to ensure they meet our high standards for sustainability and quality. Join us on our journey to make the world a better place, one product at a time.
            </Typography>
          )}
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', mb: 6 }}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            component={NavLink}
            to="/product-list"
            sx={{ mx: 1, animation: `${fadeIn} 2s ease-in`, animationDelay: '2.5s' }}
          >
            Shop Now
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            onClick={handleReadMore}
            sx={{ mx: 1, color: '#fff', borderColor: '#fff', animation: `${fadeIn} 2s ease-in`, animationDelay: '3s' }}
          >
            {showMore ? 'Show Less' : 'Read More'}
          </Button>
        </Box>
        <Box sx={{ mb: 6 }}>
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: '#fff', animation: `${fadeIn} 2s ease-in`, animationDelay: '3.5s' }}
          >
            Featured Product
          </Typography>
          <Grid container spacing={2} justifyContent="center">
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
                alt="Product Image 1"
                sx={{ width: '100%', height: 'auto', animation: `${fadeIn} 2s ease-in`, animationDelay: '4s', borderRadius: 1 }}
              />
            </Grid>
            <Grid item xs={12} sm={6} md={4}>
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
                alt="Product Image 2"
                sx={{ width: '100%', height: 'auto', animation: `${fadeIn} 2s ease-in`, animationDelay: '4.5s', borderRadius: 1 }}
              />
              <Box
                component="img"
                src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
                alt="Product Image 3"
                sx={{
                  width: '100%',
                  mt: 2,
                  display: isSmallScreen ? 'block' : 'none',
                  animation: `${fadeIn} 2s ease-in`,
                  animationDelay: '5s',
                  borderRadius: 1,
                }}
              />
            </Grid>
            {!isSmallScreen && (
              <Grid item md={4}>
                <Box
                  component="img"
                  src="https://upload.wikimedia.org/wikipedia/commons/3/3f/Placeholder_view_vector.svg"
                  alt="Product Image 3"
                  sx={{ width: '100%', height: 'auto', mt: 2, animation: `${fadeIn} 2s ease-in`, animationDelay: '5.5s', borderRadius: 1 }}
                />
              </Grid>
            )}
            <Grid item xs={12} sm={6} md={4} sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
              <Typography
                variant="h6"
                sx={{ color: '#fff', animation: `${fadeIn} 2s ease-in`, animationDelay: '6s' }}
              >
                Our Featured Product is designed to meet your needs while being eco-friendly and sustainable. Enjoy top-notch performance with minimal environmental impact.
              </Typography>
              <Button
                variant="contained"
                color="primary"
                component={NavLink}
                to="/shop"
                sx={{ mt: 2, animation: `${fadeIn} 2s ease-in`, animationDelay: '6.5s' }}
              >
                View Product
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage1;
