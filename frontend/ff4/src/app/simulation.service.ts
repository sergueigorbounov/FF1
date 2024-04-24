import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'

})
export class SimulationService {
  constructor(public http: HttpClient) {}

  startSimulation(): Observable<any[][]> {
    return this.http.post<any[][]>('/simulation/start', {});
  }

  stepSimulation(): Observable<any[][]> {
    return this.http.get<any[][]>('/simulation/step');
  }
}
