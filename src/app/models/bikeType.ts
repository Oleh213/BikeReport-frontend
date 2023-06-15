import {Guid} from "guid-typescript";

export class BikeType{
  public name: string = '';
  public bikeTypeId: Guid  = Guid.createEmpty();
}
