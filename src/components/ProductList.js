import React from 'react';
import categories from '../data/categoriesData';
import ProductItem from './ProductItem';
import { Typography, Box } from '@mui/material';

const ProductList = () => {
  return (
    <Box sx={{ p: 2 }}>
      {categories.map((category, index) => (
        <Box key={index} sx={{ mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            {category.name}
          </Typography>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: 3,
              '@media (min-width: 1200px)': {
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              },
              '@media (min-width: 600px) and (max-width: 1199px)': {
                gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              },
              '@media (max-width: 599px)': {
                gridTemplateColumns: '1fr',
              },
            }}
          >
            {category.items.map((item, itemIndex) => (
              <Box key={itemIndex} sx={{ p: 1 }}>
                <ProductItem item={item} />
              </Box>
            ))}
          </Box>
        </Box>
      ))}
    </Box>
  );
};

export default ProductList;
