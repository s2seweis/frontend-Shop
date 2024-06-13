import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import { Container, CssBaseline, AppBar, Toolbar, Typography, Button, Switch as MuiSwitch, ThemeProvider, createTheme, Badge, IconButton, Drawer, Box, List, ListItem, ListItemText } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import Basket from './components/Basket';
import Checkout from './components/Checkout';
import Login from './components/Login';
import ProductList from './components/ProductList';
import RegisterPage from './components/Register';
import { BasketContext, BasketProvider } from './BasketContext';

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const { basket } = useContext(BasketContext);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const basketQuantity = basket.reduce((acc, item) => acc + item.quantity, 0);

  const toggleDrawer = (open) => () => {
    setIsDrawerOpen(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" sx={{ flexGrow: 1 }}>
              Simple Shop
            </Typography>
            <Button color="inherit" component={NavLink} to="/product-list" exact>
              Home
            </Button>
            <IconButton color="inherit" onClick={toggleDrawer(true)}>
              <Badge badgeContent={basketQuantity} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <Button color="inherit" component={NavLink} to="/checkout">
              Checkout
            </Button>
            <Button color="inherit" component={NavLink} to="/">
              Login
            </Button>
            <MuiSwitch checked={darkMode} onChange={toggleDarkMode} />
          </Toolbar>
        </AppBar>
        <Drawer anchor="right" open={isDrawerOpen} onClose={toggleDrawer(false)}>
          <Box sx={{ width: 350, p: 2 }}>
            <BasketDrawer onClose={toggleDrawer(false)} />
          </Box>
        </Drawer>
        <Container>
          <Routes>
            <Route path="/product-list" element={<ProductList />} />
            <Route path="/basket" element={<Basket showCheckoutButton={false} />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<RegisterPage />} />
          </Routes>
        </Container>
      </Router>
    </ThemeProvider>
  );
};

const BasketDrawer = ({ onClose }) => {
  const { basket, removeFromBasket, increaseQuantity, decreaseQuantity } = useContext(BasketContext);
  const navigate = useNavigate();

  const handleNavigateToBasket = () => {
    onClose();
    navigate('/basket');
  };

  const handleNavigateToCheckout = () => {
    onClose();
    navigate('/checkout');
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
