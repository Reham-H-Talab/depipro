import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SidebarComponent } from '../components/sidebar/sidebar.component';
import { TopHeaderComponent } from '../components/top-header/top-header.component';
import { ProductService } from '../services/product.service';
import { Product } from '../../../core/models/product.model';

@Component({
  selector: 'app-products-dashboard',
  standalone: true,
  imports: [CommonModule, FormsModule, SidebarComponent, TopHeaderComponent],
  templateUrl: './products-dashboard.component.html'
})
export class ProductsDashboardComponent implements OnInit {
  products: Product[] = [];
  categories: string[] = ['All', 'Vitamins', 'Pain Relief', 'Cold & Flu', 'Baby', 'Eye Care', 'First Aid'];
  
  selectedCategory: string = 'All';
  searchQuery: string = '';

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getProducts().subscribe({
      next: (data) => this.products = data,
      error: (err) => console.error('Error fetching products', err)
    });
  }

  // تصفية ذكية بناءً على القسم المختار وكلمة البحث معاً
  get filteredProducts(): Product[] {
    return this.products.filter(product => {
      const matchesCategory = this.selectedCategory === 'All' || product.category === this.selectedCategory;
      const matchesSearch = product.name.toLowerCase().includes(this.searchQuery.toLowerCase()) || 
                            product.brand.toLowerCase().includes(this.searchQuery.toLowerCase());
      return matchesCategory && matchesSearch;
    });
  }
}