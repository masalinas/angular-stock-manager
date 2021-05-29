import { Component } from '@angular/core';

// component services
import { WarehouseReq } from './shared/backend/model/models';
import { WarehouseControllerService } from './shared/backend/api/api';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-stock-manager';
  public warehouses: WarehouseReq[] = [];

  constructor(private warehouseControllerService: WarehouseControllerService) {
    this.warehouseControllerService.findAll2()
    .subscribe((warehouses: any) => {
      this.warehouses = warehouses;

      console.log(warehouses);  
    },
    err => {
      console.log(err);  
    });
  }
}
