import { Injectable } from '@angular/core';

import {HttpClient} from '@angular/common/http';
@Injectable()
export class DataServiceService {

  data=[
    {
    id:1,
    name:"abc",
    city:"New Delhi",
    state:"Delhi",
    email:"abc@gmail.com",
    address1:"adndfjgnjnsg",
    address2:"bvsfhbghbsgsbgf",
    commission:25,
    isActive:0
  },
  {
    id:2,
    name:"abc",
    city:"New Delhi",
    state:"Delhi",
    email:"abc@gmail.com",
    address1:"adndfjgnjnsg",
    address2:"bvsfhbghbsgsbgf",
    commission:25,
    isActive:0
  },
  {
    id:3,
    name:"abc",
    city:"New Delhi",
    state:"Delhi",
    email:"abc@gmail.com",
    address1:"adndfjgnjnsg",
    address2:"bvsfhbghbsgsbgf",
    commission:25,
    isActive:0
  },
  {
    id:4,
    name:"abc",
    city:"New Delhi",
    state:"Delhi",
    email:"abc@gmail.com",
    address1:"adndfjgnjnsg",
    address2:"bvsfhbghbsgsbgf",
    commission:25,
    isActive:0
  },
  {
    id:5,
    name:"abc",
    city:"New Delhi",
    state:"Delhi",
    email:"abc@gmail.com",
    address1:"adndfjgnjnsg",
    address2:"bvsfhbghbsgsbgf",
    commission:25,
    isActive:0
  },
  {
    id:6,
    name:"abc",
    city:"New Delhi",
    state:"Delhi",
    email:"abc@gmail.com",
    address1:"adndfjgnjnsg",
    address2:"bvsfhbghbsgsbgf",
    commission:25,
    isActive:0
  },
  {
    id:7,
    name:"abc",
    city:"New Delhi",
    state:"Delhi",
    email:"abc@gmail.com",
    address1:"adndfjgnjnsg",
    address2:"bvsfhbghbsgsbgf",
    commission:25,
    isActive:0
  },
  {
    id:8,
    name:"abc",
    city:"New Delhi",
    state:"Delhi",
    email:"abc@gmail.com",
    address1:"adndfjgnjnsg",
    address2:"bvsfhbghbsgsbgf",
    commission:25,
    isActive:0
  },
  {
    id:9,
    name:"abc",
    city:"New Delhi",
    state:"Delhi",
    email:"abc@gmail.com",
    address1:"adndfjgnjnsg",
    address2:"bvsfhbghbsgsbgf",
    commission:25,
    isActive:0
  },
  {
    id:10,
    name:"abc",
    city:"New Delhi",
    state:"Delhi",
    email:"abc@gmail.com",
    address1:"adndfjgnjnsg",
    address2:"bvsfhbghbsgsbgf",
    commission:25,
    isActive:0
  }
  ]
  constructor(private http:HttpClient) { }
  postbroker(Broker){
    this.http.post('http://localhost:58249/api/Broker',Broker).subscribe(res=>{
        console.log(res)
    });
   } 
  getbroker(){
    return this.http.get('http://localhost:58249/api/Broker');
     } 
}
