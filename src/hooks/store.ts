import { create } from "zustand";
import { persist } from "zustand/middleware";
import type { Product } from "../types/products";

export interface CartQuantity extends Product {
  quantity: number;
}

interface Store {
  wishlist: Product[];
  addToWishlist: (item: Product) => void;
  removeFromWishlist: (id: String) => void;
  isInWishlist: (id: String) => boolean;
  cart: CartQuantity[]
  addToCart: (item: Product , q:number) => void;
  removeFromCart:(id:string) => void;
  decreaseQuantity:(id:string) => void;
  clearCart: () => void;
}

export const useStore = create<Store>()(
  persist(
    (set, get) => ({
      wishlist: [],
      cart: [],

      addToCart: (item, q = 1) => set((state) => {
        const existing = state.cart.find(p => p.id === item.id)
        if (existing){
          return {
            cart: state.cart.map((p) => p.id === item.id ? { ...p, quantity: p.quantity + q } : p)

          }
        }
        return { cart: [...state.cart, {...item, quantity: q}] }
      }),
      removeFromCart: (id) => set((state) => {
          const updated = state.cart.filter(item => item.id != id);
          return {cart : updated}
      }),
       decreaseQuantity: (id) => set(state => ({
     

         cart:  state.cart.map(p => {
           if(p.id === id){
           return (p.quantity > 1)?{...p,quantity:p.quantity-1}:p;
           }
           return p;
          }
          )
        
       

      })),
      clearCart: () => set((state) => {
        state.cart.length = 0 ;
        return {cart: state.cart}
      }),

      addToWishlist: (item) =>
        set((state) => {
          if (state.wishlist.find(p => p.id === item.id)) {
            return state;
          } else {
            return { wishlist: [...state.wishlist, item] };
          }
        }),

      removeFromWishlist: (id) =>
        set((state) => ({
          wishlist: state.wishlist.filter(p => p.id !== id)
        })),
      isInWishlist: (id) => {
        const state = get();
        return state.wishlist.some(p => p.id === id);
      }

    }),
    {
      name: 'ecommerce-store'
    }
  )
)