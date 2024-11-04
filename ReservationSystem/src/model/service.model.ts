// This will hold our data model for a service and keep a track of id, name, session and a price.
export class Service {
  constructor(
  public id?: number,
  public name?: string,
  public session?: string,
  public description?: string,
  public price?: number) { }
 }
