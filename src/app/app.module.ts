
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import { AppComponent } from './app.component';
import { FormComponentComponent } from './form-component/form-component.component';
import { TableComponent } from './table/table.component';
import { ModalComponent } from './modal/modal.component';
import {DataServiceService} from "./data-service.service";
 
@NgModule({
  declarations: [
    AppComponent,
    FormComponentComponent,
    TableComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule,FormsModule,NgModule
  ],
  providers: [DataServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }