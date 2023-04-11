import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationsService {

  isuserLoggedIn = new BehaviorSubject<boolean>(false);
  isLogginFailed: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor(private _http: HttpClient, private _router: Router) { }

  async userSignUp(data: any) {
    if (!data.name || !data.email || !data.password) {
      alert('Please fill in all required fields.');
      return;
    }
  
    try {
      const response = await axios.post('http://10.8.10.81:3000/user/register', data, { headers: { "Content-Type": "application/json" } });
      localStorage.setItem('user', JSON.stringify(response.data));
      this.isuserLoggedIn.next(true);
      console.log('Sign up success!');
      this._router.navigate(['/admin']);
    } catch (error) {
      console.error('Sign up failed', error);
    }
  }
  

  async userLogin(data: any) {
    // if (!data.email || !data.password) {
    //   alert('Please fill in all fields.');
    //   return;
    // }
  
    try {
      console.log(data);
      const response = await axios.post<any>('http://10.8.10.81:3000/user/login', data);
      const user = response.data;
      console.log(user)
      
      if (user) {
        localStorage.setItem('user', JSON.stringify(response.data));
        console.log("User Logged In Successfully");
        this.isuserLoggedIn.next(true);
        this.isLogginFailed.next(false);
        this._router.navigate(['./admin']);
      } else {
        this.isLogginFailed.next(true);
      }
    } catch (error) {
      console.error(error);
      this.isLogginFailed.next(true);
    }
  }
  
  reloadSeller() {
    if (localStorage.getItem('user')) {
      this.isuserLoggedIn.next(true);
      this._router.navigate(['./admin'])
    }
}

  getCurrentUser(): any {
    const user = localStorage.getItem('user');
    
    if (user) {
      return JSON.parse(user);
    } else {
      return null;
    }
  }

}
