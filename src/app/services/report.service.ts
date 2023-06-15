import {Inject, Injectable} from '@angular/core';
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";
import {BikeType} from "../models/bikeType";
import {STORE_API_URL} from "../envirements/app-injections-tokens";
import {BikeBrand} from "../models/bikeBrand";

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
  getAllBikeBrands(): Observable<BikeBrand[]>
  {
    return this.http.get<BikeBrand[]>(`${this.baseApiUrl}ReportController/GetAllBikeBrands`)
  }
}