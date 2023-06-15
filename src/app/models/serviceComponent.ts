import {Guid} from "guid-typescript";

export class ServiceComponent{
  public servicePackageId: Guid = Guid.createEmpty();
  public name: string = '';
  public description: string = '';
  public price: number = 0;
  public currency: string = '';
}
