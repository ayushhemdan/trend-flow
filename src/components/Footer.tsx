
import { Facebook } from 'lucide-react'
import { Mail, Phone, MapPin } from 'lucide-react';
import React from 'react'

const Footer = () => {
  const currentYear = new Date().getFullYear;
  return (
    <footer className=' bg-[#120e1b]'>


        <div className="container mx-auto px-4 sm:px-6 lg:px-5 py-12 lg:py-16">
          <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 space-y-8 text-white '>
            <div className='flex flex-col gap-4 sm:pr-18'>
              <h1 className='text-2xl font-semibold text-purple-800'>TrendFlow</h1>
              <p className='text-white/70 '>Curating exceptional fashion and lifestyle products that define modern elegance and quality.</p>

          
            </div>

            <div>
              <h1 className='mb-4 font-semibold text-lg'>Quick Links</h1>
              <ul className='space-y-2'>
                {
                  ['About Us', 'Contact', 'FAQ', 'Size Guide', 'Shipping Info', 'Returns'].map(link => (
                    <li key={link}>
                      <a href="#"
                        className='text-white/70 hover:text-white transition-all duration-300'
                      >{link}</a>
                    </li>
                  ))
                }
              </ul>

            </div>
            <div>
              <h1 className='mb-4 font-semibold text-lg'>Categories</h1>
              <ul className='space-y-2'>
                {
                  ['Fashion', 'Accessories', 'Lifestyle', 'Tech', 'Sale', 'New Arrivals'].map(category => (
                    <li key={category}><a href="#"
                      className='text-white/70 hover:text-white transition-all duration-300'
                    >{category}</a></li>
                  ))
                }
              </ul>

            </div>

            <div>
              <h1 className='mb-4 font-semibold text-lg'>Contact</h1>
              <div className='space-y-2'>
              <div className='flex gap-3 items-center '>
                <Mail className='text-purple-700 w-5 h-5' />
                <span className='text-white/70'>ayush.hemdan04@gmail.com</span>
              </div>
              <div className='flex gap-3 items-center'>
                <Phone className='text-purple-700 w-5 h-5' />
                <span className='text-white/70'>+91 8057842292</span>
              </div>
              <div className='flex gap-3 items-center'>
                <MapPin className='text-purple-700 w-5 h-5' />
                <span className='text-white/70'>Dehradun,Uttarakhand</span>
              </div>
                </div>
            </div>

          
          </div>
            <div className='border-t text-white/40 my-8'></div>

            <div className='flex flex-col md:flex-row justify-between text-center gap-4'>
              <p className='text-white/70'>© {currentYear} TrendFlow Emporium. All rights reserved.</p>
              <div className='space-x-4'>
                <a href="#" className='text-white/70 hover:text-white text-sm transition-all duration-300'>
                   Privacy Policy
                </a>
                <a href="#" className='text-white/70 hover:text-white text-sm transition-all duration-300'>
                   Terms of Service
                </a>
                <a href="#" className='text-white/70 hover:text-white text-sm transition-all duration-300'>
                   Cookie Policy
                </a>
              </div>
            </div>
        </div>

    </footer>
  )
}

export default Footer