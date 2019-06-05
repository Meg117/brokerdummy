import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
@Injectable()
export class DataServiceService {
appData;
  broker=[
    {
    id:Number,
    brokerName:String,
    city:String,
    state:String,
    email:String,
    add1:String,
    add2:String,
    commission:Number,
    isActive:Number
    }
  
 
  

  ]
  constructor(private http:HttpClient) { }
  
  getbroker(){
    return this.http.get('http://localhost:58249/api/Broker');
     } 
  postbroker(i){
    this.http.post('http://localhost:58249/api/Broker',i).subscribe(res=>{
        console.log(res)
    });
   }
   deleteb(id){
    return this.http.delete(`http://localhost:58249/api/Broker/${id}`)
   }
   updatebroker(id,i) {
   return this.http.put(`http://localhost:58249/api/Broker/${id}`,i)
    }
}

