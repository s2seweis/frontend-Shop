// Import React and other necessary modules
import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Button, Grid, useTheme, Card, CardMedia, CardContent, CircularProgress } from '@mui/material';
import { keyframes } from '@emotion/react';
import { NavLink } from 'react-router-dom';
import categories from '../src/data/categoriesData'; // Import the categories
import video from '../src/data/waves.mp4'; // Import the video file
// import video from '../src/data/bunny.mp4'; // Import the video file

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const LandingPage1 = () => {
  const [loading, setLoading] = useState(true);
  const theme = useTheme();

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000); // Adjust the timeout as needed
  }, []);

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
    <Box sx={{ overflow: 'hidden', minHeight: '100vh', marginTop: '20px' }}>
      <Box
        sx={{
          height: '91vh',
          position: 'relative',
          background: theme.palette.mode === 'dark' ? 'linear-gradient(to right, #121212, #424242)' : 'linear-gradient(to right, #1976d2, #42a5f5)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '20px'
        }}
      >
        {/* <video
          autoPlay
          loop
          muted
          playsInline
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            zIndex: -1,
          }}
        >
          <source src={video} type="video/mp4" />
        </video> */}

        <video style={{ position: "absolute", objectFit: "cover", height: "100%" }} className="hero-video" autoPlay loop muted>
          <source src={video} type="video/mp4" />
          Your browser does not support the video tag.
        </video>


        <Container sx={{ position: 'relative', zIndex: 1, pt: 8 }}>
          <Box
            sx={{
              marginBottom: '20px',
              padding: '20px',
              borderRadius: '8px',
              textAlign: 'center',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mb: 6 }}>
              <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography
                  variant="h3"
                  align="center"
                  gutterBottom
                  sx={{ fontWeight: 'bold', color: theme.palette.mode === 'dark' ? '#fff' : '#000', animation: `${fadeIn} 2s ease-in` }}
                >
                  General Luna Shop
                </Typography>
                <Box
                  sx={{
                    position: 'absolute',
                    left: '-28%',
                    top: '50%',
                    width: '360px',
                    height: '260px',
                    background: 'rgb(154 185 219)',
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
                sx={{ mb: 3, color: theme.palette.mode === 'dark' ? '#fff' : '#000', animation: `${fadeIn} 2s ease-in`, animationDelay: '0.5s' }}
              >
                Your Shop for the good days
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
        </Container>
      </Box>

      <Box
        sx={{
          background: theme.palette.mode === 'dark' ? 'linear-gradient(to right, #121212, #424242)' : 'linear-gradient(to right, #1976d2, #42a5f5)',
          padding: { xs: '20px', md: '60px' },
          marginBottom: '20px',
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              marginBottom: '20px',
              backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
              padding: '20px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              position: 'relative'
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#1976d2', animation: `${fadeIn} 2s ease-in`, animationDelay: '3.5s' }}
            >
              Featured Products
            </Typography>
            <Grid container spacing={4} justifyContent="center">
              {shirts.map((item, index) => (
                <Grid item xs={12} sm={6} md={3} key={index}>
                  <Card sx={{ backgroundColor: theme.palette.mode === 'dark' ? '#424242' : '#fff', transition: 'transform 0.3s', '&:hover': { transform: 'scale(1.05)' }, animation: `${fadeIn} 2s ease-in`, animationDelay: `${4 + index * 0.5}s` }}>
                    <CardMedia
                      component="img"
                      height="200"
                      image={item.imageUrl}
                      alt={item.name}
                    />
                    <CardContent>
                      <Typography variant="h6" component="div" sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000' }}>
                        {item.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary" sx={{ color: theme.palette.mode === 'dark' ? '#ddd' : '#000' }}>
                        {item.description}
                      </Typography>
                      {/* <Button component={NavLink} to="/shop" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        View Product
                      </Button> */}
                      <Button component={NavLink} to={`/shop/${item.id}`} variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
                        View Product
                      </Button>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
            <Box
              sx={{
                position: 'absolute',
                right: '54%',
                bottom: '0%',
                width: '360px',
                height: '80%',
                background: 'rgb(154 185 219)',
                zIndex: '-1',
                opacity: 1,
                filter: 'blur(45px)',
              }}
            />
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          background: theme.palette.mode === 'dark' ? 'linear-gradient(to right, #121212, #424242)' : 'linear-gradient(to right, #1976d2, #42a5f5)',
          padding: { xs: '20px', md: '60px' },
          marginBottom: "20px"
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              marginBottom: '20px',
              backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
              padding: '20px',
              borderRadius: '8px',
            }}
          >
            <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: "20px" }}>
              <Box sx={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center', marginBottom: "20px" }}>
                <Typography
                  variant="h4"
                  align="center"
                  gutterBottom
                  sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000', animation: `${fadeIn} 2s ease-in`, animationDelay: '6s' }}
                >
                  About General Shop
                </Typography>
                <Box
                  sx={{
                    position: 'absolute',
                    left: '80%',
                    top: '50%',
                    width: '360px',
                    height: '260px',
                    background: 'rgb(154 185 219)',
                    zIndex: '-1',
                    opacity: 1,
                    filter: 'blur(45px)',
                  }}
                />
              </Box>
              <Typography
                variant="body1"
                sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#000', animation: `${fadeIn} 2s ease-in`, animationDelay: '6.5s', mt: 2 }}
              >
                General Shop is dedicated to providing the best products while ensuring minimal environmental impact. Our products are sourced from sustainable materials, and we are committed to reducing waste and promoting a circular economy.
              </Typography>
            </Box>
          </Box>
        </Container>
      </Box>

      <Box
        sx={{
          background: theme.palette.mode === 'dark' ? 'linear-gradient(to right, #121212, #424242)' : 'linear-gradient(to right, #1976d2, #42a5f5)',
          padding: { xs: '20px', md: '60px' },
          marginBottom: '20px',
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 1 }}>
          <Box
            sx={{
              marginBottom: '20px',
              backgroundColor: theme.palette.mode === 'dark' ? '#333' : '#fff',
              padding: '20px',
              borderRadius: '8px',
              position: 'relative',
              textAlign: 'center',
            }}
          >
            <Typography
              variant="h4"
              align="center"
              gutterBottom
              sx={{ color: theme.palette.mode === 'dark' ? '#fff' : '#1976d2', animation: `${fadeIn} 2s ease-in`, animationDelay: '7s' }}
            >
              Sale - Up to 30% Off!
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mb: 3 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://www.mainlymaldives.co.uk/wp-content/uploads/2016/09/Surfing-banner.jpg" // Replace with a relevant sale image
                alt="Sale Image"
                sx={{ borderRadius: '8px', animation: `${fadeIn} 2s ease-in`, animationDelay: '7.5s' }}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              component={NavLink}
              to="/shop"
              sx={{ mt: 2, animation: `${fadeIn} 2s ease-in`, animationDelay: '8s' }}
            >
              Shop Now
            </Button>
          </Box>
        </Container>
      </Box>
    </Box>
  );
};

export default LandingPage1;
