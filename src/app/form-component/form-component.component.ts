import { Component, OnInit } from '@angular/core';
import {DataServiceService} from "../data-service.service";
@Component({
  selector: 'app-form-component',
  templateUrl: './form-component.component.html',
  styleUrls: ['./form-component.component.css']
})
export class FormComponentComponent implements OnInit {

  constructor(private dataApi:DataServiceService) { }
  error:string ;
  isEdit=false
  editpos;
  brokerName1:String
  city1:String
  state1:String
  email1:String
  add11:String
  add21:String
  commission1:Number
  appData={
    
    brokerName:String,
    city:String,
    state:String,
    email:String,
    add1:String,
    add2:String,
    commission:Number,
  
  };
  alpha:RegExp=/^[a-zA-Z]*$/;
  num:RegExp=/^[0-9]\d*(\.\d+)?$/;

  regex:RegExp= /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  onSubmit(brokerName ,email ,city ,state ,add1 ,add2 ,commission ):string{
    
    if (this.alpha.test(brokerName)==false || brokerName.length <3 || brokerName.length>100 ) {
      
      return this.error="Name cannot be less than 3 and greater than 100 or a number";
    }
    else if(!this.regex.test(email)){
      
      return this.error="Email is invalid";
    }
    else if(this.alpha.test(city)==false || city.length <3 || city.length>100 ) {
      
      return this.error="Enter a valid city name with length between 3 and 100 characters";
    }
    else if(state=="none"||state.length<2) {
      
      return this.error="Enter a valid state name with length between 3 and 100 characters";
    }
    else if(add1.length <10 || add1.length>100 ) {
      
      return this.error="Min length 10 and Max length 100 ";

    }else if(add2.length>100 ) {
      
      return this.error="Max length 100 ";

    }else if(this.num.test(commission)==false){

      return this.error="Invalid Value";
    }

   

    this.error = "success";
    if(this.isEdit==true)
    {
      let id=this.dataApi.appData[this.editpos].brokersId;
      let isActive=this.dataApi.appData[this.editpos].isActive;
      let obj={brokerName:brokerName,
        email:email,
        city:city,
        state:state,
        add1:add1,
        add2:add2,
        commission:commission,
        isActive:isActive

      }
this.dataApi.updatebroker(id,obj).subscribe(val=>this.dataApi.appData=val);
this.isEdit=false;
    }
    else{
      this.appData ={brokerName:brokerName,email:email,city:city,state:state,add1:add1,add2:add2,commission:commission}
      this.dataApi.postbroker(this.appData);

    }
  
   
     
    

  }
onget(pos){
  console.log(pos);
  this.editpos=pos-1;
  let obj=this.dataApi.appData[pos-1];
  this.brokerName1=obj.brokerName;
  this.email1=obj.email;
  this.city1=obj.city;
  this.state1=obj.state;
  this.add11=obj.add1;
  this.add21=obj.add2;
  this.commission1=obj.commission;
  this.isEdit=true;
  console.log(obj);
}
  reset(){
    this.error=null;
  }

  ngOnInit() {
  }
 
}
