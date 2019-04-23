import { Component, OnInit } from '@angular/core';
import { LocalDataSource } from 'ng2-smart-table';
import { InventoryService } from '../shared/inventory.service';

@Component({
  selector: 'ngx-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true,
    },
    columns: {
      id: {
        title: 'ID',
        type: 'number',
      },
      name: {
        title: 'Name',
        type: 'string',
      },
      code: {
        title: 'Code',
        type: 'string',
      },
      quantity: {
        title: 'Quantity',
        type: 'number',
      },
      price: {
        title: 'Price',
        type: 'number',
      },
      category: {
        title: 'Category',
        type: 'string',
      },
    },
  };

   source: LocalDataSource ;

   list = [{
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

] ;
  constructor(private service: InventoryService) {
    const data = this.service.getAllItems();
    this.source = new LocalDataSource();
    data.subscribe({
      next: res => {
      this.source.load(res);
    } ,
    error:err=>{
      console.log(err);
    }
  });
    
  }

  ngOnInit() {
  }
  
  onDeleteConfirm(event): void {
    if (window.confirm('Are you sure you want to delete?')) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

}
