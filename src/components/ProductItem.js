import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { BasketContext } from '../BasketContext';

const ProductItem = ({ item }) => {
  const { addToBasket } = useContext(BasketContext);

  const handleAddToBasket = () => {
    addToBasket(item);
  };

  return (
    <Card>
      <CardMedia
        component="img"
        height="120"
        image={item.imageUrl}
        alt={item.name}
      />
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
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Button variant="contained" color="primary" onClick={handleAddToBasket}>
            Add to Basket
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ProductItem;
