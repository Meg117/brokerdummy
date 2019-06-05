
import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {DataServiceService} from "../data-service.service"
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  @Output() public childEvent=new EventEmitter();
  appData
    
    // brokerName:String,
    // city:String,
    // state:String,
    // email:String,
    // add1:String,
    // add2:String,
    // commission:Number,
  
  ;
  id;
  view;
  constructor(private dataApi:DataServiceService) { }

  ngOnInit() {
    this.dataApi.getbroker().subscribe(data=>{this.dataApi.appData=data;this.appData=data;});
        console.log(this.dataApi.appData);
  }
  Toggle(id){
    // console.log(this.data.data[0].isActive);
    // if(this.appData[id-1].isActive == 0){
    //   this.appData[id-1].isActive =1;
    //   console.log(this.appData[id-1].isActive);
    // }
    // else{
    //   this.appData[id-1].isActive = 0;
    //   console.log(this.appData[id-1].isActive);
    // }
    console.log(this.appData)
    this.appData.forEach(element => {
      console.log(element)
      if(element.brokersId == id){
        
        if(element.isActive == 1){
          element.isActive = 0;
        }else{
          element.isActive = 1;
        }
      }
    });
    console.log(this.appData);
  }
  delbroker(pos){
    // console.log(this.dataApi.appData[pos]);
    // let id=this.dataApi.appData[pos].brokersId;
    console.log(pos);
    this.dataApi.deleteb(pos).subscribe(val=>console.log(val)
    );
  }
  updateb(pos){
    this.childEvent.emit(pos);
  }
show(pos){
this.view=this.dataApi.appData[pos];
}
  
}