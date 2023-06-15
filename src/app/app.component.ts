import {Component, OnInit} from '@angular/core';
import {ReportService} from "./services/report.service";
import {BikeType} from "./models/bikeType";
import {BikeBrand} from "./models/bikeBrand";
import {Guid} from "guid-typescript";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public bikeTypes: BikeType[] = [];
  public bikeBrands: BikeBrand[] = [];
  constructor(private reportService: ReportService) {
  }
  ngOnInit(): void {
    this.reportService.getAllBikeTypes().subscribe(res=>{
      this.bikeTypes = res;
      console.log(res)

    })
    this.reportService.getAllBikeBrands().subscribe(res=>{
      this.bikeBrands = res;
    })
  }
}
