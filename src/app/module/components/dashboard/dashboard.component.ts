import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { product } from 'src/app/data';
import { AddproductsService } from 'src/app/services/addproducts.service';
import { AuthenticationsService } from 'src/app/services/authentications.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  loggedInUser: any;
  addProductMessage: string | undefined;
  productList: product[] = [];

  constructor(private _authService: AuthenticationsService, private _product: AddproductsService) { }

  ngOnInit(): void {
    this.loggedInUser = this._authService.getCurrentUser();
    this.getProducts();
  }

  async onSubmit(data: product, addProduct: NgForm) {
    console.log(data);
    try {
      const response = await this._product.addProduct(data);
      console.log("Product added successfully");
      if (response.data) {
        this.addProductMessage = "Product added successfully";
        addProduct.reset();
        this.getProducts();
      }
      setTimeout(() => this.addProductMessage = undefined, 3000);
    } catch (error) {
      console.error(error);
    }
  }

  async getProducts() {
    try {
      const response = await this._product.productList().toPromise();
      // console.log(response.data);
      this.productList = response.data;
    } catch (error) {
      console.error(error);
    }
  }

  async deleteProduct(_id: string) {

    console.log("test id ", _id);

    try {
      const response = await this._product.deleteProduct(_id);
      console.log("Product deleted successfully");
    } catch (error) {
      console.error(error);
    }

  }

  async editProduct() {

  }

}
