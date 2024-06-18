import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { Typography, Container, Box, Button } from '@mui/material';
import categories from '../data/categoriesData'; // Import your categories data
import { BasketContext } from '../BasketContext';

const ProductItemView = () => {
  const { id } = useParams();
  const { addToBasket } = useContext(BasketContext);
  const product = categories
    .flatMap(category => category.items)
    .find(item => item.id === id);

  if (!product) {
    return (
      <Container>
        <Typography variant="h4" component="div" gutterBottom>
          Product not found
        </Typography>
      </Container>
    );
  }

  const handleAddToBasket = () => {
    addToBasket(product);
  };

  return (
    <Container>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', mt: 4 }}>
        <img src={product.imageUrl} alt={product.name} style={{ width: '100%', maxWidth: '500px' }} />
        <Typography variant="h4" component="div" gutterBottom>
          {product.name}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {product.description}
        </Typography>
        <Typography variant="h6" color="text.primary">
          ${product.price}
        </Typography>
        <Button 
          variant="contained" 
          color="primary" 
          onClick={handleAddToBasket} 
          sx={{ mt: 2 }}
        >
          Add to Basket
        </Button>
      </Box>
    </Container>
  );
};

export default ProductItemView;
