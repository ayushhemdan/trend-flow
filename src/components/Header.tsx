import { useState } from 'react'

import { ShoppingCart, Search, Menu, X, User, Heart } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';
import { useStore } from '../hooks/store';



const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const { wishlist, cart } = useStore();

  const navItems = ['Fashion', 'Accessories', 'Lifestyle', 'Tech'];

  return (
    <>
      <header className='sticky top-0 z-50  bg-[hsl(220,13%,91%)]/50 backdrop-blur w-full  border-b border-gray-200/70 '>
        <div className='container mx-auto px-4 sm:px-2 lg:px-8'>
          <div className='flex justify-between items-center h-16'>
            {/* Logo */}
            <div>
              <h1 className='text-2xl font-bold bg-[#7838df] text-transparent bg-clip-text hover:opacity-80 transition-opacity'><Link to='/'>TrendFlow</Link></h1>
            </div>

            <nav className='hidden md:flex md:px-7  list-none space-x-8 whitespace-nowrap'>
              <NavLink key='all' className={({ isActive }) => isActive ? 'text-purple-600' : ''} to='/products'><li
                className='relative group flex flex-col hover:text-[#7838df]  '
              >All Products
                <span className='absolute bottom-0 bg-[#7838df]  group-hover:h-[1.9px] w-0  transition-all ease-in-out duration-500 group-hover:w-full'></span>
              </li>
              </NavLink>
              {
                navItems.map(item => (
                  <NavLink key={item} className={({ isActive }) => isActive ? 'text-purple-600' : ''} to={`/category/${item.toLowerCase()}`}><li
                    className='relative group flex flex-col hover:text-[#7838df]  '
                  >{item}
                    <span className='absolute bottom-0 bg-[#7838df]  group-hover:h-[1.9px] w-0  transition-all ease-in-out duration-500 group-hover:w-full'></span>
                  </li>
                  </NavLink>

                ))
              }
            </nav>

            {/* Search Bar */}

            <div className='hidden lg:flex items-center bg-gray-200/80 px-4 py-2 rounded-full'>
              <Search className='h-4 w-4 mr-2 text-gray-500' />
              <input type="text"
                placeholder='Search Products...'
                className='border-none outline-none text-sm flex-1 bg-transparent'
              />

            </div>

            {/* Right Icons */}

            <div className='flex items-center space-x-2  '>
              <NavLink to='/wishlist' className={({ isActive }) => (isActive ? 'bg-amber-400 rounded-xl' : '')}>
                <div className='relative lex items-center hover:bg-yellow-400 p-2 lg:p-3 transition-all duration-300 rounded-xl'>
                  <Heart className='h-4 w-4' />
                  <span className='absolute -top-2 -right-1 bg-purple-700 rounded-full w-5 h-5 flex justify-center items-center text-xs text-white font-semibold'>{wishlist.length}</span>
                </div>
              </NavLink>

              <div className='flex items-center hover:bg-yellow-400 lg:p-3 transition-all duration-300 rounded-xl '>
                <User className='h-4 w-5 hidden sm:inline-flex' />
              </div>

              <NavLink to='/cartitems' className={({ isActive }) => (isActive ? 'bg-amber-400 rounded-xl' : '')}>

                <div className='flex items-center hover:bg-yellow-400  p-3 transition-all duration-300 rounded-xl relative'>
                  <ShoppingCart className='h-4 w-5' />
                  <span className='absolute -top-2 -right-1 bg-purple-700 rounded-full w-5 h-5 flex justify-center items-center text-xs text-white font-semibold'>{cart.length}</span>
                </div>
              </NavLink>

              <div onClick={() => setIsMenuOpen(!isMenuOpen)} className='flex items-center  hover:bg-yellow-400 p-3 transition-all duration-300 rounded md:hidden '>



                {isMenuOpen ? <X className='h-4 w-5' /> : <Menu className='h-4 w-5' />}

              </div>
            </div>


          </div>
        </div>

        <div>

          {
            isMenuOpen && <div className='px-8 md:hidden'>
              <nav className='border-t border-gray-300'>
                <NavLink key='all' className={({ isActive }) => isActive ? 'text-black-600' : ''} to='/products'><li
                  className='relative group flex flex-col hover:text-[#7838df] my-4 text-black/70'
                >All Products
                  <span className='absolute bottom-0 bg-[#7838df]  group-hover:h-[1.9px] w-0  transition-all ease-in-out duration-500 group-hover:w-full'></span>
                </li>
                </NavLink>
                {
                  navItems.map(item => (
                    <NavLink key={item} className={({ isActive }) => isActive ? 'text-black-600' : ''} to={`/category/${item.toLowerCase()}`}><li
                      className='relative group flex flex-col hover:text-[#7838df] my-4 text-black/70 '
                    >{item}
                      <span className='absolute bottom-0 bg-[#7838df]  group-hover:h-[1.9px] w-0  transition-all ease-in-out duration-500 group-hover:w-full'></span>
                    </li>
                    </NavLink>

                  ))
                }
              </nav>
              <div className='flex items-center bg-gray-200/80 px-4 py-2 rounded-full mb-4'>
                <Search className='h-4 w-4 mr-2 text-gray-500' />
                <input type="text"
                  placeholder='Search Products...'
                  className='border-none outline-none text-sm flex-1 bg-transparent'
                />

              </div>
            </div>
          }

        </div>


      </header>
    </>
  )
}

export default Header