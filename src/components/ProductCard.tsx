import { useState } from 'react'
import { Heart, Star, ShoppingCart, Eye } from 'lucide-react';
import type { Product } from '../types/products';
import { Link } from 'react-router-dom';

import { useStore } from '../hooks/store';
// import useWishlist from '../hooks/useWishlist';


interface ProductProps {
  item: Product

}


const ProductCard = ({ item }: ProductProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const { isInWishlist, addToWishlist, removeFromWishlist, addToCart, cart } = useStore();
  console.log(cart)
  const isLiked = isInWishlist(item.id);

  const handleWishlistToggle = () => {
    if (!isLiked) {
       addToWishlist(item);
    }else{
      removeFromWishlist(item.id);
    }
  }
  
  const handleAddToCart = () => {
     addToCart(item);
  }


  const originalPrice = item.originalPrice || 0;
  const discountPercentage = Math.round((originalPrice - item.price) * 100 / originalPrice);
  return (
    <div className='group relative rounded-lg shadow-xl hover:scale-104 overflow-hidden transiton-all duration-300'
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
     
      {item.badge &&
        <div className='absolute top-3 left-3 text-xs text-white  bg-purple-800 rounded-md font-medium px-2 py-1 z-10'>
          {item.badge}
        </div>
      }

      {discountPercentage > 0 &&
        <div className='absolute top-3 right-6 bg-red-500 text-xs font-medium rounded px-2 py-1 text-white z-10'>
          -{discountPercentage}%
        </div>
      }

      <div className='relative aspect-square overflow-hidden'>
        <img src={item.image} alt={item.name}
          className='w-full h-full object-cover transition-transform duration-300 group-hover:scale-110'
        />

        <div className={`absolute inset-0 flex items-center bg-black/40 justify-center gap-2 transition-opacity duration-300  ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <button className='bg-amber-300 text-sm py-[0.4rem] px-2 shadow-xl shadow-white rounded font-bold flex gap-2  justify-center items-center' onClick={handleAddToCart}>
            <ShoppingCart className='w-4 h-4' />
            {item.inStock ? 'Add to Cart' : 'Out of Stock'}
          </button>

          <Link to={`/productdetails/${item.name}`}>
            <button className='bg-white text-sm py-2 px-3  rounded font-medium flex gap-2  justify-center items-center'>
              <Eye className='w-4 h-5' />
            </button>
          </Link>
        </div>

        <button className='absolute top-9 right-9 text-white/70 group-hover:text-white' onClick={handleWishlistToggle}>
          <Heart className={`${isLiked ? 'fill-red-700' : ''} w-4 h-4 text-red-700 `} />
        </button>


      </div>

      <div className='space-y-2 p-3'>
        <p className='text-black/40 text-xs font-medium'>{item.category.toUpperCase()}</p>
        <p className='font-semibold'>{item.name}</p>

        <div className='flex gap-1 items-center text-xs'>
          {
            [...Array(5)].map((_, i) => (
              <Star key={i} className={`w-3 h-3 text-black/40 ${i < Math.floor(item.rating) ? 'fill-amber-400 text-yellow-400' : ''}`} />
            ))
          }

          <p className='text-black/40'>({item.reviews})</p>
        </div>


        <div className='flex gap-2'>
          <p className='font-bold text-purple-800 text-lg'>${item.price}</p>
          {
            item.originalPrice && <p className='line-through font-bold text-black/40 text-lg'>${item.originalPrice}</p>
          }

        </div>
      </div>

    </div>
  )
}

export default ProductCard