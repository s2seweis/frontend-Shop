import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, useMediaQuery, useTheme, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import { keyframes } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import categories from '../src/data/categoriesData'; // Import the categories

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LandingPage2 = () => {
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));

  const handleReadMore = () => {
    setShowMore(!showMore);
  };

  useEffect(() => {
    // Simulate a loading process
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);

  // Get the first 4 products from the Shirts category
  const shirts = categories.find(category => category.name === 'Shirts').items.slice(0, 4);

  if (loading) {
    return (
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          minHeight: '100vh',
          background: theme.palette.mode === 'dark' ? 'linear-gradient(to right, #121212, #424242)' : 'linear-gradient(to right, #1976d2, #42a5f5)',
        }}
      >
        <CircularProgress color="inherit" />
      </Box>
    );
  }

  return (
    <Box
      sx={{
        position: 'relative',
        overflow: 'hidden',
        minHeight: '100vh',
        background: theme.palette.mode === 'dark' ? 'linear-gradient(to right, #121212, #424242)' : 'linear-gradient(to right, #1976d2, #42a5f5)',
        padding: { xs: '20px', md: '60px' },
        marginTop: '20px',
        marginBottom: '20px',
      }}
    >
      <Container sx={{ position: 'relative', zIndex: 1, pt: 8 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
              variant="h2"
              align="center"
              gutterBottom
              sx={{ fontWeight: 'bold', color: '#fff', animation: `${fadeIn} 2s ease-in` }}
            >
              Welcome to General Shop
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                left: '-28%',
                top: '50%',
                width: '360px',
                height: '260px',
                background: 'rgb(154 185 219)', // Adjust the color as needed
                zIndex: '-1',
                opacity: 1,
                filter: 'blur(45px)',
              }}
            />
          </Box>
          <Typography
            variant="h5"
            align="center"
            gutterBottom
            sx={{ mb: 3, color: '#fff', animation: `${fadeIn} 2s ease-in`, animationDelay: '0.5s' }}
          >
            Your One-Stop Shop for Sustainable Products
          </Typography>
          <Carousel
            showThumbs={false}
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            interval={3000}
            transitionTime={600}
          >
            {['https://cache.tradeinn.com/images/brand-page/banner_894.jpg',
              'https://www.mainlymaldives.co.uk/wp-content/uploads/2016/09/Surfing-banner.jpg',
              'https://www.cukeragency.com/prodcuker/media/portfolio/2021/03/09/quicksilver_casestudy_responsive_website_mainbanner.jpg'
            ].map((src, index) => (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <Box
                  component="img"
                  src={src}
                  alt={`Banner ${index + 1}`}
                  sx={{
                    width: '100%',
                    height: { xs: '200px', md: '400px' },
                    mb: 6,
                    borderRadius: 2,
                    animation: `${fadeIn} 2s ease-in`,
                    objectFit: 'cover',
                  }}
                />
                <Box
                  sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    textAlign: 'center',
                    color: '#fff',
                  }}
                >
                  <Typography variant="h4" sx={{ mb: 2 }}>
                    Discover Our Products
                  </Typography>
                  <Button
                    variant="contained"
                    color="primary"
                    component={NavLink}
                    to="/shop"
                  >
                    Shop Now
                  </Button>
                </Box>
              </Box>
            ))}
          </Carousel>
        </Box>

        <Box
          sx={{
            mb: 6,
            backgroundColor: '#fff',
            padding: '15px',
            borderRadius: '8px',
            boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          }}
        >
          <Typography
            variant="h4"
            align="center"
            gutterBottom
            sx={{ color: theme.palette.mode === 'dark' ? '#000' : '#1976d2', animation: `${fadeIn} 2s ease-in`, animationDelay: '3.5s' }}
          >
            Featured Products
          </Typography>
          <Grid container spacing={4} justifyContent="center">
            {shirts.map((item, index) => (
              <Grid item xs={12} sm={6} md={3} key={index}>
                <Card sx={{ transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }, animation: `${fadeIn} 2s ease-in`, animationDelay: `${4 + index * 0.5}s` }}>
                  <CardMedia
                    component="img"
                    height="200"
                    image={item.imageUrl}
                    alt={item.name}
                  />
                  <CardContent>
                    <Typography variant="h6" component="div">
                      {item.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {item.description}
                    </Typography>
                    <Button component={NavLink} to="/shop" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                      View Product
                    </Button>
                  </CardContent>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 6 }}>
          <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ color: '#fff', animation: `${fadeIn} 2s ease-in`, animationDelay: '6s' }}
            >
              About General Luna Shop
            </Typography>
            <Box
              sx={{
                position: 'absolute',
                left: '80%',
                top: '50%',
                width: '360px',
                height: '260px',
                background: 'rgb(154 185 219)', // Adjust the color as needed
                zIndex: '-1',
                opacity: 1,
                filter: 'blur(45px)',
              }}
            />
          </Box>
          <Typography
            variant="body1"
            sx={{ color: '#fff', animation: `${fadeIn} 2s ease-in`, animationDelay: '6.5s', mt: 2 }}
          >
            General Luna Shop is dedicated to providing the best products while ensuring minimal environmental impact. Our products are sourced from sustainable materials, and we are committed to reducing waste and promoting a circular economy.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LandingPage2;
