import { ActionTypes, CartType } from "@/types/types";
import { create } from "zustand";
import { persist } from "zustand/middleware";

// Initial state for the cart store
const INITIAL_STATE: CartType = {
  products: [],
  totalItems: 0,
  totalPrice: 0,
};

export const useCartstore = create(
  persist<CartType & ActionTypes>(
    (set, get) => ({
      products: INITIAL_STATE.products,
      totalItems: INITIAL_STATE.totalItems,
      totalPrice: INITIAL_STATE.totalPrice,
      addToCart(item) {
        const products = get().products;
        const productInState = products.find(
          (product) => product.id === item.id
        );

        if (productInState) {
          const updatedProducts = products.map((product) =>
            product.id === productInState.id
              ? {
                  ...product, 
                  quantity: product.quantity + item.quantity, 
                  price: product.price + item.price * item.quantity, 
                }
              : product
          );
          set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price * item.quantity,
          }));
        } else {
          set((state) => ({
            products: [...state.products, { ...item, price: item.price * item.quantity }],
            totalItems: state.totalItems + item.quantity,
            totalPrice: state.totalPrice + item.price * item.quantity,
          }));
        }
      },
      removeFromCart(item) {
        const products = get().products;
        const productInState = products.find(
          (product) => product.id === item.id
        );

        if (productInState) {
          const updatedProducts = products.filter(
            (product) => product.id !== item.id
          );
          set((state) => ({
            products: updatedProducts,
            totalItems: state.totalItems - productInState.quantity,
            totalPrice: state.totalPrice - productInState.price,
          }));
        }
      },
    }),
    { name: "cart", skipHydration: true }
  )
);
