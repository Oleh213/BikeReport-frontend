import {Guid} from "guid-typescript";

export class ServicePackage{
  public servicePackageId: Guid = Guid.createEmpty();
  public name: string = '';
  public electroBike: boolean = false;
}

