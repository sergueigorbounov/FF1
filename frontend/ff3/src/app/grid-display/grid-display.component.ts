/*import { Component } from '@angular/core';
import { SimulationService } from '../simulation.service';
import { NgClass, NgForOf } from "@angular/common";

@Component({
  selector: 'app-grid-display',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
  ],
  templateUrl: './grid-display.component.html',
  styleUrl: './grid-display.component.css'
})
export class GridDisplayComponent {
  gridState: any[][] = []; // Or use a more specific type instead of 'any' if possible

  constructor(private simulationService: SimulationService) {
  }

  startSimulation(): void {
    this.simulationService.startSimulation().subscribe({
      next: (data) => this.gridState = data,
      error: (error) => console.error('Error:', error)
    });
  }

  stepSimulation(): void {
    this.simulationService.stepSimulation().subscribe({
      next: (data) => this.gridState = data,
      error: (error) => console.error('Error:', error)
    });
  }

  getCellClass(cell: any): string {
    return cell.burned ? 'burned' : cell.burning ? 'burning' : 'tree';
  }

  getCellEmoji(cell: any): string {
    return cell.tree ? '🌳' : cell.burning ? '🔥' : '';
  }
}*/
import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SimulationService } from '../simulation.service';
import {NgClass, NgForOf} from "@angular/common";
import { HttpClientModule } from '@angular/common/http';


export interface Cell {
  burned?: boolean;
  burning?: boolean;
  tree?: boolean;
}

@Component({
  selector: 'app-grid-display',
  templateUrl: './grid-display.component.html',
  standalone: true,
  providers: [SimulationService, Observable, HttpClientModule],
  imports: [HttpClientModule, NgClass,
    NgForOf],
  styleUrls: ['./grid-display.component.css']
})
export class GridDisplayComponent {
  gridState: Cell[][] = [];

  constructor(private simulationService: SimulationService) {}

  startSimulation(): void {
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

