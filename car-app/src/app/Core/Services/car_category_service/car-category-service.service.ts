import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../../environments/environment.development';
import { APIConstants } from '../../../Shared';
const baseUrl=environment.baseUrl
@Injectable({
  providedIn: 'root'
})
export class CarCategoryServiceService {

  private readonly http = inject(HttpClient);
  getAllCarCategories() {
    return this.http.get(`${baseUrl}`+APIConstants.CATEGORY.GET_ALL);
  }
  getCarCategoriesById(id: string) {
    return this.http.get<any>(`${baseUrl}`+APIConstants.CATEGORY.GET_BY_ID(id));
  }
  deleteCarCategory(id: string) {
    return this.http.delete(`${baseUrl}`+APIConstants.CATEGORY.DELETE(id));
  }
}
