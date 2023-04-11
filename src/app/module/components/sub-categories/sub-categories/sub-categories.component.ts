import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subcategory } from 'src/app/data';
import { AddproductsService } from 'src/app/services/addproducts.service';

@Component({
  selector: 'app-sub-categories',
  templateUrl: './sub-categories.component.html',
  styleUrls: ['./sub-categories.component.scss']
})
export class SubCategoriesComponent implements OnInit {
  subcategoriesList: Subcategory[] = [];
  categoryId: any;
  
  constructor(private _route: ActivatedRoute, private _product: AddproductsService) {}

  ngOnInit(): void {
    this.categoryId = this._route.snapshot.queryParams['categoryId'];
    this.getSubcategories(this.categoryId);
  }

  async getSubcategories(categoryId: string | null) {
    try {
      const response = await this._product.getSubCategories(categoryId!).toPromise();
      console.log(response.data);
      if (Array.isArray(response.data) && categoryId !== null) {
        this.subcategoriesList = response.data.filter((subcategory: Subcategory) => subcategory.categoryId === categoryId);
      }
    } catch (error) {
      console.error(error);
    }
  }
}
