import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../../../core/models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // بيانات وهمية (Mock Data) مطابقة تماماً للصورة image_925115.jpg
  private mockProducts: Product[] = [
    {
      id: '1',
      name: 'Vitamin D3 + K2 2000IU',
      brand: 'NutriCare',
      category: 'Vitamins',
      price: 18.99,
      oldPrice: 24.99,
      stock: 148,
      rating: 4.8,
      reviews: 312,
      status: 'In Stock',
      image: 'assets/images/vitamin.jpg'
    },
    {
      id: '2',
      name: 'Omega-3 Fish Oil 1000mg',
      brand: 'PureHealth',
      category: 'Vitamins',
      price: 22.49,
      stock: 72,
      rating: 4.6,
      reviews: 198,
      status: 'In Stock',
      image: 'assets/images/omega3.jpg'
    },
    {
      id: '3',
      name: 'Ibuprofen 400mg Tablets',
      brand: 'MediRelief',
      category: 'Pain Relief',
      price: 8.99,
      stock: 6,
      rating: 4.7,
      reviews: 540,
      status: 'In Stock',
      image: 'assets/images/ibuprofen.jpg'
    },
    {
      id: '4',
      name: 'Paracetamol 500mg Caplets',
      brand: 'MediRelief',
      category: 'Pain Relief',
      price: 5.49,
      stock: 230,
      rating: 4.9,
      reviews: 870,
      status: 'In Stock',
      image: 'assets/images/paracetamol.jpg'
    },
    {
      id: '5',
      name: 'Day & Night Cold Relief Duo',
      brand: 'ColdShield',
      category: 'Cold & Flu',
      price: 14.99,
      oldPrice: 19.99,
      stock: 41,
      rating: 4.5,
      reviews: 261,
      status: 'In Stock',
      image: 'assets/images/cold-relief.jpg'
    }
  ];

  getProducts(): Observable<Product[]> {
    // محاكاة طلب HTTP لجلب البيانات
    return of(this.mockProducts);
  }
}