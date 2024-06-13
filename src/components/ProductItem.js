import React, { useContext } from 'react';
import { Card, CardContent, Typography, Button } from '@mui/material';
import { BasketContext } from '../BasketContext';

const ProductItem = ({ item }) => {
  const { addToBasket } = useContext(BasketContext);

  const handleAddToBasket = () => {
    addToBasket(item);
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {item.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {item.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${item.price}
        </Typography>
        <Button variant="contained" color="primary" onClick={handleAddToBasket}>
          Add to Basket
        </Button>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
