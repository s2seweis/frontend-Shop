import React, { useState } from 'react';
import categoriesData from '../data/categoriesData';
import ProductItem from './ProductItem';
import { Typography, Box, Select, MenuItem, FormControl, InputLabel, TextField } from '@mui/material';

const ProductList = () => {
  const [selectedCategory, setSelectedCategory] = useState('Shirts');
  const [sortOrder, setSortOrder] = useState('asc');
  const [selectedGender, setSelectedGender] = useState('');
  const [searchQuery, setSearchQuery] = useState('');

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleSortChange = (event) => {
    setSortOrder(event.target.value);
  };

  const handleGenderChange = (event) => {
    setSelectedGender(event.target.value);
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const sortedItems = categoriesData
    .find(category => category.name === selectedCategory)
    .items.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()) && (selectedGender === '' || item.gender === selectedGender))
    .sort((a, b) => {
      if (sortOrder === 'asc') {
        return a.price - b.price;
      } else {
        return b.price - a.price;
      }
    });

  return (
    <Box sx={{ p: 2 }}>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Category</InputLabel>
        <Select value={selectedCategory} onChange={handleCategoryChange}>
          {categoriesData.map((category, index) => (
            <MenuItem key={index} value={category.name}>
              {category.name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Sort By Price</InputLabel>
        <Select value={sortOrder} onChange={handleSortChange}>
          <MenuItem value="asc">Ascending</MenuItem>
          <MenuItem value="desc">Descending</MenuItem>
        </Select>
      </FormControl>
      <FormControl fullWidth sx={{ mb: 2 }}>
        <InputLabel>Filter By Gender</InputLabel>
        <Select value={selectedGender} onChange={handleGenderChange}>
          <MenuItem value="">All</MenuItem>
          <MenuItem value="men">Men</MenuItem>
          <MenuItem value="women">Women</MenuItem>
        </Select>
      </FormControl>
      <TextField
        fullWidth
        sx={{ mb: 2 }}
        label="Search"
        variant="outlined"
        value={searchQuery}
        onChange={handleSearchChange}
      />
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          {selectedCategory}
        </Typography>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(3, 1fr)',
              xl: 'repeat(3, 1fr)',
            },
            gap: 3,
          }}
        >
          {sortedItems.map((item, itemIndex) => (
            <Box key={itemIndex} sx={{ p: 1 }}>
              <ProductItem item={item} />
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
};

export default ProductList;
