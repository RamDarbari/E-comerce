import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from '../components/about-us/about-us.component';
import { AdminComponent } from '../components/admin/admin.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { HomeComponent } from '../components/home/home.component';
import { ProductsComponent } from '../components/products/products.component';
import { SubcategoryComponent } from '../components/subcategory/subcategory.component';


const routes: Routes = [
  {path: '', component: AdminComponent, children: [
    {path: 'home', component: HomeComponent},
    {path: 'dashboard', component: DashboardComponent},
    { path: 'categories', component:  ProductsComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'contact-us', component: ContactUsComponent },
    {path: '', redirectTo: '/admin/home', pathMatch: 'full'},
  ]},
  {path: '', children: [
    {path: 'subcategory', component: SubcategoryComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminDashboardRoutingModule { }
