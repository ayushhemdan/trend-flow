import React from 'react'
import { categories } from '../data/products'
import { ArrowRight } from 'lucide-react'


const CategoryGrid = () => {
  return (
    <div className='mb-16 bg-[hsl(240deg,14.29%,98.63%)] pb-20 pt-12'>
      <div className='flex flex-col justify-center items-center mb-16'>

        <div className='text-center space-y-3 mb-9'>
          <h1 className='text-4xl font-bold'>Shop by Category</h1>
          <p className='text-black/60 text-lg'>Explore our carefully curated categories to find exactly what you're looking for.</p>
        </div>

        <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6 lg:px-27 px-4 '>
          {
            categories.map(item => (
              <div key={item.id} className='rounded-lg shadow-xl overflow-hidden hover:scale-105 transition-all duration-200 relative group'>
                <div className='overflow-hidden'>
                  <img src={item.image} className=' hover:scale-110 transition-all duration-200' alt="Sample product" />
                </div>

                <div className='p-4'>
                  <div className='flex justify-between'>

                    <h1 className='font-semibold group-hover:text-purple-800'>{item.name}</h1>
                    <ArrowRight className='text-black/60 w-4 group-hover:text-purple-800' />
                  </div>
                  <p className='text-black/70'>{item.productCount} Products</p>
                </div>

              </div>
            ))
          }
        </div>
      </div>

      <div>
        <div className='p-6 sm:p-12 [background-image:linear-gradient(135deg,hsl(260.95,66.8%,50.39%),hsl(168.7,71.88%,37.65%))] rounded-xl '>

          <h1 className='text-white font-bold text-2xl sm:text-4xl max-w-xl mx-auto mb-4 text-center'>Stay Updated with Latest Trends</h1>
          <p className='text-white/80 text-md max-w-2xl mx-auto text-center mb-6'>Subscribe to our newsletter and be the first to know about new arrivals, exclusive offers, and style inspiration.</p>


          <div className='flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6 '>


            <input type="text"
              placeholder='Enter your email'
              className='flex-1 py-3 px-4 border-none outline-none bg-white rounded-lg'
            />


            <button className='font-semibold text-black py-3 px-6 rounded-lg bg-amber-300 hover:bg-amber-300/80 transition-all '>
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryGrid