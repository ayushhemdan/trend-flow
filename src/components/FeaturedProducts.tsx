
import { Link } from 'react-router-dom'
import { featuredProducts } from '../data/products'
import ProductCard from './ProductCard'
import { ArrowRight } from 'lucide-react'
const FeaturedProducts = () => {
  return (
    <div className='mb-14 px-3 md:px-8 lg:px-24'>
      <div className='flex  flex-col md:flex-row md:justify-between md:items-center mb-9'>
        <div className='mb-4 '>
          <h1 className='text-4xl font-bold mb-4'>Featured Products</h1>
          <p className='text-black/60 text-lg max-w-2xl'>Discover our hand-picked selection of premium products that combine style, quality, and innovation.</p>
        </div>

        <Link to='/products'> <button className='flex gap-1 border rounded py-2 px-4 hover:bg-yellow-300 cursor-pointer transition-all duration-300 font-semibold text-sm items-center border-black/20 whitespace-nowrap'>
          View All Products <ArrowRight className='w-4' />

        </button>
        </Link>
      </div>
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 '>

        {
          featuredProducts.map(item => (
            <div key={item.id}>
              <ProductCard item={item} />
            </div>
          ))
        }
      </div>

      <div className='my-25 py-14 rounded-md shadow-2xl shadow-purple-500/20'>
        <div className='space-y-4'>
          <h1 className='text-3xl font-bold text-center' >Join Our Premium Community</h1>
          <p className='text-black/40 text-center'>Get exclusive access to new collections, special offers, and styling tips from our expert team.</p>

          <div className='flex md:flex-row  flex-col gap-3 justify-center items-center'>
            <button className='bg-gradient-to-br from-[hsl(262.71deg,71.08%,51.18%)] to bg-[hsl(262.84deg,96.27%,68.43%)] text-white font-semibold text-sm hover:scale-104 transition-transform duration-200 rounded py-3 px-6 '>Sign Up for Updates</button>
            <button className='border-1 border-black/20 px-6 py-3 rounded hover:bg-yellow-300 hover:border-yellow-300 text-sm font-semibold transition-all duration-300'>Learn More</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FeaturedProducts