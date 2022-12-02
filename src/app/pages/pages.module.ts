import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './product/product.component';
import { CatalogueComponent } from './catalogue/catalogue.component';

@NgModule({
  declarations: [
    DashboardComponent,
    PagesComponent,
    ProductComponent,
    CatalogueComponent,
  ],
  exports: [
    DashboardComponent,
    PagesComponent,
    ProductComponent,
    CatalogueComponent,
  ],
  imports: [CommonModule,
  SharedModule,
  RouterModule,
]
})
export class PagesModule { }
