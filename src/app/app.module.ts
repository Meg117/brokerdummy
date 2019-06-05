import { RouterModule } from '@angular/router'
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { TableComponent } from './table/table.component';
import {DataServiceService} from "./data-service.service";
import {NgxPaginationModule} from 'ngx-pagination';

@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    TableComponent,
  
  ],
  imports: [
    BrowserModule,FormsModule,NgxPaginationModule, BrowserAnimationsModule,HttpClientModule,RouterModule 
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }