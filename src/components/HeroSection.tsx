import React from 'react'
import { ArrowRight, Sparkles } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className=" flex flex-col items-center justify-center h-[700px] w-full [background-image:linear-gradient(135deg,hsl(260.95,66.8%,50.39%),hsl(168.7,71.88%,37.65%))] ">
   
        <div className='text-white bg-white/20 rounded-full px-3 py-1 mb-7'>
          <p className='flex gap-2 font-semibold items-center text-sm'>
            <Sparkles className='w-4' />
            New Collection Available
          </p>
        </div>

        <div className='text-4xl sm:text-7xl font-bold text-center mb-7'>
          <h1 className='text-white'>
            Discover Your
          </h1>

          <h1 className='bg-gradient-to-r from-yellow-200 to-yellow-50 text-transparent bg-clip-text'>
            Perfect Style
          </h1>
        </div>

        <div className=' text-white/80 sm:text-2xl text-xl text-center flex justify-center mb-7'>
         <p className='sm:max-w-[70%] px-3'>Curated fashion and lifestyle products that define modern elegance and exceptional quality.</p>
        </div>

        <div className='flex flex-col  gap-6 whitespace-nowrap text-sm font-bold items-center justify-center mb-12 md:flex-row'>
          <button className='text-purple-600 w-full flex whitespace-nowrap bg-white rounded-md p-5 h-10  items-center hover:scale-105 hover:shadow-2xl transition-all duration-300 '>
            <p className='text-center flex items-center'>Shop Collection </p>
          <ArrowRight className='w-4 ml-2' />
          </button>

          <button className='text-black items-center flex whitespace-nowrap bg-white rounded-md px-5 h-10 hover:text-black hover:bg-transparent hover:border-1 hover:border-white/20'>
          Explore Trends 
          </button>
        </div>

        <div className='border-b border-white/40  w-full max-w-[60%] mb-7'></div>
        
        <div className='flex justify-between px-3 w-full md:max-w-[48%] text-white md:px-9 mb-12'>
          <div className='text-center'>
            <h1 className=' text-3xl md:text-3xl font-bold'>50K+</h1>
            <p className='text-sm text-white/80'>Happy Customers</p>
          </div>
          <div className='text-center'>
            <h1 className='text-3xl font-bold'>1000+</h1>
            <p className='text-sm text-white/80'>Premium Products</p>
          </div>
          <div className='text-center'>
            <h1 className='text-3xl font-bold'>4.9★</h1>
            <p className='text-sm text-white/80'>Customer Rating</p>
          </div>
        </div>
        </div>

  )
}

export default HeroSection