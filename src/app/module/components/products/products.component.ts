import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { category } from 'src/app/data';
import { AddproductsService } from 'src/app/services/addproducts.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit{
  categoriesList: category[]= []
 ngOnInit(): void {
   this.getCategories();
 }
  constructor(private _product: AddproductsService, private _route: Router) {}

  async getCategories() {
    try {
     const response = await this._product.categoriesList().toPromise();
      console.log(response.data);
      this.categoriesList = response.data;
    } catch (error) {
      console.error(error);
    }
  }
  onClickCategories(categoryId: string) {
    this._route.navigate(['/admin/subcategory'], { queryParams: { categoryId } });
  }
  
}
