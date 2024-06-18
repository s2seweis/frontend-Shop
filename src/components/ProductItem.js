import React, { useContext } from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Box } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { BasketContext } from '../BasketContext';

const ProductItem = ({ item }) => {
  const { addToBasket } = useContext(BasketContext);
  const navigate = useNavigate();

  const handleAddToBasket = (e) => {
    e.stopPropagation();
    addToBasket(item);
  };

  const handleCardClick = () => {
    navigate(`/shop/${item.id}`);
  };

  return (
    <Card onClick={handleCardClick} sx={{ cursor: 'pointer' }}>
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
