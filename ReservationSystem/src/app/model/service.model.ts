// This will hold our data model for a service and keep a track of id, name, session and a price.
export class Service {
  static id: any;
  constructor(
  public id?: number,
  public name?: string,
  public session?: string,
  public description?: string,
  public price?: number) { }
 }
