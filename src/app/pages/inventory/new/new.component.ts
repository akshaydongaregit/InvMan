import { Component, OnInit } from '@angular/core';
import { InventoryService } from '../shared/inventory.service';
import { Item } from '../shared/models/item';

@Component({
  selector: 'ngx-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.scss']
})
export class NewComponent implements OnInit {

  constructor(private service:InventoryService) { }

  ngOnInit() {
  }

  onSubmit(event){
    let item:Item;
    let result = this.service.saveItem(item);
    alert(' added '+result);

  }
}
