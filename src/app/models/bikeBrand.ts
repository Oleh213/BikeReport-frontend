import {Guid} from "guid-typescript";

export class BikeBrand{
  public name: string = '';
  public bikeBrandId: Guid  = Guid.createEmpty();
}
