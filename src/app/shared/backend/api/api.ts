export * from './productController.service';
import { ProductControllerService } from './productController.service';
export * from './stockController.service';
import { StockControllerService } from './stockController.service';
export * from './warehouseController.service';
import { WarehouseControllerService } from './warehouseController.service';
export const APIS = [ProductControllerService, StockControllerService, WarehouseControllerService];
