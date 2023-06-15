import {Component, OnInit} from '@angular/core';
import {ReportService} from "./services/report.service";
import {BikeType} from "./models/bikeType";
import {BikeBrand} from "./models/bikeBrand";
import {Guid} from "guid-typescript";
import {ServiceComponent} from "./models/serviceComponent";
import {forkJoin} from "rxjs";
import {ServicePackage} from "./models/servicePackage";

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
        console.log(serviceComponents);
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

  protected readonly document = document;
}
