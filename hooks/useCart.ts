// hooks/useCart.ts
"use client";

import { useState } from 'react';
import { TShirt } from '@/lib/model';

export const useCart = () => {
  const [cartItems, setCartItems] = useState<number[]>([]);

  const addToCart = (id: number) => {
    setCartItems(prev => prev.includes(id) ? prev : [...prev, id]);
  };

  const removeFromCart = (id: number) => {
    setCartItems(prev => prev.filter(itemId => itemId !== id));
  };

  const isInCart = (id: number) => cartItems.includes(id);

  const getCartCount = () => cartItems.length;

  const clearCart = () => setCartItems([]);

  return {
    cartItems,
    addToCart,
    removeFromCart,
    isInCart,
    getCartCount,
    clearCart
  };
};