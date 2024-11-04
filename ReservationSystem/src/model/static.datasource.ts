import { Injectable } from "@angular/core";
import { Service } from "./service.model";
import { Observable, from, of } from "rxjs";
@Injectable({ providedIn: 'root' })
export class StaticDataSource {
  private services: Service[] = [
    new Service(1, "Area-1", "Morning", "A session from 9am-12pm", 100),
    new Service(2, "Area-1", "Noon", "A session from 12pm-3pm", 75),
    new Service(3, "Area-1", "Afternoon", "A session from 3pm-6pm", 50),
    new Service(4, "Area-2", "Morning", "A session from 9am-12pm", 150),
    new Service(5, "Area-2", "Noon", "A session from 12pm-3pm", 125),
    new Service(6, "Area-2", "Afternoon", "A session from 3pm-6pm", 100),
    new Service(7, "Area-3", "Morning", "A session from 9am-12pm", 150),
    new Service(8, "Area-3", "Noon", "A session from 12pm-3pm", 125),
    new Service(9, "Area-3", "Afternoon", "A session from 3pm-6pm", 100),
    new Service(10, "Area-4", "Morning", "A session from 9am-12pm", 200),
    new Service(11, "Area-4", "Noon", "A session from 12pm-3pm", 175),
    new Service(12, "Area-4", "Afternoon", "A session from 3pm-6pm", 150),
  ];

  getServices(): Observable<Service[]> {
    return of(this.services);
  }
}
