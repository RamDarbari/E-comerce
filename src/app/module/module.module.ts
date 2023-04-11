import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { SubcategoryComponent } from './components/subcategory/subcategory.component';
// import { SubCategoriesComponent } from './components/sub-categories/sub-categories.module';
import { AddtocartComponent } from './components/add-to-cart/addtocart/addtocart.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories/sub-categories.component';
import { SubcategoriesComponent } from './components/subcategories/subcategories/subcategories.component';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';


@NgModule({
  declarations: [
    // SubcategoryComponent,
    AddtocartComponent,
    SubCategoriesComponent,
    SubcategoriesComponent,
    SubcategoryComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    BrowserModule,
    

  ]
})
export class ModuleModule { }
