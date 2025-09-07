
import { products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { Filter, SlidersHorizontal } from 'lucide-react';
import { useState } from 'react';

const Products = () => {
  const [filter, setFilter] = useState('all')
  const category = ['All', 'Fashion', 'Accessories', 'Lifestyle', 'Tech']
  return (
    <div className='bg-[#f9f5fc]'>
      <Header />

      <main className='container mx-auto px-4 sm:px-6 lg:px-8 py-16'>
        <h1 className='text-4xl font-bold mb-4'>All Products</h1>
        <p className='text-lg text-black/50 mb-4'>Discover our complete collection of premium products</p>

        <div className='shadow-[0_3px_10px_rgba(0,0,0,0.15)] md:justify-between rounded-lg flex flex-wrap relative py-4 px-3 mt-10 mb-3'>
          <div className='sm:flex '>
            <div className='flex gap-3 items-center px-2'>
              <SlidersHorizontal />
              <span className='font-semibold'> Filter By Category:</span>
            </div>
            <div className='flex gap-3  items-center flex-wrap mt-3 md:mt-0'>
              {category.map(item => (
                <button key={item} className='border px-2 py-2 text-sm font-semibold rounded border-black/15 cursor-pointer hover:bg-yellow-400 hover:border-amber-400 transition-all duration-300' onClick={() => setFilter(item.toLowerCase())}>{item}</button>
              ))

              }
            </div>
          </div>
          <div className='text-sm text-black/30 p-2  '>
            {

              (filter === 'all') ? <span className='p-2'>{products.length}</span> :
                <span className='p-2'>{products.filter(item => (item.category.toLowerCase() === filter)).length}</span>
            }

            Products Found
          </div>

        </div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-6 py-7'>
          {
            (filter === 'all') ? products.map(item => (
              <ProductCard item={item} />
            ))
              :

              products.map(item => (filter === item.category.toLowerCase()) && (
                <ProductCard item={item} />
              ))
          }
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default Products