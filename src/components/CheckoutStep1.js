import React, { useContext } from 'react';
import { TextField, Button, Box, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, IconButton } from '@mui/material';
import { Field, Form, ErrorMessage, useFormikContext } from 'formik';
import { useTheme } from '@mui/material/styles';
import { BasketContext } from '../BasketContext';
import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const CheckoutStep1 = ({ handleNext }) => {
  // const theme = useTheme();
  const { basket, removeFromBasket, increaseQuantity, decreaseQuantity } = useContext(BasketContext);
  const { isValid, dirty } = useFormikContext();

  const handleRemoveFromBasket = (index) => {
    removeFromBasket(index);
  };

  const totalSum = basket.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div>
      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom color="textPrimary">
          Basket Summary
        </Typography>
        {basket.length === 0 ? (
          <Typography variant="body1" color="textPrimary">Your basket is empty.</Typography>
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
                  <TableCell colSpan={4} align="right">
                    <Typography variant="h6" color="textPrimary">Total:</Typography>
                  </TableCell>
                  <TableCell align="right">
                    <Typography variant="h6" color="textPrimary">${totalSum.toFixed(2)}</Typography>
                  </TableCell>
                  <TableCell />
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </Box>

      <Box sx={{ mt: 4 }}>
        <Typography variant="h5" gutterBottom color="textPrimary">
          Delivery Information
        </Typography>
        <Form>
          <Box sx={{ mb: 2 }}>
            <Field
              name="name"
              as={TextField}
              label="Full Name"
              fullWidth
              helperText={<ErrorMessage name="name" />}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Field
              name="address"
              as={TextField}
              label="Delivery Address"
              fullWidth
              helperText={<ErrorMessage name="address" />}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Field
              name="city"
              as={TextField}
              label="City"
              fullWidth
              helperText={<ErrorMessage name="city" />}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Field
              name="postalCode"
              as={TextField}
              label="Postal Code"
              fullWidth
              helperText={<ErrorMessage name="postalCode" />}
            />
          </Box>
          <Box sx={{ mb: 2 }}>
            <Field
              name="country"
              as={TextField}
              label="Country"
              fullWidth
              helperText={<ErrorMessage name="country" />}
            />
          </Box>
          <Box sx={{ display: 'flex', justifyContent: 'flex-end', mt: 2 }}>
            <Button style={{ marginBottom: "15px" }} variant="contained" color="primary" onClick={handleNext} disabled={!isValid || !dirty}>
              Next
            </Button>
          </Box>
        </Form>
      </Box>
    </div>
  );
};

export default CheckoutStep1;
