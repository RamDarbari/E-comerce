import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SubcategoryComponent } from './components/subcategory/subcategory.component';
import { AddtocartComponent } from './components/add-to-cart/addtocart/addtocart.component';
import {MatSelectModule} from '@angular/material/select';
import { BrowserModule } from '@angular/platform-browser';
import { SubCategoriesComponent } from './components/sub-categories/sub-categories/sub-categories.component';


@NgModule({
  declarations: [
    SubcategoryComponent,
    AddtocartComponent,
    SubCategoriesComponent
  ],
  imports: [
    CommonModule,
    DragDropModule,
    ScrollingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    BrowserModule
  ]
})
export class ModuleModule { }
