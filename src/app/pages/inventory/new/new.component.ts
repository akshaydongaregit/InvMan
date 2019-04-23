import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../shared/inventory.service';
import { Item } from '../shared/models/item';

@Component({
  selector: 'ngx-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  item:Item;

  constructor(private service:InventoryService) {
    this.item = {
      name:'' ,
      id: '0',
      code: 'P010',
      price: "0",
      unit: 'None',
      quantity: '0',
      descp: 'None',
      category: 'None' 
    };
   }

  ngOnInit() {
  }

  onSubmit(event){
   
    let result = this.service.saveItem(this.item);
    result.subscribe( data => {
    alert(' added '+JSON.stringify(data));
    } ,
    err => {
      alert(JSON.stringify(err));
    });

  }
}
