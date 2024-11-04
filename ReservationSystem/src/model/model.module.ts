import { NgModule } from "@angular/core";
import { ServiceRepository } from "./service.repository";
import { StaticDataSource } from "./static.datasource";
@NgModule({
 providers: [ServiceRepository, StaticDataSource]
})
export class ModelModule { }
