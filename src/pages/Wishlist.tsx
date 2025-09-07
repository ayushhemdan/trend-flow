// WishlistPage.js

import type { Product } from "../types/products";
import ProductCard from "../components/ProductCard";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { ArrowLeft, Heart } from "lucide-react";
import { Link } from "react-router-dom";
import { useStore } from '../hooks/store'

const WishlistPage = () => {
  const { wishlist } = useStore();


  if (wishlist.length === 0) {
    return (
      <div>
        <Header />
        <div className='flex flex-col gap-7 lg:flex-row my-2 mx-auto container items-center pt-4 lg:pt-6 px-4 lg:px-0'>
          <Link to='/products'>
            <p className='flex gap-2 items-center text-sm font-semibold py-4 whitespace-nowrap '> <ArrowLeft className='w-4 h-4' /> back to products</p>
          </Link>
          <p className='text-3xl  font-bold text-center lg:pr-40 bg-gradient-to-r from-[hsl(274deg,90%,66%)] to-[hsl(241deg,100%,65%)]
bg-clip-text text-transparent w-full'>
            Wishlist
          </p>
        </div>
        <div className='text-center py-8 my-5 lg:py-27 px-4 lg:px-0'>
          <div className='w-full flex justify-center mb-12'>
            <Heart className='w-15 h-15 text-purple-400 ' />
          </div>
          <h1 className='font-semibold text-2xl mb-5'>Your wishlist is empty</h1>
          <p className='text-black/40 max-w-md mx-auto mb-10'>Looks like you haven't added any items to your cart yet. Discover our amazing products!</p>
          <Link to='/products'>
            <button className='px-5 bg-gradient-to-r from-[#b85ff1] to-[#ef7fd7] rounded-lg py-2 text-sm text-white font-semibold'>Discover Products</button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }


  return (
    <div className="bg-[hsl(270,100%,99%)]">
      <Header />
      <main className="mb-17 mt-8 mx-auto container px-2 md:px-0">
        <Link to='/products' className="whitespace-nowrap flex gap-1 items-center mb-4"> <ArrowLeft className="w-4 h-4" /> back to products</Link>
        <h2 className="text-center text-3xl  font-bold mb-12 bg-gradient-to-r from-[hsl(274deg,90%,66%)] to-[hsl(241deg,100%,65%)]
bg-clip-text text-transparent">Your Wishlist ({wishlist.length})</h2>
        {
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
            {wishlist.map((item: Product) => (
              <ProductCard key={item.id} item={item} />


            ))}
          </div>
        }
      </main>
      <Footer />
    </div>

  );
};

export default WishlistPage;
