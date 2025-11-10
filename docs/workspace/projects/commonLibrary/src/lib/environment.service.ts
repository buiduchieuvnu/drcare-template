import { Injectable, isDevMode } from '@angular/core';
import { environment as envDev } from './environments/environment';
import { environment as envProd } from './environments/environment.prod';

@Injectable({ providedIn: 'root' })
export class EnvironmentService {
  public static env = isDevMode() ? envDev : envProd;
}
