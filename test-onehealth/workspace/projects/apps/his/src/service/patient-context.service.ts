// patient-context.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PatientRow } from '../models/patient.model';

@Injectable({ providedIn: 'root' })
export class PatientContextService {

  private selectedPatient$ = new BehaviorSubject<PatientRow | null>(null);

  set(patient: PatientRow) {
    this.selectedPatient$.next(patient);
  }

  clear() {
    this.selectedPatient$.next(null);
  }

  get value(): PatientRow | null {
    return this.selectedPatient$.value;
  }

  get stream() {
    return this.selectedPatient$.asObservable();
  }
}
