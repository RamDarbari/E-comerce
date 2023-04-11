import { Component, ElementRef, OnInit } from '@angular/core';
import { product } from 'src/app/data';
import { AddproductsService } from 'src/app/services/addproducts.service';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { NgIf } from '@angular/common';
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  // standalone: true,
  // imports: [NgbCarouselModule, NgIf],
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  productList: product[] = [];
  ngOnInit(): void {
    this.getProducts();
  }

  constructor(private _product: AddproductsService, private _elementRef: ElementRef, private _route: Router) { }

  async getProducts() {
    try {
      const response = await this._product.productList().toPromise();
      this.productList = response.data;
    } catch (error) {
      console.error(error);
    }
  }
  scrollToProducts(): void {
    const productsTop = this._elementRef.nativeElement.querySelector('#products').offsetTop;
    window.scrollTo({
      top: productsTop,
      behavior: "smooth"
    });
  }

  addToCart() {
    this._route.navigate(['/admin/add-to-cart'])
  }
}

