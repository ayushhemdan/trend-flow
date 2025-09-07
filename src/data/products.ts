import type { Category, Product } from "../types/products";

export const categories: Category[] = [
  {
    id: 'fashion',
    name: 'Fashion',
    image: '/images/product1.png',
    productCount: 24
  },
  {
    id: 'accessories',
    name: 'Accessories',
    image: '/images/product2.png',
    productCount: 18
  },
  {
    id: 'lifestyle',
    name: 'Lifestyle',
    image: '/images/product3.png',
    productCount: 15
  },
  {
    id: 'tech',
    name: 'Tech',
    image: '/images/product4.png',
    productCount: 12
  }
];

export const products: Product[] = [
  {
    id: '1',
    name: 'Premium Wireless Headphones',
    price: 299,
    originalPrice: 399,
    image: '/images/product5.png',
    category: 'tech',
    description: 'Experience superior sound quality with our flagship wireless headphones featuring active noise cancellation.',
    features: ['Active Noise Cancellation', '30-hour Battery Life', 'Premium Materials', 'Wireless Charging'],
    inStock: true,
    rating: 4.8,
    reviews: 128,
    badge: 'Best Seller'
  },
  {
    id: '2',
    name: 'Luxury Silk Scarf',
    price: 189,
    image: '/images/product7.png',
    category: 'fashion',
    description: 'Handcrafted silk scarf with exclusive patterns, perfect for any elegant occasion.',
    features: ['100% Silk', 'Hand-printed Design', 'Versatile Styling', 'Gift Packaging'],
    inStock: true,
    rating: 4.9,
    reviews: 67,
    badge: 'Limited Edition'
  },
  {
    id: '3',
    name: 'Minimalist Watch',
    price: 459,
    image: '/images/product6.png',
    category: 'accessories',
    description: 'Swiss-made timepiece with clean design and precision engineering.',
    features: ['Swiss Movement', 'Sapphire Crystal', 'Water Resistant', '5-Year Warranty'],
    inStock: true,
    rating: 4.7,
    reviews: 94,
  },
  {
    id: '4',
    name: 'Organic Cotton Tote',
    price: 89,
    originalPrice: 129,
    image: '/images/product8.png',
    category: 'lifestyle',
    description: 'Sustainable and stylish tote bag made from certified organic cotton.',
    features: ['Organic Cotton', 'Eco-Friendly', 'Spacious Interior', 'Durable Construction'],
    inStock: true,
    rating: 4.6,
    reviews: 156,
    badge: 'Eco-Friendly'
  },
  {
    id: '5',
    name: 'Designer Sunglasses',
    price: 329,
    image: '/images/product9.png',
    category: 'accessories',
    description: 'Italian-crafted sunglasses with polarized lenses and titanium frame.',
    features: ['Polarized Lenses', 'Titanium Frame', 'UV Protection', 'Italian Design'],
    inStock: true,
    rating: 4.8,
    reviews: 203,
  },
  {
    id: '6',
    name: 'Smart Fitness Tracker',
    price: 199,
    originalPrice: 249,
    image: '/images/product10.png',
    category: 'tech',
    description: 'Advanced fitness tracker with heart rate monitoring and GPS.',
    features: ['Heart Rate Monitor', 'GPS Tracking', '7-Day Battery', 'Water Resistant'],
    inStock: false,
    rating: 4.5,
    reviews: 89,
    badge: 'Coming Soon'
  }
];

export const featuredProducts = products.slice(0, 4);