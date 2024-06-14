import React, { createContext, useState, useEffect } from 'react';

export const BasketContext = createContext();

export const BasketProvider = ({ children }) => {
  const [basket, setBasket] = useState(() => {
    // Load basket from local storage or return an empty array
    const savedBasket = localStorage.getItem('basket');
    return savedBasket ? JSON.parse(savedBasket) : [];
  });

  useEffect(() => {
    // Save basket to local storage whenever it changes
    localStorage.setItem('basket', JSON.stringify(basket));
  }, [basket]);

  const addToBasket = (item) => {
    const existingItem = basket.find((basketItem) => basketItem.name === item.name);
    if (existingItem) {
      setBasket(basket.map((basketItem) => 
        basketItem.name === item.name ? { ...basketItem, quantity: basketItem.quantity + 1 } : basketItem
      ));
    } else {
      setBasket([...basket, { ...item, quantity: 1 }]);
    }
  };

  const removeFromBasket = (index) => {
    setBasket((prevBasket) => prevBasket.filter((_, i) => i !== index));
  };

  const increaseQuantity = (name) => {
    setBasket(basket.map((basketItem) =>
      basketItem.name === name ? { ...basketItem, quantity: basketItem.quantity + 1 } : basketItem
    ));
  };

  const decreaseQuantity = (name) => {
    setBasket(basket.map((basketItem) =>
      basketItem.name === name && basketItem.quantity > 1 ? { ...basketItem, quantity: basketItem.quantity - 1 } : basketItem
    ));
  };

  return (
    <BasketContext.Provider value={{ basket, addToBasket, removeFromBasket, increaseQuantity, decreaseQuantity }}>
      {children}
    </BasketContext.Provider>
  );
};
