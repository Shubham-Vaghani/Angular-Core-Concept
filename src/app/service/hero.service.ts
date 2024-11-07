import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class HeroService {
  // Only subject
  serviceS = new Subject();

  // Behavior Subject
  serviceBS = new BehaviorSubject('chagne and see the update');
  $serviceBS = this.serviceBS.asObservable();

  updateValue(value: any) {
    this.serviceBS.next(value);
  }
}
