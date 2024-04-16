/*
import { Component } from '@angular/core';
import { SimulationService } from '../simulation.service';
import {NgClass, NgForOf} from "@angular/common";
export interface Cell {
  burned?: boolean;
  burning?: boolean;
  tree?: boolean;
}
@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrl: './grid-display.component.css',
  standalone: true,
  imports: [
    NgClass,
    NgForOf
  ],
  //providers: [SimulationService],
})
export class GridDisplayComponent {
gridState: Cell[][] = [];
  constructor(public simulationService: SimulationService) {console.log(simulationService);}
*/
/*import { Component } from '@angular/core';
import { SimulationService } from '../simulation.service';
import {NgClass, NgForOf} from "@angular/common";

interface Cell {
    burned: any;
  burning: any;
  tree: any;
}

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrls: ['./grid-display.component.css'],
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ]
})
export class GridDisplayComponent {
  gridState: any[][] | undefined;

  constructor(private simulationService: SimulationService) {}

  startSimulation(): void {
    this.simulationService.startSimulation().subscribe(data => {
      this.gridState = data;
    });
  }

  stepSimulation(): void {
    this.simulationService.stepSimulation().subscribe(data => {
      this.gridState = data;
    });
  }
  getCellClass(cell: Cell): string {
    if (cell.burned) {
      return 'cell burned';
    } else if (cell.burning) {
      return 'cell burning';
    } else if (cell.tree) {
      return 'cell tree';
    }
    return 'cell';
  }

  getCellEmoji(cell: Cell): string {
    if (cell.tree) {
      return '🌳';
    } else if (cell.burning) {
      return '🔥';
    }
    return ''; // Empty string for cells that are neither trees nor burning
  }
}*/
import { Component, OnDestroy } from '@angular/core';
import { SimulationService } from '../simulation.service';
import { NgClass, NgForOf } from "@angular/common";
import { Subscription } from 'rxjs';
import {HttpClientModule} from "@angular/common/http";
import {HttpClient} from "@angular/common/http";

interface Cell {
  burned: boolean; // Assuming these are boolean types
  burning: boolean;
  tree: boolean;
}

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  styleUrls: ['./grid-display.component.css'],
  standalone: true,
  imports: [
    HttpClientModule,
    NgForOf,
    NgClass
  ],
  providers: [
    HttpClientModule,
    NgForOf,
    NgClass,
    HttpClient,
    SimulationService
  ]
})
export class GridDisplayComponent implements OnDestroy {
  gridState: Cell[][] | undefined;
  loading = false;
  subscriptions: Subscription = new Subscription();

  constructor(private simulationService: SimulationService) {}

  startSimulation(): void {
    this.loading = true;
    this.subscriptions.add(
      this.simulationService.startSimulation().subscribe({
        next: (data) => {
          this.gridState = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Failed to start simulation', error);
          this.loading = false;
        }
      })
    );
  }

  stepSimulation(): void {
    this.loading = true;
    this.subscriptions.add(
      this.simulationService.stepSimulation().subscribe({
        next: (data) => {
          this.gridState = data;
          this.loading = false;
        },
        error: (error) => {
          console.error('Failed to perform simulation step', error);
          this.loading = false;
        }
      })
    );
  }

  getCellClass(cell: Cell): string {
    if (cell.burned) {
      return 'cell burned';
    } else if (cell.burning) {
      return 'cell burning';
    } else if (cell.tree) {
      return 'cell tree';
    }
    return 'cell';
  }

  getCellEmoji(cell: Cell): string {
    if (cell.tree) {
      return '🌳';
    } else if (cell.burning) {
      return '🔥';
    }
    return ''; // Empty string for cells that are neither trees nor burning
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }
}

  /*startSimulation() {
    this.simulationService.startSimulation().subscribe(data => {
      this.gridState = data;
    });
  }

  stepSimulation() {
    this.simulationService.stepSimulation().subscribe(data => {
      this.gridState = data;
    });
  }*/



 /* startSimulation(): void {
    this.simulationService.startSimulation().subscribe({
      next: (data: Cell[][]) => this.gridState = data,
      error: (error: any) => console.error('Error:', error)
    });
  }

  stepSimulation(): void {
    this.simulationService.stepSimulation().subscribe({
      next: (data: Cell[][]) => this.gridState = data,
      error: (error: any) => console.error('Error:', error)
    });
  }

  getCellClass(cell: Cell): string {
    if (cell.burned) {
      return 'cell burned';
    } else if (cell.burning) {
      return 'cell burning';
    } else if (cell.tree) {
      return 'cell tree';
    }
    return 'cell';
  }

  getCellEmoji(cell: Cell): string {
    if (cell.tree) {
      return '🌳';
    } else if (cell.burning) {
      return '🔥';
    }
    return ''; // Empty string for cells that are neither trees nor burning
  }
}








*/






  // Add methods for startSimulation and stepSimulation that update gridState

  // ... Other methods and logic ...

