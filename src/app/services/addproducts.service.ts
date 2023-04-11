import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { category, product, Subcategory } from '../data';
import axios from 'axios';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddproductsService {

  constructor(private _http: HttpClient) { }

  addProduct(data: product) {
    return axios.post('http://10.8.10.244:3000/product/addproduct', data);
  };
  productList(): Observable<any> {
    return from(axios.get<product[]>('http://10.8.10.81:3000/product/getProduct'));
  };
  deleteProduct(id: string){
    return axios.post(`http://10.8.10.244:3000/product/deleteproduct?_id=${id}`);
  };
  updateProduct(id: string){
    return axios.post(`http://10.8.10.244:3000/product/updateproduct?_id=${id}`)
  };
  categoriesList(): Observable<any>{
    return from(axios.get<category[]>('http://10.8.10.81:3000/category/getCategory'));
  };
  getSubCategories(id: string): Observable<any> {
    return from (axios.get<Subcategory[]>(`http://10.8.10.81:3000/category/subcategory/getSubCategory?_id=${id}`));
  };
  addToCart(){
    return axios.post('http://10.8.10.244:3000/cart/addToCart');
  }
}
