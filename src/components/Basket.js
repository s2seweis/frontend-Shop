import React, { useContext, useState, useEffect } from 'react';
import { Typography, IconButton, Box, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Snackbar, Alert } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BasketContext } from '../BasketContext';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const Basket = ({ showCheckoutButton = true }) => {
  const { basket, removeFromBasket, increaseQuantity, decreaseQuantity } = useContext(BasketContext);
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const storedUser = JSON.parse(localStorage.getItem('user'));
    if (storedUser) {
      setUser(storedUser);
    }
  }, []);

  const handleRemoveFromBasket = (index) => {
    removeFromBasket(index);
  };

  const handleSnackbarClose = () => {
    setOpenSnackbar(false);
  };

  const handleProceedToCheckout = () => {
    if (user) {
      navigate('/checkout');
    } else {
      setOpenSnackbar(true);
    }
  };

  const totalSum = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={{height:"91vh"}}>
      <Typography variant="h4" gutterBottom color="textPrimary">
        Basket
      </Typography>
      {basket.length === 0 ? (
        <Typography variant="body1">Your basket is empty.</Typography>
      ) : (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>Description</TableCell>
                <TableCell align="right">Price</TableCell>
                <TableCell align="center">Quantity</TableCell>
                <TableCell align="right">Total</TableCell>
                <TableCell align="center">Actions</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {basket.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.description}</TableCell>
                  <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => decreaseQuantity(item.name)}>
                      <RemoveIcon />
                    </IconButton>
                    {item.quantity}
                    <IconButton onClick={() => increaseQuantity(item.name)}>
                      <AddIcon />
                    </IconButton>
                  </TableCell>
                  <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                  <TableCell align="center">
                    <IconButton onClick={() => handleRemoveFromBasket(index)}>
                      <DeleteIcon />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
              <TableRow>
                <TableCell colSpan={4} align="right"><Typography variant="h6">Total:</Typography></TableCell>
                <TableCell align="right"><Typography variant="h6">${totalSum.toFixed(2)}</Typography></TableCell>
                <TableCell />
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
      )}
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
          <Button
            variant="contained"
            color="secondary"
            onClick={handleProceedToCheckout}
          >
            Proceed to Checkout
          </Button>
        </Box>
      <Snackbar open={openSnackbar} autoHideDuration={6000} onClose={handleSnackbarClose}>
        <Alert onClose={handleSnackbarClose} severity="warning" sx={{ width: '100%' }}>
          You must sign in first to proceed to checkout.
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Basket;
