import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { APIConstants } from '../../../Shared/Constants/APIConstants';
const baseUrl=environment.baseUrl;
@Injectable({
  providedIn: 'root'
})
export class CarTypeServiceService {

  constructor(private readonly http: HttpClient) { }

  getAllCarTypes(): Observable<any[]> {
    return this.http.get<any[]>(`${baseUrl}`+APIConstants.CARTYPE.GET_ALL);
  }
  getCarTypeById(id: string): Observable<any> {
    return this.http.get(`${baseUrl}`+APIConstants.CARTYPE.GET_BY_ID(id));
  }
  deleteCarType(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}`+APIConstants.CARTYPE.DELETE(id));
  }
}
