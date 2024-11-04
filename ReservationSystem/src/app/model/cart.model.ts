import { Injectable } from "@angular/core";
import { Service } from "./service.model";

@Injectable()
export class Cart {
  public lines: CartLine[] = [];
  public itemCount: number = 0;
  public cartPrice: number = 0;

  addLine(service: Service, quantity: number = 1) {
    let line = this.lines.find(line => line.service.id == service.id);
    if (line != undefined) {
      line.quantity += quantity;
    } else {
      this.lines.push(new CartLine(service, quantity));
    }
    this.recalculate();
  }

  updateQuantity(service: Service, quantity: number) {
    let line = this.lines.find(line => line.service.id == service.id);
    if (line != undefined) {
      line.quantity = Number(quantity);
    }
    this.recalculate();
  }

  removeLine(id: number) {
    let index = this.lines.findIndex(line => line.service.id == id);
    this.lines.splice(index, 1);
    this.recalculate();
  }

  clear() {
    this.lines = [];
    this.itemCount = 0;
    this.cartPrice = 0;
  }

  private recalculate() {
    this.itemCount = 0;
    this.cartPrice = 0;

    this.lines.forEach(l => {
      this.itemCount += l.quantity;
      this.cartPrice += l.lineTotal;
    });
  }
}

export class CartLine {
  constructor(public service: Service, public quantity: number) {}

  get lineTotal() {
    return this.quantity * (this.service.price ?? 0);
  }
}