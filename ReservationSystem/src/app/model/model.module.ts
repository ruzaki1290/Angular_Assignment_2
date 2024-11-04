import { NgModule } from "@angular/core";
import { ServiceRepository } from "./service.repository";
import { StaticDataSource } from "./static.datasource";
import { Cart } from "./cart.model";
@NgModule({
 providers: [ServiceRepository, StaticDataSource, Cart]
})
export class ModelModule { }
