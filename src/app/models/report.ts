import {Guid} from "guid-typescript";
import {ServicePackage} from "./servicePackage";

export class Report{
  bikeTypeId: Guid = Guid.createEmpty();
  bikeBrandId: Guid = Guid.createEmpty();
  serviceComponentId: Guid = Guid.createEmpty();
  addPackages: boolean = true;
  ebike: boolean = false;
  servicePackages?: ServicePackage[] = [];
  message: string = '';
  maxMoney?: number = 0;
  name: string = '';
  sureName: string = '';
  email: string = '';
  phone: string = '';
  street: string = '';
  street2: string = '';
  zip: string = '';
  city: string = '';
}
