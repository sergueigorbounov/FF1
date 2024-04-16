import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Cell } from './grid-display/grid-display.component'; // Ensure you import Cell interface

/*interface Cell {
  burned?: boolean;
  burning?: boolean;
  tree?: boolean;
}*/
/*class Cell {
}*/

@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(private http: HttpClient) {}
  startSimulation(): Observable<Cell[][]> {
    // Assuming this.http.post returns Observable<Cell[][]>
    return this.http.post<Cell[][]>('/simulation/start', {});
  }

  stepSimulation(): Observable<Cell[][]> {
    // Assuming this.http.get returns Observable<Cell[][]>
    return this.http.get<Cell[][]>('/simulation/step');
  }
}







