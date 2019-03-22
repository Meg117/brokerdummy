import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service"
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  appData:any;
  constructor(private data:DataServiceService) { }

  ngOnInit() {
    this.appData = this.data.data;
    console.log(this.appData);
  }
  Toggle(id){
    // console.log(this.data.data[0].isActive);
    if(this.appData[id-1].isActive == 0){
      this.appData[id-1].isActive =1;
      console.log(this.appData[id-1].isActive);
    }
    else{
      this.appData[id-1].isActive = 0;
      console.log(this.appData[id-1].isActive);
    }
  }
}

