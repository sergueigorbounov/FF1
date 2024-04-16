/*/!*import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";

class Cell {
  burned?: boolean;
  burning?: boolean;
  tree?: boolean;
}

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
}*!/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Cell } from './grid-display/grid-display.component';
// Ensure you import Cell interface

/!*interface Cell {
  burned?: boolean;
  burning?: boolean;
  tree?: boolean;
}*!/
/!*class Cell {
}*!/
/!*interface Cell {
  burned?: boolean;
  burning?: boolean;
  tree?: boolean;}*!/

@Injectable({
  providedIn: 'root'

})

export class SimulationService {

  constructor(public http: HttpClient) {
  }

  startSimulation(): Observable<Cell[][]> {
    // Assuming this.http.post returns Observable<Cell[][]>
    return this.http.post<Cell[][]>('/simulation/start', {});
  }

  stepSimulation(): Observable<Cell[][]> {
    // Assuming this.http.get returns Observable<Cell[][]>
    return this.http.get<Cell[][]>('/simulation/step');
  }
}*/


/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs";
import { Cell } from './grid-display/grid-display.component'; // Ensure you import Cell interface


@Injectable({
  providedIn: 'root'
})
export class SimulationService {

  constructor(public http: HttpClient) {}
  startSimulation(): Observable<Cell[][]> {
    // Assuming this.http.post returns Observable<Cell[][]>
    return this.http.post<Cell[][]>('/simulation/start', {});
  }

  stepSimulation(): Observable<Cell[][]> {
    // Assuming this.http.get returns Observable<Cell[][]>
    return this.http.get<Cell[][]>('/simulation/step');
  }
}
*/
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
/*
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError } from 'rxjs';
  // adjust the path as necessary

export interface SimulationStep {
  // Define your data structure here
}

@Injectable({
  providedIn: 'root'
})
export class SimulationService {
  private baseUrl = "localhost:8080";  // Define your API URL in environment

  constructor(private http: HttpClient) {}

  startSimulation(): Observable<SimulationStep[]> {
    return this.http.post<SimulationStep[]>(`${this.baseUrl}/simulation/start`, {})
      .pipe(
        catchError(error => {
          console.error('Error starting simulation', error);
          throw 'Error starting simulation, check console for details';
        })
      );
  }

  stepSimulation(): Observable<SimulationStep[]> {
    return this.http.get<SimulationStep[]>(`${this.baseUrl}/simulation/step`)
      .pipe(
        catchError(error => {
          console.error('Error performing simulation step', error);
          throw 'Error performing simulation step, check console for details';
        })
      );
  }
}
*/
