import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BikeType} from "../models/bikeType";
import {STORE_API_URL} from "../envirements/app-injections-tokens";
import {BikeBrand} from "../models/bikeBrand";
import {ServiceComponent} from "../models/serviceComponent";
import {ServicePackage} from "../models/servicePackage";
import {Report} from "../models/report";

@Injectable({
  providedIn: 'root'
})
export class ReportService {
  private baseApiUrl = `${this.apiUrl}`
  constructor(@Inject(STORE_API_URL) private apiUrl: string,
              private http: HttpClient,) { }

  getAllBikeTypes(): Observable<BikeType[]>
  {
    return this.http.get<BikeType[]>(`${this.baseApiUrl}ReportController/GetAllBikeTypes`)
  }
  getAllServiceComponents(): Observable<ServiceComponent[]>
  {
    return this.http.get<ServiceComponent[]>(`${this.baseApiUrl}ReportController/GetAllServiceComponents`)
  }
  getAllServicePackages(): Observable<ServicePackage[]>
  {
    return this.http.get<ServicePackage[]>(`${this.baseApiUrl}ReportController/GetAllGetServicePackages`)
  }
  getAllBikeBrands(): Observable<BikeBrand[]>
  {
    return this.http.get<BikeBrand[]>(`${this.baseApiUrl}ReportController/GetAllBikeBrands`)
  }
  sentReport(report: Report): Observable<boolean>
  {
    return this.http.post<boolean>(`${this.baseApiUrl}ReportController/SentReport`, report)
  }
}
