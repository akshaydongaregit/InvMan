import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {

  data = [{
    id: 1 ,
    name: 'Wheet' ,
    code : 'P1' ,
    quantity :  12,
    unit: '' ,
    price: 12 ,
    desc : '' ,
    category: ''    
  },
  {
    id: 2 ,
    name: 'Wheet' ,
    code : 'P1' ,
    quantity :  12,
    unit: '' ,
    price: 12 ,
    desc : '' ,
    category: ''    
  }

]
 getData(): any[]{
  return this.data
 };

  constructor() { }
}
