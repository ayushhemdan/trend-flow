export interface Product {
  id: string;
  name: string,
  price: number;
  description: string;
  image: string;
  category: string;
  inStock: boolean;
  rating: number;
  reviews: number;
  features? : string[];
  originalPrice? :number;
  badge?: string;

}

export interface Category {
  id: string;
  name: string;
  image : string;
  productCount: number;
}