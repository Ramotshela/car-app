import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class StateServiceService {
  constructor() {}
  private readonly stateSubject = new BehaviorSubject<string>('BROWSE_CARS');
  _stateSubject = this.stateSubject.asObservable();
  getStateSubject(state: string) {
    this.stateSubject.next(state);
  }
  getStateSubjectVal() {
    return this.stateSubject.value;
  }
}
