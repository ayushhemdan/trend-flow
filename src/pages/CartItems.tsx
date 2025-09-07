import React from 'react'
import CartProduct from '../components/CartProduct'
import { useStore, type CartQuantity } from '../hooks/store';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ArrowLeft, ShoppingBag, Trash2 } from 'lucide-react';



export const CartItems = () => {
  const { cart, clearCart } = useStore();
  const handleCart = () => {
    clearCart();
  }
  const subtotal = cart.reduce((sum, item) => sum + item.quantity * item.price, 0);
  const tax = subtotal * 10 / 100;
  const total = subtotal + tax;

  if (cart.length === 0) {
    return (
      <div>
        <Header />
        <div className='flex flex-col lg:flex-row my-2 mx-auto container items-center pt-4 lg:pt-6 px-4 lg:px-0'>
          <Link to='/products'>
            <p className='flex gap-2 mb-6 lg:mb-0  items-center text-sm font-semibold py-4 whitespace-nowrap '> <ArrowLeft className='w-4 h-4' /> back to products</p>
          </Link>
          <p className='text-3xl font-bold mr-0 lg:mr-28  bg-gradient-to-r text-center from-[hsl(274deg,90%,66%)] to-[hsl(241deg,100%,65%)]
bg-clip-text text-transparent w-full'>
            Shopping Cart ({cart.length})
          </p>
      
  
        </div>
        <div className='text-center py-8 my-5 lg:py-27  px-4 lg:px-0'>
          <div className='w-full flex justify-center mb-12'>
            <ShoppingBag className='w-15 h-15 text-purple-400 ' />
          </div>
          <h1 className='font-semibold text-2xl mb-5'>Your cart is empty</h1>
          <p className='text-black/40 max-w-md mx-auto mb-8'>Looks like you haven't added any items to your cart yet. Discover our amazing products!</p>
          <Link to='/products'>
            <button className='px-5 bg-gradient-to-r from-[#b85ff1] to-[#ef7fd7] rounded-lg py-2 text-sm text-white font-semibold '>Start Shopping</button>
            
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className='bg-[hsl(276,56%,98%)]'>
      <Header />
      <main className='px-3 lg:px-0'>
        <div className='flex flex-col lg:flex-row my-2 mx-auto container items-center pt-4 lg:pt-6 '>
          <Link to='/products'>
            <p className='flex gap-2 items-center text-sm font-semibold py-4 whitespace-nowrap '> <ArrowLeft className='w-4 h-4' /> back to products</p>
          </Link>
          <p className='text-3xl font-bold  bg-gradient-to-r from-[hsl(274deg,90%,66%)] to-[hsl(241deg,100%,65%)]
bg-clip-text text-transparent text-center w-full'>
            Shopping Cart ({cart.length})
          </p>
          <button className='flex h-9 w-35 text-red-600 items-center justify-between border border-black/15 rounded-xl mt-5 lg:mt-0 hover:bg-pink-400 transition-all duration-300' onClick={handleCart}>
            <p className='px-5 whitespace-nowrap flex items-center gap-2'>
              <Trash2 className='w-4 h-4' />  Clear Cart
            </p>
          </button>
        </div>
        <div className='flex flex-col lg:flex-row gap-5 mx-auto container pb-15 pt-3 '>

          <div className='space-y-5'>
            {
              cart.map((item: CartQuantity) => (

                < CartProduct key={item.id} item={item} />
              ))

            }
          </div>
          <div className='bg-white rounded-lg p-5 w-full lg:w-[70%] max-h-[500px] overflow-auto sticky top-28' >
            <h1 className='mb-4 text-xl font-semibold  bg-gradient-to-r from-[hsl(274deg,90%,66%)] to-[hsl(241deg,100%,65%)]
bg-clip-text text-transparent'>Order Summary</h1>
            {
              cart.map(item => (
                <div className='flex justify-between items-center'>
                  <p className='text-black/48 text-sm mb-2'>{item.name} x {item.quantity}</p>
                  <p className='text-sm font-semibold'>${item.price * item.quantity}</p>
                </div>
              ))

            }
            <div className='border-t border-black/20 my-2'></div>
            <div className='space-y-2 my-4'>
              <div className='flex justify-between'>
                <p className='text-black/48 text-sm'>Subtotal:</p>
                <p className='text-sm font-semibold'>${subtotal}</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-black/48 text-sm'>Shipping:</p>
                <p className='text-sm font-semibold  bg-gradient-to-r from-[hsl(274deg,90%,66%)] to-[hsl(241deg,100%,65%)]
bg-clip-text text-transparent'>Free</p>
              </div>
              <div className='flex justify-between'>
                <p className='text-black/48 text-sm'>Tax:</p>
                <p className='text-sm font-semibold'>${tax}</p>
              </div>
              <div className='flex justify-between'>
                <p className='font-bold text-lg'>Total:</p>
                <p className='text-sm font-semibold'>${total}</p>
              </div>

              <button className='mb-3 mt-5 bg-gradient-to-r from-[hsl(274deg,90%,66%)] to-[#4f4dff] text-sm w-full text-white font-semibold h-10 rounded-xl'>
                Proceed to Checkout
              </button>
             <Link to='/products' className='mb-3'> <button className='text-sm w-full font-semibold h-10 rounded-xl hover:bg-[#4f4dff] transition-all duration-300 hover:text-white'>
               Continue Shopping
              </button>
              </Link>

            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
