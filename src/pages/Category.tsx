import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { categories, products } from '../data/products'
import ProductCard from '../components/ProductCard'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { ArrowLeft } from 'lucide-react'

const Category = () => {

  const { categoryID } = useParams()
  const category = categories.find(cat => cat.id.toLowerCase() === categoryID);
  const categorizedProducts = products.filter(product => product.category.toLowerCase() === categoryID);
  console.log(categorizedProducts)
  if (!category) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-35 text-center">
          <h1 className="text-2xl font-bold mb-4">Category not found</h1>
          <Link to="/products">
            <button className='flex items-center justify-between'>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Products
            </button>
          </Link>
        </main>
        <Footer />
      </div>
    );
  }


  return (
    <div className='min-h-screen'>
      <Header />
      <main className='container mx-auto px-4 sm:px-6 md:px-8 py-8 mb-12'>
        <div className='flex gap-2 text-black/40 text-sm'>
          <Link to='/'>Home</Link>
          <p>/</p>
          <Link to='/products'>Products</Link>
          <p>/</p>
          <p className='capatalize'>{category?.name}</p>
        </div>

        <div className='mb-8 flex flex-col md:flex-row md:justify-between md:items-center'>
          <div>
            <h1 className='capitalize text-3xl md:text-4xl font-bold mb-4'>{categoryID}</h1>
            <p className='text-lg text-black/50'>Explore our {category?.name.toLowerCase()} collection featuring {categorizedProducts.length} premium products</p>
          </div>

          <div className='mt-6 md:mt-0'>
            <img src={category?.image} alt={category?.name} className='w-32 h-32 object-cover rounded-md shadow-md' />
          </div>
        </div>

        {categorizedProducts.length > 0 ? (
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3'>
            {
              categorizedProducts.map(item => (
                <ProductCard key={item.id} item={item} />
              ))
            }
          </div>
        ) :

          (
            <div className="text-center py-16">
              <h3 className="text-xl font-semibold mb-2">No products available</h3>
              <p className="text-muted-foreground mb-4">
                Check back soon for new {category.name.toLowerCase()} products
              </p>
              <Link to="/products">
                <button>
                  Browse All Products
                </button>
              </Link>
            </div>
          )


        }
      </main>
      <Footer />
    </div>
  )
}

export default Category;