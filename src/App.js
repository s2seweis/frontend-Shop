// App.js
import React, { useState, useContext, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import {
  Container, CssBaseline, AppBar, Toolbar, Typography, Button, Switch as MuiSwitch, ThemeProvider,
  createTheme, Badge, IconButton, Drawer, Box, List, ListItem, ListItemText, useMediaQuery, FormControl,
  InputLabel, Select, MenuItem, Menu, Snackbar, Alert
} from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import LoginIcon from '@mui/icons-material/Login';
import MenuIcon from '@mui/icons-material/Menu';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import Login from './components/Login';
import ProductList from './components/ProductList';
import RegisterPage from './components/Register';
import { BasketContext } from './BasketContext';
import LandingPage1 from './LandingPageV1';
import withLoader from './hoc/withLoader';
import { LoadingProvider } from './hoc/LoadingContext';
import SideMenu from './components/SideMenu';
import Footer from './components/Footer';
import ProductItemView from './components/ProductItemView';
import Contact from './components/Contact';
import Imprint from './components/Imprint';

const LandingPage1WithLoader = withLoader(LandingPage1);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isBasketDrawerOpen, setIsBasketDrawerOpen] = useState(false);
  const [isMenuDrawerOpen, setIsMenuDrawerOpen] = useState(false);
  const [navSelection, setNavSelection] = useState('');
  const [anchorEl, setAnchorEl] = useState(null);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const { basket } = useContext(BasketContext);
  const isSmallScreen = useMediaQuery('(max-width:600px)');
  const isLargeScreen = useMediaQuery('(min-width:600px)');
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const basketQuantity = basket.reduce((acc, item) => acc + item.quantity, 0);

  const toggleBasketDrawer = (open) => () => {
    setIsBasketDrawerOpen(open);
  };

  const toggleMenuDrawer = (open) => () => {
    setIsMenuDrawerOpen(open);
  };

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setUser(null);
    handleMenuClose();
    window.location.href = '/'; // Redirect to the login page
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  return (
    <ThemeProvider theme={theme}>
      <LoadingProvider>
        <CssBaseline />
        <Router>
          <AppBar position="static">
            <Toolbar>
              {isSmallScreen && (
                <IconButton style={{ marginRight: "35px" }} edge="start" color="inherit" onClick={toggleMenuDrawer(true)}>
                  <MenuIcon />
                </IconButton>
              )}
              {isLargeScreen && (
                <Typography variant="h6" sx={{ flexGrow: 1 }} component={NavLink} to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                  General Luna Shop
                </Typography>
              )}
              <FormControl sx={{ m: 1, minWidth: 120 }} variant="outlined">
                <InputLabel id="nav-select-label" sx={{ color: 'inherit' }}>Navigate</InputLabel>
                <Select
                  labelId="nav-select-label"
                  id="nav-select"
                  value={navSelection}
                  onChange={(event) => setNavSelection(event.target.value)}
                  label="Navigate"
                  sx={{ color: 'inherit' }}
                >
                  <MenuItem component={NavLink} value="home" to="/">Home</MenuItem>
                  <MenuItem component={NavLink} value="shop" to="/shop">Shop</MenuItem>
                  <MenuItem component={NavLink} value="login" to="/login">Login</MenuItem>
                  <MenuItem component={NavLink} value="contact" to="/contact">Contact</MenuItem>
                </Select>
              </FormControl>
              <IconButton color="inherit" onClick={toggleBasketDrawer(true)}>
                <Badge badgeContent={basketQuantity} color="secondary">
                  <ShoppingCartIcon />
                </Badge>
              </IconButton>
              <IconButton color="inherit" onClick={handleMenuClick}>
                <AccountCircleIcon />
              </IconButton>
              <Menu
                anchorEl={anchorEl}
                open={Boolean(anchorEl)}
                onClose={handleMenuClose}
              >
                {user ? (
                  <>
                    <MenuItem>
                      <AccountCircleIcon />
                      <Typography variant="body1" sx={{ ml: 1 }}>
                        {user.username}
                      </Typography>
                    </MenuItem>
                    <MenuItem onClick={handleSignOut}>
                      <LogoutIcon />
                      <Typography variant="body1" sx={{ ml: 1 }}>
                        Signout
                      </Typography>
                    </MenuItem>
                  </>
                ) : (
                  <MenuItem component={NavLink} to="/login" onClick={handleMenuClose}>
                    <LoginIcon />
                    <Typography variant="body1" sx={{ ml: 1 }}>
                      Login
                    </Typography>
                  </MenuItem>
                )}
              </Menu>
              <MuiSwitch checked={darkMode} onChange={toggleDarkMode} />
            </Toolbar>
          </AppBar>
          <Drawer anchor="right" open={isBasketDrawerOpen} onClose={toggleBasketDrawer(false)}>
            <Box sx={{ width: 350, p: 2 }}>
              <BasketDrawer onClose={toggleBasketDrawer(false)} user={user} setOpenSnackbar={setOpenSnackbar} />
            </Box>
          </Drawer>
          <Drawer anchor="left" open={isMenuDrawerOpen} onClose={toggleMenuDrawer(false)}>
            <Box sx={{ width: 250, p: 2 }}>
              <SideMenu onClose={toggleMenuDrawer(false)} />
            </Box>
          </Drawer>
          <Container>
            <Routes>
              <Route path="/shop" element={<ProductList />} />
              <Route path="/basket" element={<Basket showCheckoutButton={false} />} />
              <Route path="/checkout" element={<Checkout />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/" element={<LandingPage1WithLoader />} />
              <Route path="/shop/:id" element={<ProductItemView />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/imprint" element={<Imprint />} />
            </Routes>
          </Container>
          <Footer />
        </Router>
        <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
          <Alert onClose={handleSnackbarClose} severity="warning" sx={{ width: '100%' }}>
            You must sign in first to proceed to checkout.
          </Alert>
        </Snackbar>
      </LoadingProvider>
    </ThemeProvider>
  );
};

const BasketDrawer = ({ onClose, user, setOpenSnackbar }) => {
  const navigate = useNavigate();
  const { basket, removeFromBasket, increaseQuantity, decreaseQuantity } = useContext(BasketContext);

  const handleNavigateToBasket = () => {
    onClose();
    navigate('/basket');
  };

  const handleNavigateToCheckout = () => {
    if (user) {
      onClose();
      navigate('/checkout');
    } else {
      setOpenSnackbar(true);
    }
  };

  const totalSum = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Typography variant="h4" gutterBottom>
        Basket
      </Typography>
      {basket.length === 0 ? (
        <Typography variant="body1">Your basket is empty.</Typography>
      ) : (
        <div>
          <List>
            {basket.map((item, index) => (
              <ListItem key={index} sx={{ display: 'flex', alignItems: 'center' }}>
                <ListItemText primary={item.name} secondary={`$${item.price}`} />
                <IconButton onClick={() => decreaseQuantity(item.name)}>
                  <RemoveIcon />
                </IconButton>
                <Typography variant="body2" sx={{ mx: 2 }}>{item.quantity}</Typography>
                <IconButton onClick={() => increaseQuantity(item.name)}>
                  <AddIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => removeFromBasket(index)}>
                  <DeleteIcon />
                </IconButton>
              </ListItem>
            ))}
          </List>
          <Typography variant="h6" sx={{ mt: 2 }}>
            Total: ${totalSum.toFixed(2)}
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
            <Button variant="contained" color="primary" onClick={handleNavigateToBasket}>
              View Basket
            </Button>
            <Button variant="contained" color="secondary" onClick={handleNavigateToCheckout}>
              Checkout
            </Button>
          </Box>
        </div>
      )}
    </div>
  );
};

export default App;
