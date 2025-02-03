"use client";

import { addItemToCart, fetchCartItems, removeItemFromCart } from "@/services/cart";
import { CartType } from "@/types/cart";

import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";

const CartContext = createContext({});

export const useCartContext = () => {
  return useContext(CartContext);
};

export const CartProvider = ({ children }: { children: ReactNode }) => {
  
  const [dynamicCartItems, setDynamicCartItems] = useState<CartType[]>([]);

  useEffect(() => {
    const loadCartItems = async () => {
      const cartItems:CartType[] = await fetchCartItems();
      setDynamicCartItems(cartItems);
    };

    loadCartItems();
  }, []);

  const addToCart = async (item: CartType) => {
    const isItemInCart = dynamicCartItems.find(
      (cartItem: CartType) => cartItem.productId === item.productId
    );

    if (isItemInCart) {
      setDynamicCartItems(
        dynamicCartItems.map(
          (
            cartItem: CartType // if the item is already in the cart, increase the quantity of the item
          ) =>
            cartItem.productId === item.productId
              ? { ...cartItem, quantity: item.quantity + 1 }
              : cartItem // otherwise, return the cart item
        )
      );
    } else {
      await addItemToCart(item);
      setDynamicCartItems([...dynamicCartItems, { ...item, quantity: 1 }]); // if the item is not in the cart, add the item to the cart
    }
  };

  const removeFromCart = async (item: CartType) => {
    const isItemInCart = dynamicCartItems.find(
      (cartItem: CartType) => cartItem.productId === item.productId
    );

    if (isItemInCart && isItemInCart.quantity === 1) {
      setDynamicCartItems(
        dynamicCartItems.filter(
          (cartItem: CartType) => cartItem.productId !== item.productId
        )
      );

     await removeItemFromCart(item._id!);
    } else {
      setDynamicCartItems(
        dynamicCartItems.map((cartItem: CartType) =>
          cartItem.productId === item.productId
            ? { ...cartItem, quantity: cartItem.quantity - 1 }
            : cartItem
        )
      );
    }
  };

  const clearCart = () => {
    setDynamicCartItems([]);
  };

  const getCartTotal = () => {
    return dynamicCartItems.reduce(
      (total: number, item: CartType) => total + item.price * item.quantity,
      0
    );
  };

  const values = {
    addToCart,
    dynamicCartItems,
    getCartTotal,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};