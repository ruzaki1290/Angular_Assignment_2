import { Component } from "@angular/core";
import { Service } from "../model/service.model";
import { ServiceRepository } from "../model/service.repository";
@Component({
 selector: "store",
 templateUrl: "store.component.html"
})
export class StoreComponent {
 constructor(private repository: ServiceRepository) { }
 get services(): Service[] {
  return this.repository.getServices();
 }

 get sessions(): string[] {
  return this.repository.getSessions();
  }
 }
