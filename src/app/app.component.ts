import {Component, OnInit} from '@angular/core';
import {ReportService} from "./services/report.service";
import {BikeType} from "./models/bikeType";
import {BikeBrand} from "./models/bikeBrand";
import {ServiceComponent} from "./models/serviceComponent";
import {forkJoin} from "rxjs";
import {ServicePackage} from "./models/servicePackage";
import {Report} from "./models/report";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public bikeTypes: BikeType[] = [];
  public bikeBrands: BikeBrand[] = [];
  public serviceComponents: ServiceComponent[]= [];
  public servicePackagesForEbike: ServicePackage[] = [];
  public servicePackages: ServicePackage[] = [];
  public report: Report = new Report();
  constructor(private reportService: ReportService) {
  }
  ngOnInit(): void {
    forkJoin([this.reportService.getAllServiceComponents(),
      this.reportService.getAllBikeBrands(),
      this.reportService.getAllBikeTypes(),
      this.reportService.getAllServicePackages(),
    ]).subscribe(([serviceComponents, bikeBrands,bikeTypes,servicePackages])=>{
        this.serviceComponents = serviceComponents;
        this.bikeBrands = bikeBrands;
        this.bikeTypes = bikeTypes;
        this.servicePackages = servicePackages.filter(x=> x.electroBike !== true);
        this.servicePackagesForEbike = servicePackages.filter(x=> x.electroBike === true)
    });
  }
   smoothScroll(target: HTMLElement): void {
    let scrollContainer = target;
    do {
      scrollContainer = scrollContainer.parentNode as HTMLElement;
      if (!scrollContainer) return;
      scrollContainer.scrollTop += 1;
    } while (scrollContainer.scrollTop === 0);

    let targetY = 0 ;
    do {
      if (target === scrollContainer) break;
      targetY += target.offsetTop-10;
      target = target.offsetParent as HTMLElement;
    } while (target);

    const scroll = (c: HTMLElement, a: number, b: number, i: number) => {
      i++;
      if (i > 30) return;
      c.scrollTop = a + ((b - a) / 30) * i;
      setTimeout(() => {
        scroll(c, a, b, i);
      }, 20);
    };
    scroll(scrollContainer, scrollContainer.scrollTop, targetY, 0);
  }

  addPackages(servicePackage: ServicePackage){
    if(this.report.servicePackages !== undefined &&  this.report.servicePackages.some(x=> x.servicePackageId === servicePackage.servicePackageId)){
      this.report.servicePackages = this.report.servicePackages.filter(x=> x.servicePackageId !== servicePackage.servicePackageId);
    }
    else {
      this.report.servicePackages!.push(servicePackage);
    }
  }
  checkSubmit():boolean{
    let reportmodel = this.report;
    if (
      !reportmodel.city ||
      !reportmodel.zip ||
      !reportmodel.street ||
      !reportmodel.street2 ||
      !reportmodel.sureName ||
      !reportmodel.phone ||
      !reportmodel.email ||
      !reportmodel.name
    ) {
      return false;
    }
    return !(reportmodel.addPackages && reportmodel.servicePackages === undefined);

  }
  submit(){
    if(this.checkSubmit()){
      this.reportService.sentReport(this.report).subscribe(res=> {
        console.log('Report sent!')
      });
    }
    else console.log("Error! Fill all data!")
  }

  checkPackage(servicePackage: ServicePackage):boolean{
    return this.report.servicePackages!.some(x=> x.servicePackageId === servicePackage.servicePackageId)
  }

  protected readonly document = document;
}
