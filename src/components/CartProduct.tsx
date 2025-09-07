import React, { useState } from 'react'
import type { Product } from '../types/products'
import type { CartQuantity } from '../hooks/store'
import { Delete, DeleteIcon, LucideDelete, Minus, Plus, Trash } from 'lucide-react';
import { useStore } from '../hooks/store';
interface cartItemsType {
  item: CartQuantity;
}
const CartProduct = ({ item }: cartItemsType) => {


  const { removeFromCart, addToCart, cart, decreaseQuantity } = useStore();
  const quantity = cart.find(p => p.id === item.id)?.quantity;

  const handleQuantity = (value: number) => {
    if (value > 0) {

      addToCart(item);
    }

    if (value < 0) {
      decreaseQuantity(item.id);
    }
  }

  const handleRemoveFromCart = () => {
    removeFromCart(item.id);
  }
  return (
    <div className=' flex  flex-col bg-white lg:flex-row shadow-lg shadow-[hsl(272deg,50.22%,92.42%)] rounded-lg gap-4 p-7 items-center justify-center hover:shadow-2xl hover:shadow-[hsl(272deg,55.32%,89.42%)] transition-all duration-300 '>
      <div className=''>
        <img src={item.image} alt={item.name} className='w-35 aspect-square rounded-xl' />
      </div>
      <div className='lg:w-[620px] w-full space-y-1 '>
        <h1 className='text-lg font-semibold'>{item.name}</h1>
        <p className='w-full text-sm text-black/40'>{item.description}</p>
        <div className='flex gap-4 items-center'>
          <span className='text-lg font-bold  bg-gradient-to-r from-[hsl(274deg,90%,66%)] to-[hsl(241deg,100%,65%)]
bg-clip-text text-transparent'>${item.price}</span><span className='text-xs text-purple-600/80 bg-[hsl(271.76deg,68%,95.1%)] capitalize px-2 rounded-xl py-1'>{item.category}</span>
        </div>
      </div>
      <div className='flex gap-4'>
        <div className="flex bg-[hsl(270deg,20%,96.08%)] rounded-xl">
          <button onClick={() => handleQuantity(-1)} className=" rounded-l-xl ">
            <p className='hover:bg-white ml-1 px-3 hover:text-white rounded-l-xl py-2'>

              < Minus className='w-5 h-5 ' />
            </p>
          </button>
          <p className="p-2 px-4" >{quantity}</p>
          <button onClick={() => handleQuantity(1)} className="rounded-r-xl">
            <p className='hover:bg-white mr-1 px-3 hover:text-white rounded-r-xl py-2'>

              <Plus className='w-5 h-4 ' /></p></button>

        </div>
        <button onClick={handleRemoveFromCart} >
          <div className='hover:bg-red-400 px-2 rounded-lg  py-2'>
          <Trash className='w-4 h-4 text-red-600' />

          </div>
        </button>

      </div>
    </div>
  )
}

export default CartProduct