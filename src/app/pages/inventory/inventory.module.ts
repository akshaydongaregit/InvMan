import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventoryRoutingModule } from './inventory-routing.module';
import { NewComponent } from './new/new.component';
import { ListComponent } from './list/list.component';
import { ThemeModule } from '../../@theme/theme.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';

@NgModule({
  declarations: [NewComponent, ListComponent],
  imports: [
    CommonModule,
    InventoryRoutingModule ,
    ThemeModule ,
    Ng2SmartTableModule
  ]
})
export class InventoryModule { }
