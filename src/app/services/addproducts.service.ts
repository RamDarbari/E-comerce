import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { product } from '../data';
import axios from 'axios';
import { Observable, from } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AddproductsService {

  constructor(private _http: HttpClient) { }

  addProduct(data: product) {
    return axios.post('http://10.8.10.244:3000/product/addproduct', data);
  }

  productList(): Observable<any> {
    return from(axios.get<product[]>('http://10.8.10.244:3000/product/getmobile'));
  }
  deleteProduct(id: string){
    return axios.post('http://10.8.10.149:3000/product/deleteProduct/',{id:id});
  }
}
