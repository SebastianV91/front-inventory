import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './pages/dashboard.component';
import { HomeComponent } from './components/home/home.component';
import { CategoryModule } from '../category/category.module';



@NgModule({
  declarations: [
    DashboardComponent,
    HomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CategoryModule
  ]
})
export class DashboardModule { }
