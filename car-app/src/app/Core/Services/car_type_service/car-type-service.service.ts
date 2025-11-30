import { inject, Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from '../../../../environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { APIConstants } from '../../../Shared/Constants/APIConstants';
import { OfflineRequestsService } from '../Offline_Requests_Service/offline-requests-service.service';
import { FilterItem } from '../../Models';
const baseUrl = environment.baseUrl;
@Injectable({
  providedIn: 'root',
})
export class CarTypeServiceService {
  private readonly http = inject(HttpClient);
  private readonly offlineService = inject(OfflineRequestsService);

  private DataStore: { carTypesCategoryFilter: FilterItem[] } = {
    carTypesCategoryFilter: [
      { id: '', name: '', categoryDto: [{ id: '', name: '' }] },
    ],
  };
  private readonly carTypeSubject = new BehaviorSubject<FilterItem[]>(
    this.DataStore.carTypesCategoryFilter
  );
  public readonly carTypes$ = new Observable<FilterItem[]>();
  constructor() {
    this.carTypes$ = this.carTypeSubject.asObservable();
  }
  getAllCarTypesCategoryFilter(): void {
    const apiUrl = `${baseUrl}${APIConstants.CarTypeCategoryFilter.GET_ALL}`;
    try {
      if (window.navigator.onLine) {
        //pipe map and change the res to observable
        this.http.get<FilterItem[]>(apiUrl).subscribe(async (data) => {
          if (data !== null) {
            console.log('Fetched car types from API:', data);
          this.carTypeSubject.next(data);
            this.DataStore.carTypesCategoryFilter = data;
            this.carTypeSubject.next(Object.assign([], this.DataStore.carTypesCategoryFilter));
            sessionStorage.setItem(
              'carTypesCategoryFilter',
              JSON.stringify(this.DataStore.carTypesCategoryFilter)
            );
          } else {
            sessionStorage.setItem(
              'carTypesCategoryFilter',
              JSON.stringify(this.DataStore.carTypesCategoryFilter)
            );
          }


          await this.offlineService.saveData(
            'cartypes',
            this.DataStore.carTypesCategoryFilter
          );
        });
      } else {
        this.offlineService.getData('cartypes');
      }
    } catch (error) {
      console.error(error);
      this.offlineService.getData('cartypes');
    }
  }
  allCarTypes() {
    return this.carTypeSubject.value;
  }
  getCarTypeById(id: string): Observable<any> {
    return this.http.get(`${baseUrl}` + APIConstants.CARTYPE.GET_BY_ID(id));
  }
  async createCarType(data: any) {
    const apiUrl = `${baseUrl}${APIConstants.CARTYPE.CREATE}`;

    if (navigator.onLine) {
      return this.http.post(apiUrl, data).toPromise();
    } else {
      console.warn('Offline: saving request locally');
      await this.offlineService.saveRequest({
        url: apiUrl,
        method: 'POST',
        body: data,
      });

      // Schedule background sync (optional)
      if ('serviceWorker' in navigator && 'SyncManager' in window) {
        const registration = await navigator.serviceWorker.ready;
        (registration as any).sync.register('sync-requests');
      }

      return { status: 'saved-offline' };
    }
  }

  deleteCarType(id: string): Observable<any> {
    return this.http.delete(`${baseUrl}` + APIConstants.CARTYPE.DELETE(id));
  }
}
