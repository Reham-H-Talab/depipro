import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter([
      // توجيه الرابط الرئيسي أو رابط 'admin' إلى ملف مسارات الأدمن
      { 
        path: '', 
        loadChildren: () => import('./features/admin/admin.routes').then(m => m.ADMIN_ROUTES) 
      }
    ])
  ]
};