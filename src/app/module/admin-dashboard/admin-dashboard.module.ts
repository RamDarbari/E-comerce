import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardRoutingModule } from './admin-dashboard-routing.module';
import { ToastrModule } from 'ngx-toastr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AdminDashboardRoutingModule,
    // ToastrModule.forRoot()
    FormsModule,
    ReactiveFormsModule,
    // BrowserModule
  ],
  schemas: [
    NO_ERRORS_SCHEMA
  ]
})
export class AdminDashboardModule { }
