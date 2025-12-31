import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class NewsActionStateService {

  private selectedIdsSubject = new BehaviorSubject<number[]>([]);
  selectedIds$ = this.selectedIdsSubject.asObservable();

  private isEditRouteSubject = new BehaviorSubject<boolean>(false);
  isEditRoute$ = this.isEditRouteSubject.asObservable();

  setSelectedIds(ids: number[]) {
    this.selectedIdsSubject.next(ids);
  }

  setEditRoute(isEdit: boolean) {
    this.isEditRouteSubject.next(isEdit);
  }

  resetSelection() {
    this.selectedIdsSubject.next([]);
  }
}
