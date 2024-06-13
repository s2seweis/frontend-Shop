import React, { useContext } from 'react';
import { Button, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import { Form } from 'formik';
import { useTheme } from '@mui/material/styles';
import { BasketContext } from '../BasketContext';

const CheckoutStep3 = ({ handleBack, values }) => {
  const theme = useTheme();
  const { basket } = useContext(BasketContext);

  const handleSubmitOrder = () => {
    alert('Order placed successfully!');
    // Place order logic here
  };

  const totalSum = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <Form>
      <Typography variant="h5" gutterBottom sx={{ color: theme.palette.text.primary }}>
        Order Summary
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: theme.palette.text.primary }}>
        <strong>Name:</strong> {values.name}
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: theme.palette.text.primary }}>
        <strong>Address:</strong> {values.address}, {values.city}, {values.postalCode}, {values.country}
      </Typography>
      <Typography variant="body1" gutterBottom sx={{ color: theme.palette.text.primary }}>
        <strong>Payment Method:</strong> {values.paymentMethod}
      </Typography>
      
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom sx={{ color: theme.palette.text.primary }}>
          Basket Summary
        </Typography>
        {basket.length === 0 ? (
          <Typography variant="body1" sx={{ color: theme.palette.text.primary }}>Your basket is empty.</Typography>
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
                </TableRow>
              </TableHead>
              <TableBody>
                {basket.map((item, index) => (
                  <TableRow key={index}>
                    <TableCell>{item.name}</TableCell>
                    <TableCell>{item.description}</TableCell>
                    <TableCell align="right">${item.price.toFixed(2)}</TableCell>
                    <TableCell align="center">{item.quantity}</TableCell>
                    <TableCell align="right">${(item.price * item.quantity).toFixed(2)}</TableCell>
                  </TableRow>
                ))}
                <TableRow>
                  <TableCell colSpan={4} align="right">
                    <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>Total:</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6" sx={{ color: theme.palette.text.primary }}>${totalSum.toFixed(2)}</Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>
      
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: 2 }}>
        <Button variant="contained" color="primary" onClick={handleBack}>
          Back
        </Button>
        <Button variant="contained" color="primary" onClick={handleSubmitOrder}>
          Place Order
        </Button>
      </Box>
    </Form>
  );
};

export default CheckoutStep3;
