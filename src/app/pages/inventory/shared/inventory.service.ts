import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';
import { Item } from './models/item';
import { HttpClient } from '@angular/common/http';

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

  apiBase = 'https://invmansl.herokuapp.com';

  constructor(private http:HttpClient) { }

  getAllItems(): Observable<Item[]>{
    var data = {
    };
    return this.http.get<Item[]>(this.apiBase+'/inventory/items',data);
  }

  saveItem(item:Item): Observable<any>{

    var data = {
        id : item.id ,
       name:  item.name,
       code: item.code ,
       unit: item.unit ,
       quantity: item.quantity,
       price: item.price,
       descp: item.descp ,
       category: item.category
    };

    //console.log(JSON.stringify(item));
    return this.http.post<any>(this.apiBase+'/inventory/add',data);
  } 
}
