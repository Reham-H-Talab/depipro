import { Routes } from '@angular/router';
import { ProductsDashboardComponent } from './products-dashboard/products-dashboard.component';

export const ADMIN_ROUTES: Routes = [
  {
    path: '',
    component: ProductsDashboardComponent
  }
  // يمكنكِ إضافة مسارات أخرى هنا مستقبلاً (مثل صفحة الطلبات أو الإعدادات)
  // { path: 'orders', component: OrdersComponent }
];