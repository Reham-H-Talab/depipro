export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  oldPrice?: number;
  stock: number;
  rating: number;
  reviews: number;
  status: 'In Stock' | 'Out of Stock' | 'Low Stock';
  image: string;
}