import { Injectable } from "@angular/core";
import { Service } from "./service.model";
import { StaticDataSource } from "./static.datasource";

@Injectable()
export class ServiceRepository {
 private services: Service[] = [];
 private sessions: string[] = [];

 constructor(private dataSource: StaticDataSource) {
  dataSource.getServices().subscribe(data => {
    this.services = data;
    this.sessions = data.map(s => s.session ?? "(None)")
     .filter((c, index, array) => array.indexOf(c) == index).sort();
  });
 }

 getServices(session?: string): Service[] {
  return this.services
    .filter(s => session == undefined || session == s.session);
 }

 getService(id: number): Service | undefined {
  return this.services.find(s => s.id == id);
 }

 getSessions(): string[] {
  return this.sessions;
 }
}
