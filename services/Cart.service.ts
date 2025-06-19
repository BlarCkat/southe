import { useState } from "react";
import { TShirt } from "../lib/model";

export interface CartService {
    getCartItems:()=> number[];
    addToCart:(id: number)=> void;
    removeFromCart:(id: number)=>void;
    isInCart:(id: number)=> boolean;
    getCartCount:()=> number;
    clearCart: ()=> void;
}

export const createCartService = (initialCart: number[] = []): CartService => {
    let cartItems = [...initialCart];

    return {
        getCartItems:()=>[...cartItems],
        addToCart: (id: number)=> {
            if (!cartItems.includes(id)) {
                cartItems = [...cartItems, id]
            }
        },
        removeFromCart: (id: number)=>{
            cartItems = cartItems.filter(itemId => itemId !== id);
        },

        isInCart:(id: number) => cartItems.includes(id),

        getCartCount:()=> cartItems.length,

        clearCart:()=> {
            cartItems = [];
        }

    }
}

export const useCartService = ()=>{
    const [cartItems, setCartItems] = useState<number[]>([]);

    return{
        getCartItems: ()=> cartItems,

        addToCart:(id: number)=> {
            setCartItems(previous => previous.includes(id) ? previous : [...previous, id]);
        },
        removeCart:(id: number)=>{
            setCartItems(previous => previous.filter(itemId => itemId !== id));
        },
        isInCart:(id: number) => cartItems.includes(id),
        getCartCount:()=> cartItems.length,

        clearCart:()=>{
            setCartItems([]);
        }


    };
}