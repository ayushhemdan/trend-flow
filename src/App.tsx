
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Index from './pages/Index'
import Products from './pages/Products'
import Category from './pages/Category'
import ProductDetails from './pages/ProductDetails'
import Wishlist from './pages/Wishlist'
import CartProduct from './components/CartProduct'
import { CartItems } from './pages/CartItems'



function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Index />} />
          <Route path='/products' element={<Products />} />
          <Route path='/category/:categoryID' element={<Category />} />
          <Route path='/productdetails/:productName' element={<ProductDetails />}/>
         <Route path='/wishlist' element ={<Wishlist />}/>
         <Route path='/cartitems' element ={<CartItems />}/>
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
