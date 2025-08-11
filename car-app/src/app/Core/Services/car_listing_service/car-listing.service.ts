import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { APIConstants } from '../../../Shared';
import { Observable } from 'rxjs';
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class CarListingService {

  constructor(private readonly http: HttpClient) { }
  getAllCars(): Observable<any> {
    return this.http.get(`${baseUrl}`+APIConstants.CARS.GET_ALL);
  }
  getCarById(id: string): Observable<any> {
    return this.http.get(`${baseUrl}`+APIConstants.CARS.GET_BY_ID(id));
  }
  deleteCar(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}`+APIConstants.CARS.DELETE(id));
  }
}
