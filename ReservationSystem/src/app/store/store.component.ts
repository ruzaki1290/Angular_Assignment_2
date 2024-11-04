import { Component } from "@angular/core";
import { Service } from "../model/service.model";
import { ServiceRepository } from "../model/service.repository";
@Component({
  selector: "store",
  templateUrl: "store.component.html"
})
export class StoreComponent {
  selectedSession: string | undefined;
  sessionsPerPage = 4;
  selectedPage = 1;

  constructor(private repository: ServiceRepository) { }

  get services(): Service[] {
    let pageIndex = (this.selectedPage - 1) * this.sessionsPerPage
    return this.repository.getServices(this.selectedSession)
    .slice(pageIndex, pageIndex + this.sessionsPerPage);
  }

  get sessions(): string[] {
    return this.repository.getSessions();
  }

  changeSession(newSession?: string) {
    this.selectedSession = newSession;
  }

  changePage(newPage: number) {
    this.selectedPage = newPage;
    }
    changePageSize(newSize: number) {
    this.sessionsPerPage = Number(newSize);
    this.changePage(1);
    }
    get pageNumbers(): number[] {
    return Array(Math.ceil(this.repository
    .getServices(this.selectedSession).length / this.sessionsPerPage))
    .fill(0).map((x, i) => i + 1);
    }
}
