import { Injectable } from "@angular/core";
import { Service } from "./service.model";
import { Observable, from } from "rxjs";
@Injectable()
export class StaticDataSource {
  private services: Service[] = [
    { id: 1, name: "Area-1", session: "Morning", description: "A session from 9am-12pm" },
    { id: 2, name: "Area-1", session: "Noon", description: "A session from 12pm-3pm" },
    { id: 3, name: "Area-1", session: "Afternoon", description: "A session from 3pm-6pm" },
    { id: 4, name: "Area-2", session: "Morning", description: "A session from 9am-12pm" },
    { id: 5, name: "Area-2", session: "Noon", description: "A session from 12pm-3pm" },
    { id: 6, name: "Area-2", session: "Afternoon", description: "A session from 3pm-6pm" },
    { id: 7, name: "Area-3", session: "Morning", description: "A session from 9am-12pm" },
    { id: 8, name: "Area-3", session: "Noon", description: "A session from 12pm-3pm" },
    { id: 9, name: "Area-3", session: "Afternoon", description: "A session from 3pm-6pm" },
    { id: 10, name: "Area-4", session: "Morning", description: "A session from 9am-12pm" },
    { id: 11, name: "Area-4", session: "Noon", description: "A session from 12pm-3pm" },
    { id: 12, name: "Area-4", session: "Afternoon", description: "A session from 3pm-6pm" },
  ];

  getServices(): Observable<Service[]> {
    return from([this.services]);
  }
}
