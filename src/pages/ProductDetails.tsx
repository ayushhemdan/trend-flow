import { Link, useParams } from "react-router-dom"
import Footer from "../components/Footer"
import Header from "../components/Header"
import { products } from "../data/products";
import { Star, ShoppingCart, Heart, ArrowLeft, Truck, Shield, RotateCcw } from 'lucide-react';
import { useState } from "react";
import { useStore } from "../hooks/store";
import ProductCard from "../components/ProductCard";
import type { Product } from "../types/products";
const ProductDetails = () => {
  const { productName } = useParams();
  const product = products.find(p => p.name.toLowerCase() === productName?.toLowerCase());
 
  const { isInWishlist, addToWishlist, removeFromWishlist,cart ,addToCart} = useStore();

  
    const isLiked = isInWishlist(product?product.id:'');


  const handleWishListLiked = () =>{
    if(product){
    if(!isLiked){
      addToWishlist(product);
    }else{
    removeFromWishlist(product.id);
    }
  }
  }
  const [quantity, setQuantity] = useState(1)
  const handleAddToCart = (item:Product) => {
     addToCart(item, quantity);
  }


  const off = product?.originalPrice ? (product.originalPrice - product.price) * 100 / product.originalPrice : 0;


  const handleQuantity = (value: number) => {
    if (value > 0) {
      setQuantity(prev => prev + 1);
    }

    if (value < 0 && quantity > 1) {
      setQuantity(prev => prev - 1);
    }
  }

  
  return (
    <div>
      <Header />
      <div className="flex gap-12">
       {
       
        cart.map(p => (
          <ProductCard key={p.id} item={p}/>
        ))
      }
      </div>
      <div className="container mx-auto pt-8 pb-12 px-3 md:px-1 ">
        <div className="flex gap-2 text-black/60 text-sm">
          <Link to='/products'>
            Home
          </Link>
          <p>/</p>
          <Link to='/products'>
            products
          </Link>
          <p>/</p>
          <p className="text-black">{product?.name}</p>
        </div>
        <main className="grid grid-cols-1 md:grid-cols-2 py-7 md:space-x-6">
          <div className="">
            <img src={product?.image} alt={product?.image} className="object-cover w-150 aspect-square rounded-lg" />
          </div>


          <div className="space-y-4 mt-4 md:mt-0">
            <p>{product?.category.toUpperCase()}</p>
            <h1 className="text-4xl font-bold">{product?.name}</h1>
            <div className="flex gap-2 text-black/50 items-center text-sm">
              {
                [...Array(5)].map((_, i) => (
                  <Star className={`w-5 h-5 ${i < Math.floor(product!.rating) ? 'fill-current text-amber-400' : ''}`} />
                ))
              }
              <span>{product?.rating}</span>
              <span>({product?.reviews})</span>

            </div>
            <div className=" flex gap-4 items-center">
              <p className=" text-purple-800 text-3xl  font-bold">${product?.price}</p>
              {product?.originalPrice &&
                <p className="line-through font-semibold text-xl text-black/50 ">${product?.originalPrice}</p>
              }
              {
                off > 0 &&

                <div className="bg-red-500 px-3 py-1 text-sm font-semibold rounded text-white">-{Math.round(off)}%  OFF</div>
              }
            </div>

            {product?.badge && <div className="bg-purple-800 text-white text-sm font-semibold rounded-md px-2 py-1 w-fit">
              {product?.badge}
            </div>
            }

            <div className="text-lg text-black/70 ">
              {product?.description}
            </div>

            {
              product?.features &&
              <div className="space-y-2">
                <p className="font-semibold">Key Features:</p>
                {
                  product?.features?.map(f => (
                    <li className="text-black/70 marker:text-purple-800 marker:text-xl">{f}</li>
                  ))
                }
              </div>
            }
            <div className="flex items-center gap-4">
              <p className="font-semibold"> Quantity:</p>
              <div className="flex">
                <button onClick={() => handleQuantity(-1)} className="border rounded-l border-black/20 p-2 px-4">-</button>
                <p className="border-t border-b  border-black/20 p-2 px-4">{quantity}</p>
                <button onClick={() => handleQuantity(1)} className="border rounded-r border-black/20 p-2 px-4">+</button>
              </div>
            </div>

            <div>
              <div className="flex gap-3">

                <button className=" flex  gap-3 items-center text-white bg-gradient-to-r  from-[hsl(260.95deg,66.8%,50.39%)] to-[hsl(162.42deg,79.7%,38.63%)] justify-center text-sm font-semibold py-3 rounded-md  w-full hover:scale-104 transition-transform duration-300" onClick={ () => handleAddToCart(product)}>
                  < ShoppingCart className="w-4 h-4" />
                  {product?.inStock ? 'Add to Cart' : 'Out of Stock'}
                </button>

                <div className="border-1  rounded-md  px-9 border-black/15 hover:bg-amber-300 hover:border-amber-300 transition-all duration-300 flex items-center" onClick={handleWishListLiked} >
                  <Heart className={`w-4 h-4 ${isLiked ? 'fill-current text-red-500' : ''}`} />
                </div>
              </div>

              <div className="border-t mt-6 text-black/14"></div>

              <div className="text-sm space-y-3 mt-5">
                <p className="flex gap-4 items-center"><Truck className="text-[hsl(162.42deg,79.7%,38.63%)] w-5 h-5" /> Free shipping on orders over $100 </p>
                <p className="flex gap-4 items-center"><Shield className="text-[hsl(162.42deg,79.7%,38.63%)] w-5 h-5" /> 1-year warranty included</p>
                <p className="flex gap-4 items-center"><RotateCcw className="text-[hsl(162.42deg,79.7%,38.63%)] w-5 h-5" /> 30-day return policy</p>
              </div>
            </div>

          </div>

        </main>
      </div>
      <Footer />
    </div>
  )
}

export default ProductDetails